export interface AnimationConfig {
	delay?: number;
	duration?: number;
	easing?: (t: number) => number;
	css?: (t: number, u: number) => string;
	tick?: (t: number, u: number) => void;
}

export interface FlipParams {
	delay?: number;
	duration?: number | ((len: number) => number);
	easing?: (t: number) => number;
}

function cubicOut(t: number): number {
	const f = t - 1.0;
	return f * f * f + 1.0;
}

function get_zoom(element: Element): number {
	if ('currentCSSZoom' in element) {
		return (element as any).currentCSSZoom;
	}

	let current: Element | null = element;
	var zoom = 1;

	while (current !== null) {
		zoom *= +getComputedStyle(current).zoom;
		current = (current as HTMLElement).parentElement;
	}

	return zoom;
}

/**
 * Customised version of the Svelte flip animation function.
 * https://github.com/sveltejs/svelte/blob/main/packages/svelte/src/animate/index.js
 * 
 * Returns early if the CSSStyleDeclaration.transformOrigin's y-value is 0 to avoid invalid transform warnings in the console.
 * 
 * The flip function calculates the start and end position of an element and animates between them, translating the x and y values.
 * `flip` stands for [First, Last, Invert, Play](https://aerotwist.com/blog/flip-your-animations/).
 */
function flip(node: HTMLElement, { from, to }: { from: DOMRect; to: DOMRect }, params: FlipParams = {}): AnimationConfig {
	var { delay = 0, duration = (d) => Math.sqrt(d) * 120, easing = cubicOut } = params;

	var style = getComputedStyle(node);

	// find the transform origin, expressed as a pair of values between 0 and 1
	var transform = style.transform === 'none' ? '' : style.transform;
	var [ox, oy] = style.transformOrigin.split(' ').map(parseFloat);
	
	if (oy === 0) {
		return {};
	}

	ox /= node.clientWidth;
	oy /= node.clientHeight;
	

	// calculate effect of parent transforms and zoom
	var zoom = get_zoom(node); // https://drafts.csswg.org/css-viewport/#effective-zoom
	var sx = node.clientWidth / to.width / zoom;
	var sy = node.clientHeight / to.height / zoom;

	// find the starting position of the transform origin
	var fx = from.left + from.width * ox;
	var fy = from.top + from.height * oy;

	// find the ending position of the transform origin
	var tx = to.left + to.width * ox;
	var ty = to.top + to.height * oy;

	// find the translation at the start of the transform
	var dx = (fx - tx) * sx;
	var dy = (fy - ty) * sy;

	// find the relative scale at the start of the transform
	var dsx = from.width / to.width;
	var dsy = from.height / to.height;

	return {
		delay,
		duration: typeof duration === 'function' ? duration(Math.sqrt(dx * dx + dy * dy)) : duration,
		easing,
		css: (t: number, u) => {
			var x = u * dx;
			var y = u * dy;
			var sx = t + u * dsx;
			var sy = t + u * dsy;

			return `transform: ${transform} translate(${x}px, ${y}px) scale(${sx}, ${sy});`;
		}
	};
}

export { flip };
