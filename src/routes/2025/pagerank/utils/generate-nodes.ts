import type { Node } from "../types";

const generateNodes = (
	numPlayers: number,
	numMinority: number,
	names?: string[]
) => {
	const nodes: Node[] = [];
	for (let i = 0; i < numPlayers; i++) {
		nodes.push({
			id: i,
			group: i < numMinority ? "m" : "M",
			name: names?.[i] || String.fromCharCode(65 + i), // Convert to letters: A, B, C, etc.
			img: `/img/${i < numMinority ? "min" : "mag"}_${(i % 4) + 1}.png`,
		});
	}

	// Shuffle the array using Fisher-Yates algorithm
	/*
	for (let i = nodes.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[nodes[i], nodes[j]] = [nodes[j], nodes[i]];
	}
	*/

	return nodes;
};

export { generateNodes };
