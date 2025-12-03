<script lang="ts">
	import type { Snippet } from 'svelte';
	import { setCanvasContext } from './create-canvas-context.svelte';

	interface Props {
		key: string;
		width: number;
		height: number;
		dpr: number;
		paddingLeft: number;
		paddingTop: number;
		children: Snippet;
	}

	let { key, width, height, dpr, paddingLeft, paddingTop, children }: Props = $props();

	const canvasContext =
		setCanvasContext(key);

	let ctx: CanvasRenderingContext2D | null = $state(null);
	let animationFrame: number | null = $state(null);

	const drawCanvas = () => {
		if (!ctx) return;

		ctx.clearRect(0, 0, width * dpr, height * dpr);
		ctx.save();
		ctx.scale(dpr, dpr);

		ctx.translate(paddingLeft, paddingTop);

		canvasContext.linkDrawFunctions.forEach((drawFn) => {
			if (ctx) {
				drawFn(ctx);
			}
		});

		canvasContext.circleDrawFunctions.forEach((drawFn) => {
			if (ctx) {
				drawFn(ctx);
			}
		});

		canvasContext.lineDrawFunctions.forEach((drawFn) => {
			if (ctx) {
				drawFn(ctx);
			}
		});

		canvasContext.textDrawFunctions.forEach((drawFn) => {
			if (ctx) {
				drawFn(ctx);
			}
		});

		ctx.restore();
	};

	// Canvas action for setup and cleanup
	function canvasAction(canvas: HTMLCanvasElement) {
		ctx = canvas.getContext('2d');

		function animate() {
			drawCanvas();
			animationFrame = requestAnimationFrame(animate);
		}

		if (ctx) {
			animate();
		}

		return {
			destroy() {
				if (animationFrame) {
					cancelAnimationFrame(animationFrame);
					animationFrame = null;
				}
				ctx = null;
			}
		};
	}
</script>

<canvas use:canvasAction width={width * dpr} height={height * dpr} aria-hidden="true"> </canvas>

{@render children?.()}

<style>
	canvas {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: auto;
		pointer-events: none;
	}
</style>
