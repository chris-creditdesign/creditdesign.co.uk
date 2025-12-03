/**
 * Selects an index from the weights array using roulette wheel selection.
 * 
 * Each index's probability of being selected is proportional to its weight.
 * 
 * - Source selection: Nodes with higher activity have higher probability of initiating connections.
 * - Target selection: Nodes with higher homophily × in-degree have higher probability of receiving connections
 * 
 */
function rouletteIndex(weights: number[], rng: () => number) {
	const wheelSize = weights.reduce((a, b) => a + b, 0);

	// Handle edge case where all weights are zero or negative
	// Fall back to uniform random selection.
	if (wheelSize <= 0) {
		return Math.floor(rng() * weights.length);
	}

	// A random point between 0 and the total weight sum.
	// This simulates spinning the roulette wheel.
	let x = rng() * wheelSize;
	
	// Find the index where the random point falls.
	// Walk through the weights, subtracting each one from x. 
	// When x becomes ≤ 0, we've found our selected index.
	for (let i = 0; i < weights.length; i++) {
		x -= weights[i];
		if (x <= 0) {
			return i;
		}
	}

	// Fallback (should not reach here if weights are positive)
	return weights.length - 1;
}

export { rouletteIndex };