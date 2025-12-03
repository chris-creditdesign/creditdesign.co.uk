export type Group = 'M' | 'm';

export type Node = { id: number; group: Group; name: string, img: string };

export type EnhancedNode = Node & { cx: number; cy: number, score: number };

export type Edge = { id: string; source: number; target: number };

export type EnhancedEdge = Edge & { isBidirectional: boolean; };

export type Data = { nodes: Node[]; edges: Edge[]; };

export type DrawFunction = (context: CanvasRenderingContext2D) => void;

export type Step = {
	step: {
		type: string;
		value: string;
	}[];
}
