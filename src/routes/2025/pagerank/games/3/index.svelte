<script lang="ts">
	import { setGroupContext } from '../../create-context.svelte';
	import { getDialogContext } from '../../dialog-context.svelte';
	import { generateNodes } from '../../utils/generate-nodes';
	import PageRankScores from '../../Components/PageRankScores.svelte';
	import Network from '../../Components/Network.svelte';

	const nodes = generateNodes(12, 0);

	const key = 'one';
	const groupContext = setGroupContext(key, { nodes, edges: [] });

	const dialogContext = getDialogContext();

	const handleCheckAnswerClick = () => {
		let answer = groupContext.enhancedNodes
			.sort((a, b) => b.score - a.score)
			.map((d) => d.name)
			.slice(0, 5)
			.toString();

		if (answer === 'H,I,J,K,L') {
			dialogContext.isCorrect = true;
		} else {
			dialogContext.isCorrect = false;
		}

		dialogContext.message = 'You have selected the correct answer!';
		dialogContext.isOpen = true;

		if (dialogContext.isCorrect) {
			dialogContext.message = `Well done! The correct order is ${answer}!`;
		} else {
			dialogContext.message = `I'm afraid ${answer} is the wrong order.`;
		}
	};

	const handleNetworkNodeClick = (nodeId: number) => {
		if (groupContext.activeNodeId === null) {
			groupContext.activeNodeId = nodeId;
			return;
		} else {
			let source = groupContext.activeNodeId;
			let target = nodeId;

			if (source === target) {
				groupContext.activeNodeId = null;
				return;
			}

			let id = `${source}-${target}`;

			let id_array = groupContext.edges.map((e) => e.id);

			if (id_array.includes(id)) {
				groupContext.edges = groupContext.edges.filter((e) => e.id !== id);
			} else {
				groupContext.edges = [...groupContext.edges, { id, source, target }];
			}
		}

		groupContext.activeNodeId = null;
		groupContext.targetNodeId = null;
	};

	const handleNodeMouseEnter = (nodeId: number) => {
		if (groupContext.activeNodeId !== null && groupContext.activeNodeId !== nodeId) {
			groupContext.targetNodeId = nodeId;
		}
	};

	const handleNodeMouseLeave = () => {
		groupContext.targetNodeId = null;
	};

	const handleNodeDragStart = (nodeId: number, x: number, y: number) => {
		groupContext.startDrag(nodeId, x, y);
	};

	const handleNodeDrag = (x: number, y: number) => {
		return groupContext.updateDrag(x, y);
	};

	const handleNodeDragEnd = (targetNodeId: number | null) => {
		const { wasDragging, sourceNodeId } = groupContext.endDrag(targetNodeId);
		
		// If it was actually a drag operation (not just a click), create/remove edge
		if (wasDragging && sourceNodeId !== null && targetNodeId !== null && sourceNodeId !== targetNodeId) {
			const source = sourceNodeId;
			const target = targetNodeId;
			const id = `${source}-${target}`;
			const id_array = groupContext.edges.map((e) => e.id);

			if (id_array.includes(id)) {
				groupContext.edges = groupContext.edges.filter((e) => e.id !== id);
			} else {
				groupContext.edges = [...groupContext.edges, { id, source, target }];
			}
		}
		
		// Always ensure clean state after any drag interaction (successful or not)
		// This is critical for subsequent drag operations to work properly
		if (wasDragging) {
			groupContext.activeNodeId = null;
			groupContext.targetNodeId = null;
			groupContext.plusNodeId = null;
			groupContext.minusNodeId = null;
		}
	};
</script>

<svelte:window onkeydown={groupContext.handleWindowKeydown} />

<div class="l-stack">
	<p class="u-text-align:center u-font-weight:bold">
		Add links to place the websites in the order H,I,J,K and L
	</p>

	<PageRankScores
		nodes={groupContext.enhancedNodes.sort((a, b) => b.score - a.score).slice(0, 5)}
		radius={groupContext.radius / 2}
		showScores={true}
		scoreFormat={(score) => `${(score * 100).toFixed(1)}%`}
	/>

	<Network
		{key}
		onNodeClick={handleNetworkNodeClick}
		onNodeMouseEnter={handleNodeMouseEnter}
		onNodeMouseLeave={handleNodeMouseLeave}
		onNodeDragStart={handleNodeDragStart}
		onNodeDrag={handleNodeDrag}
		onNodeDragEnd={handleNodeDragEnd}
	/>

	<div class="l-cluster" style="--cluster-justify-content: space-between;">
		<button onclick={handleCheckAnswerClick}>Check answer</button>
		<button onclick={groupContext.resetGraph}>Reset graph</button>
	</div>
</div>
