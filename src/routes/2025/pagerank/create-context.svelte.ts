import { setContext, getContext } from "svelte";
import { SvelteSet, SvelteMap } from 'svelte/reactivity';
import type { Node, EnhancedNode, Edge, EnhancedEdge, Data } from "./types";
import { computePageRank } from './utils/compute-page-rank';
import { computeInequalityGini } from './utils/compute-inequality-gini';
import { computeInequity } from './utils/compute-inequity';

class GroupContext {
	constructor(data: Data = { nodes: [], edges: [] }) {
		this.nodes = data.nodes;
		this.edges = data.edges;
		this.starterEdges = data.edges;
	}

	// CONSTANTS
	paddingAmount = 0.03; // 3% padding
	radius = 30;
	// distance to push the arrow past the target center (radius + padding)
	arrowPadding = 4;
	// minimum distance to drag before starting drag operation (prevents accidental drags)
	// Lower threshold for touch devices to make dragging easier
	dragThreshold = 6;

	// STATE
	nodes: Node[] = $state([]);
	edges: Edge[] = $state([]);
	starterEdges: Edge[] = $state([]);
	containerWidth = $state(800);
	containerHeight = $state(800);
	activeNodeId: null | number = $state(null);
	targetNodeId: null | number = $state(null);
	plusNodeId: null | number = $state(null);
	minusNodeId: null | number = $state(null);
	pointerX = $state(0);
	pointerY = $state(0);
	mouseOverContainer = $state(true);
	containerElement: HTMLElement | null = $state(null);
	// Drag state
	isDragging = $state(false);
	dragStartNodeId: null | number = $state(null);
	dragStartTime = $state(0);
	dragStartX = $state(0);
	dragStartY = $state(0);
	randomSurfer = $state({
		visible: false,
		cx: 0,
		cy: 0,
	});

	// DERRIVED
	padding = $derived(
		{
			top: this.containerWidth * this.paddingAmount,
			bottom: this.containerWidth * this.paddingAmount,
			left: this.containerWidth * this.paddingAmount,
			right: this.containerWidth * this.paddingAmount,
		}
	);
	height = $derived(
		this.containerHeight - this.padding.top - this.padding.bottom
	);
	width = $derived(
		this.containerWidth - this.padding.left - this.padding.right
	);
	centerX = $derived(this.width / 2);
	centerY = $derived(this.height / 2);
	ringRadius = $derived(Math.min(this.width, this.height) / 2 - this.padding.left - this.padding.right);

	// Enhanced nodes with scores, cx, and cy properties - optimized single-pass approach
	enhancedNodes: EnhancedNode[] = $derived.by(() => {
		// Get nodes with PageRank scores in a single efficient operation
		const nodesWithScores = computePageRank(this.nodes, this.edges);

		if (this.nodes.length === 2) {
			return nodesWithScores.map((node, i) => {
				const xPos = i === 0
					? this.width / 6 + this.padding.left
					: this.width * 5 / 6 + this.padding.left;
				return {
					...node,
					cx: xPos,
					cy: this.centerY,
				};
			});
		} else {
			return nodesWithScores.map((node, i) => {
				const angle = (2 * Math.PI * i) / this.nodes.length - Math.PI / 2; // start at top
				return {
					...node,
					cx: this.centerX + this.ringRadius * Math.cos(angle),
					cy: this.centerY + this.ringRadius * Math.sin(angle),
				};
			});
		}
	});

	// Create a function to process edges and identify bidirectional pairs
	enhancedEdges: EnhancedEdge[] = $derived.by(() => {
		const processedEdges = new SvelteSet<string>();
		const edgeMap = new SvelteMap<string, Edge>();
		const result: EnhancedEdge[] = [];

		// Create a map for quick lookup
		this.edges.forEach(edge => {
			edgeMap.set(`${edge.source}-${edge.target}`, edge);
		});

		this.edges.forEach(edge => {
			const edgeKey = `${edge.source}-${edge.target}`;
			const reverseKey = `${edge.target}-${edge.source}`;

			// Skip if we've already processed this edge pair
			if (processedEdges.has(edgeKey)) return;

			const reverseEdge = edgeMap.get(reverseKey);

			if (reverseEdge) {
				// Bidirectional edge found - only add the forward direction
				result.push({
					...edge,
					isBidirectional: true,
				});

				// Mark both directions as processed
				processedEdges.add(edgeKey);
				processedEdges.add(reverseKey);
			} else {
				// Unidirectional edge
				result.push({
					...edge,
					isBidirectional: false,
				});

				processedEdges.add(edgeKey);
			}
		});

		return result;
	})

	// Gini coefficient of PageRank scores
	giniCoefficient = $derived(computeInequalityGini(this.enhancedNodes));

	inequityME = $derived(computeInequity(this.enhancedNodes));

	// METHODS
	handleContainerPointerMove = (event: PointerEvent) => {
		// Always calculate relative to the container, regardless of what element triggered the event
		if (this.containerElement) {
			const rect = this.containerElement.getBoundingClientRect();
			const offsetX = event.clientX - rect.left;
			const offsetY = event.clientY - rect.top;

			this.pointerX = offsetX - this.padding.left;
			this.pointerY = offsetY - this.padding.top;
			
			// Ensure mouseOverContainer is true when we're getting pointer moves
			this.mouseOverContainer = true;
		}
	};

	handleContainerClick = (event: MouseEvent) => {
		if ((event.target as Element)?.nodeName !== 'BUTTON') {
			// Reset all interaction state when clicking empty space
			this.activeNodeId = null;
			this.targetNodeId = null;
			this.plusNodeId = null;
			this.minusNodeId = null;
			// Also cancel any ongoing drag
			if (this.isDragging || this.dragStartNodeId !== null) {
				this.cancelDrag();
			}
		}
	};

	handleWindowKeydown = (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			// Cancel all interactions on escape
			this.cancelDrag();
		}
	};

	resetGraph = () => {
		this.edges = [...this.starterEdges];
	};

	// Drag methods
	startDrag = (nodeId: number, x: number, y: number) => {
		this.dragStartNodeId = nodeId;
		this.dragStartTime = Date.now();
		this.dragStartX = x;
		this.dragStartY = y;
		this.isDragging = false; // Will become true once threshold is exceeded
	};

	updateDrag = (x: number, y: number) => {
		if (this.dragStartNodeId === null) return false;

		const deltaX = x - this.dragStartX;
		const deltaY = y - this.dragStartY;
		const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

		if (!this.isDragging && distance > this.dragThreshold) {
			this.isDragging = true;
			this.activeNodeId = this.dragStartNodeId;
		}

		return this.isDragging;
	};

	endDrag = (targetNodeId: number | null) => {
		const wasDragging = this.isDragging;
		const sourceNodeId = this.dragStartNodeId;

		// Reset ALL drag and pointer state
		this.isDragging = false;
		this.dragStartNodeId = null;
		this.dragStartTime = 0;
		this.dragStartX = 0;
		this.dragStartY = 0;
		
		// Also ensure active/target states are reset if this was a drag
		if (wasDragging) {
			this.activeNodeId = null;
			this.targetNodeId = null;
			// For touch devices, also reset mouse state to prevent stale pointer arrows
			this.mouseOverContainer = false;
		}

		return { wasDragging, sourceNodeId };
	};

	cancelDrag = () => {
		// Reset ALL drag and pointer state completely
		this.isDragging = false;
		this.dragStartNodeId = null;
		this.dragStartTime = 0;
		this.dragStartX = 0;
		this.dragStartY = 0;
		this.activeNodeId = null;
		this.targetNodeId = null;
		this.plusNodeId = null;
		this.minusNodeId = null;
	};

	// Force complete reset of all interaction state
	resetInteractionState = () => {
		this.cancelDrag();
		// Ensure we're in a completely clean state
	};
}

const setGroupContext = (key: string, data: Data) => {
	const context = new GroupContext(data);
	setContext(key, context);
	return context;
};

const getGroupContext = (key: string) => {
	return getContext<GroupContext>(key);
};

export { setGroupContext, getGroupContext };
