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
		ctx.beginPath();
		ctx.fillStyle = fill;
		ctx.arc(cx, cy, r, 0, 2 * Math.PI, true);
		ctx.fill();
		ctx.restore();
	};
</script>
