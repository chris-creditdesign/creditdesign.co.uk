import type { Node, Edge } from "../types";
import { mulberry32 } from "./mulberry-32";
import { samplePowerLaw } from "./sample-power-law";
import { rouletteIndex } from "./roulette-index";

const DEFAULT_DPAH_OPTIONS = {
	/** Seed for random number generation (for reproducibility) */
	seed: 123,
	/** Homophily for majority-to-majority connections */
	h_MM: 0.8,
	/** Homophily for minority-to-minority connections */
	h_mm: 0.5,
	/** Power-law exponent for majority group activity */
	gamma_M: 3.0,
	/** Power-law exponent for minority group activity */
	gamma_m: 3.0,
};

type GenerateNetworkDPAHOptions = Partial<typeof DEFAULT_DPAH_OPTIONS>;

/**
 * Generates edges for a network using a Degree-Preserving Activity-Driven Homophily (DPAH) model.
 * This model combines:
 * 
 * - Activity-driven edge formation (nodes with higher activity are more likely to initiate connections)
 * - Homophily-based target selection (nodes prefer to connect to similar nodes based on group membership)
 * - Power-law distributed activity levels (reflecting real-world social network patterns)
 * 
 * This function helps create realistic social network structures where connection patterns
 * reflect both individual activity levels and group-based homophily.
 */
export function generateNetworkDPAH(
	nodes: Node[],
	numEdges: number,
	options: GenerateNetworkDPAHOptions = {}
) {
	const config = { ...DEFAULT_DPAH_OPTIONS, ...options };
	const { seed, h_MM, h_mm, gamma_M, gamma_m } = config;

	const nodesLength = nodes.length;
	const randomNumberGenerator = mulberry32(seed); // Seeded random number generator

	// map labels -> 'M'/'m'
	const groups = nodes.map((d) => d.group);

	const homophilyMap = {
		"M|M": h_MM,     // Majority-to-majority connection probability
		"m|m": h_mm,     // Minority-to-minority connection probability  
		"M|m": 1 - h_MM, // Majority-to-minority connection probability
		"m|M": 1 - h_mm, // Minority-to-majority connection probability
	};

	// activity-driven source probs (power-law per group)
	const activities = groups.map((g) =>
		samplePowerLaw(g === "M" ? gamma_M : gamma_m, randomNumberGenerator)
	);

	const actSum = activities.reduce((a, b) => a + b, 0) || 1;
	const srcProbs = activities.map((a) => a / actSum);

	// Keep track of how many incoming edges point to each node
	const inDeg = Array.from({ length: nodesLength }, () => 0);
	const edges: Edge[] = [];
	const existingEdges = new Set<string>(); // Track existing edges to prevent duplicates

	for (let i = 0; i < numEdges; i++) {
		let sourceIndex = -1;
		let targetIndex = -1;
		let edgeId = "";
		let attempts = 0;
		const maxAttempts = numEdges * 10; // Prevent infinite loops

		// Keep trying until we find a unique edge or reach max attempts
		do {
			sourceIndex = rouletteIndex(srcProbs, randomNumberGenerator);
			const targetWeights = Array.from({ length: nodesLength }, () => 0);

			for (let v = 0; v < nodesLength; v++) {
				// No self-loops and skip if edge already exists
				if (v === sourceIndex) {
					continue;
				}
				
				const potentialEdgeId = `${nodes[sourceIndex].id}-${nodes[v].id}`;
				if (existingEdges.has(potentialEdgeId)) {
					continue;
				}

				const homophily = homophilyMap[`${groups[sourceIndex]}|${groups[v]}`];

				// Combine homophily and popularity of target nodes to create preferential attachment.
				// Nodes that already have many incoming connections are more likely to receive new ones.			
				targetWeights[v] = homophily * inDeg[v];
			}

			const s = targetWeights.reduce((a, b) => a + b, 0);

			// At the beginning, when all nodes have inDeg = 0,
			// Fall back to pure homophily-based selection.
			if (s === 0) {
				for (let v = 0; v < nodesLength; v++) {
					// No self-loops and skip if edge already exists
					if (v === sourceIndex) {
						continue;
					}
					
					const potentialEdgeId = `${nodes[sourceIndex].id}-${nodes[v].id}`;
					if (existingEdges.has(potentialEdgeId)) {
						continue;
					}

					targetWeights[v] = homophilyMap[`${groups[sourceIndex]}|${groups[v]}`];
				}
			}

			// If no valid targets remain, break to avoid infinite loop
			const totalWeight = targetWeights.reduce((a, b) => a + b, 0);
			if (totalWeight === 0) {
				break;
			}

			targetIndex = rouletteIndex(targetWeights, randomNumberGenerator);
			edgeId = `${nodes[sourceIndex].id}-${nodes[targetIndex].id}`;
			attempts++;

		} while (existingEdges.has(edgeId) && attempts < maxAttempts);

		// Only add edge if it's unique and we haven't exceeded max attempts
		if (!existingEdges.has(edgeId) && attempts < maxAttempts && targetIndex !== -1) {
			existingEdges.add(edgeId);
			edges.push({
				id: edgeId,
				source: nodes[sourceIndex].id,
				target: nodes[targetIndex].id,
			});

			// After creating an edge, increment the target node's in-degree count.
			inDeg[targetIndex] += 1;
		}
	}

	return edges;
}
