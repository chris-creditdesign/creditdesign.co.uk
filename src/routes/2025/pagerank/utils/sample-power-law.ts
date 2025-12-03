/**
 * Generates random samples from a truncated power-law distribution using the inverse transform sampling method.
 * 
 * A power-law distribution has the probability density function (PDF):
 * `f(x) ∝ x^(-γ)`
 * 
 * This function creates activity levels for nodes:
 * 
 * - Nodes with higher activity are more likely to initiate connections
 * - Power-law activity distributions are common in real social networks (few very active users, many less active ones)
 * - Different groups can have different γ parameters (gamma_M vs gamma_m)
 *
 * This helps create realistic network structures where connection patterns follow observed social phenomena
 * 
 */
function samplePowerLaw(gamma: number, rng: () => number, xmax = 100) {
	// Generate uniform random number between 0 and 1
	const u = rng();

	// When γ = 1, the distribution becomes uniform in log-space, so we use a simpler formula:
	if (Math.abs(gamma - 1.0) < 1e-12) {
		return Math.pow(xmax, u);
	}

	// Implements the inverse cumulative distribution function (CDF).
	// Transform the uniform random number into a power-law distributed value.
	const oneMinusGamma = 1 - gamma;
	const base = u * (Math.pow(xmax, oneMinusGamma) - 1) + 1;

	// The result is bounded between 1 and xmax.
	return Math.pow(base, 1 / oneMinusGamma);
}

export { samplePowerLaw };
