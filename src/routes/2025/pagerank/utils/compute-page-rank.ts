import type { Edge, Node } from "../types";

const DEFAULT_PAGERANK_OPTIONS = {
	/** Damping factor (probability of continuing the random walk) */
	alpha: 0.85,
	/** Convergence tolerance */
	convergenceTolerance: 1e-9,
	/** Maximum number of iterations to prevent infinite loops */
	maxIter: 100,
};

type PageRankOptions = Partial<typeof DEFAULT_PAGERANK_OPTIONS>;

/**
 * Computes the PageRank scores for a directed graph using the power iteration method.
 * Returns nodes with updated scores.
 */
function computePageRank<T extends Node>(
	nodes: T[], 
	edges: Edge[], 
	options: PageRankOptions = {}
): (T & { score: number })[] {
	const config = { ...DEFAULT_PAGERANK_OPTIONS, ...options };
	const { alpha, convergenceTolerance, maxIter } = config;

	const nodesLength = nodes.length;

	// Counts outgoing edges from node
	const outDeg = Array.from({ length: nodesLength }, () => 0);
	// Lists all nodes that each node points to
	const adjOut: number[][] = Array.from({ length: nodesLength }, () => []);

	for (const { source, target } of edges) {
		adjOut[source].push(target);
		outDeg[source]++;
	}

	// Initialize PageRank scores uniformly
	let pr = Array.from({ length: nodesLength }, () => 1 / nodesLength);

	for (let it = 0; it < maxIter; it++) {
		const next = Array(nodesLength).fill((1 - alpha) / nodesLength);

		for (let u = 0; u < nodesLength; u++) {
			
			if (outDeg[u] === 0) {
				// Dangling node - no outgoing edges
				// Distributes the node's PageRank equally to ALL nodes.
				const share = (alpha * pr[u]) / nodesLength;
				for (let v = 0; v < nodesLength; v++) {
					next[v] += share;
				}
			} else {
				// Regular node
				// Distributes the node's PageRank equally among its direct neighbors.
				const share = (alpha * pr[u]) / outDeg[u];
				for (const v of adjOut[u]) {
					next[v] += share;
				}
			}
		}

		let delta = 0;
		
		for (let i = 0; i < nodesLength; i++) {
			delta += Math.abs(next[i] - pr[i])
		};

		pr = next;

		// Stop when the total change between iterations is below the tolerance
		if (delta < convergenceTolerance) {
			break;
		}
	}

	// Return nodes with updated scores
	return nodes.map((node, index) => ({
		...node,
		score: pr[index]
	}));
}

export { computePageRank };
