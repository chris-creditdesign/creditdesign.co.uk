<script lang="ts">
	import { onMount } from "svelte";
	import { Tween } from "svelte/motion";
	import { getCanvasContext } from "./create-canvas-context.svelte";

	type Props = {
		key: string;
		r: number;
		cx: number;
		cy: number;
		fill: string;
		opacity?: number;
		opacityTweenDuration?: number;
		index?: number;
	};

	let { key, r, cx, cy, fill, opacity = 1.0, opacityTweenDuration = 400, index = 0 }: Props = $props();
	
	const { circleDrawFunctions } = getCanvasContext(key);

	const tweenedOpacity = new Tween(0, {
		duration: opacityTweenDuration,
		delay: index * 0.5,
	});

	$effect(() => {
		tweenedOpacity.set(opacity);
	});

	onMount(() => {
		circleDrawFunctions.push(drawFn);

		return () => {
			circleDrawFunctions.splice(circleDrawFunctions.indexOf(drawFn), 1);
		};
	});

	const drawFn = (ctx: CanvasRenderingContext2D) => {
		ctx.save();
		ctx.globalAlpha = tweenedOpacity.current;
		ctx.fillStyle = fill;
		ctx.strokeStyle = fill;
		ctx.lineWidth = 4;

		// Scale factor based on radius
		const scale = r / 10; //

		// Draw surfboard (horizontal ellipse)
		ctx.beginPath();
		ctx.ellipse(cx, cy + 8 * scale, 16 * scale, 4 * scale, 0, 0, 2 * Math.PI);
		ctx.fill();

		// Draw surfer body 
		// ctx.beginPath();
		// ctx.ellipse(cx, cy - 4 * scale, 4 * scale, 12 * scale, 0, 0, 2 * Math.PI);
		// ctx.fill();
		ctx.beginPath();
		ctx.moveTo(cx, cy - 10 * scale);
		ctx.lineTo(cx, cy + 10 * scale);
		ctx.stroke();

		// Draw surfer head (small circle)
		ctx.beginPath();
		ctx.arc(cx, cy - 12 * scale, 3 * scale, 0, 2 * Math.PI);
		ctx.fill();

		// Draw arms (simple lines)
		ctx.beginPath();
		ctx.moveTo(cx - 6 * scale, cy - 8 * scale);
		ctx.lineTo(cx + 6 * scale, cy - 6 * scale);
		ctx.stroke();

		ctx.restore();
	};
</script>