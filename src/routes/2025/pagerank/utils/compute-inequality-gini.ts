import type { EnhancedNode } from "../types";

/**
 * Standard econometric implementation of the Gini coefficient for discrete data.
 * 
 * The Gini coefficient measures area between the Lorenz curve and perfect equality line:
 * 
 * - Perfect Equality: Everyone has the same score → Gini = 0
 * - Perfect Inequality: One person has everything, others have nothing → Gini = 1
 * 
 * The formula essentially:
 * 
 *  1. Calculates concentration: How much do high-ranked individuals dominate the total?
 * 	2. Normalizes this concentration against a perfect inequality scenario.
 *  3. Adjusts for discreteness: The `-(scoresLength+1)/scoresLength` term corrects for having finite data points
 * 
 *  ## Example
 * 
 *  With scores [1, 1, 1] (perfect equality):
 * 
 * - totalWeightedScores = 1×1 + 2×1 + 3×1 = 6
 * - totalScores = 3
 * - scoresLength = 3
 * - ratio = (2*6)/(3*3) = 1.333
 * - normalizationTerm = (3+1)/3 = 1.333
 * - Gini = 1.333 - 1.333 = 0 (perfect equality)
 * 
 * With scores [0, 0, 3] (maximum inequality):
 * 
 * - totalWeightedScores = 1×0 + 2×0 + 3×3 = 9
 * - totalScores = 3
 * - scoresLength = 3
 * - ratio = (2*9)/(3*3) = 2.0
 * - normalizationTerm = (3+1)/3 = 1.333
 * - Gini = 2.0 - 1.333 = 0.667 (high inequality)
 */
function computeInequalityGini(scores: EnhancedNode[]) {
	if (scores.length === 0) {
		return 0;
	}
	const scoresLength = scores.length;

	// Get just the score values
	const scoreValues = scores.map((d) => d.score || 0);

	// Put the values in ascending order - lowest to highest
	const ascendingScoreValues = [...scoreValues].sort((a, b) => a - b);

	// Total of all scores - we expect this to be 1 for normalized scores
	const totalScores = ascendingScoreValues.reduce((a, b) => a + b, 0) || 1;

	// For each score in ascending order, multiply by its rank position (i+1)
	// This gives more weight to higher scores
	// Example: If scores are [1, 2, 5] = 8, [1×1 + 2×2 + 3×5] = 20
	const weightedScorees = ascendingScoreValues.map((score, i) => (i + 1) * score);

	const totalWeightedScores = weightedScorees.reduce((a, b) => a + b, 0);

	// ratio measures how "concentrated" the scores are compared to perfect inequality
	const ratio = (2 * totalWeightedScores) / (scoresLength * totalScores);

	// Normalization term that adjusts for the discrete nature of the dat
	// For continuous distributions, this term would be 1
	// For discrete data with n points, we need this correction factor
	// As n gets large, (n+1)/n approaches 1
	// Example: For n=3, this term is (3+1)/3 = 1.333
	const normalizationTerm = (scoresLength + 1) / scoresLength;

	const inequalityGini = ratio - normalizationTerm;

	return Math.max(0, Math.min(1, inequalityGini));
}

export { computeInequalityGini };
