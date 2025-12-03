import type { EnhancedNode } from "../types";

function computeInequity(nodes: EnhancedNode[], { kMax = 100, kStep = 10 } = {}) {
	const nodesLength = nodes.length;

	// Calculate baseline: What percentage of the population is minority?
	const minorityPop = nodes.filter(d => d.group === 'm').length;
	const baseline = minorityPop / nodesLength; // demographic parity baseline

	// Sort by score desc (top ranked first)
	const descendingScore = [...nodes].sort((a, b) => (b.score || 0) - (a.score || 0));

	const series = [];
	for (let k = 1; k <= kMax; k += kStep) {
		// Take the top k% of nodes
		const take = Math.max(1, Math.round((k / 100) * nodesLength));
		// Count what fraction of those top nodes are minority
		const top = descendingScore.slice(0, take);
		const minorityInTop = top.filter(d => d.group === 'm').length;
		const fractionMinorityInTopK = minorityInTop / take;

		// Compare to population baseline
		// Error > 0: Over-represented in top-k%
		// Error < 0: Under-represented in top-k%
		const error = fractionMinorityInTopK - baseline; // signed error (paper's definition)
		series.push(error);
	}

	// Compute Mean Error (ME) across all top-k% ranks
	const inequityME =
		series.reduce((a, b) => a + b, 0) / series.length;

	return inequityME;
}

export { computeInequity };
