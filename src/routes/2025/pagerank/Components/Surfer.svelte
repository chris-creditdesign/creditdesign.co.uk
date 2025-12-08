<script lang="ts">
	import { onMount } from 'svelte';
	import { getCanvasContext } from '$lib/layouts/canvas/create-canvas-context.svelte';

	type Props = {
		key: string;
		r: number;
		cx: number;
		cy: number;
	};

	let { key, r, cx, cy }: Props = $props();

	const { circleDrawFunctions } = getCanvasContext(key);

	let fill = '#000000';
	let outline = '#ffffff';

	onMount(() => {
		circleDrawFunctions.push(drawFn);

		return () => {
			circleDrawFunctions.splice(circleDrawFunctions.indexOf(drawFn), 1);
		};
	});

	const drawBody = (ctx: CanvasRenderingContext2D, scale: number) => {
		// Draw torso
		ctx.beginPath();
		ctx.moveTo(cx, cy - 4 * scale);
		ctx.lineTo(cx, cy + 2 * scale);
		ctx.stroke();

		// Draw bent left arm
		ctx.beginPath();
		ctx.moveTo(cx, cy - 6 * scale); // shoulder
		ctx.lineTo(cx - 8 * scale, cy - 4 * scale); // elbow
		ctx.lineTo(cx - 12 * scale, cy - 8 * scale); // hand
		ctx.stroke();

		// Draw bent right arm
		ctx.beginPath();
		ctx.moveTo(cx, cy - 6 * scale); // shoulder
		ctx.lineTo(cx + 6 * scale, cy - 2 * scale); // elbow
		ctx.lineTo(cx + 10 * scale, cy - 6 * scale); // hand
		ctx.stroke();

		// Draw bent left leg (thigh)
		ctx.beginPath();
		ctx.moveTo(cx, cy + 2 * scale); // hip
		ctx.lineTo(cx - 4 * scale, cy + 8 * scale); // knee
		ctx.stroke();

		// Draw bent left leg (shin)
		ctx.beginPath();
		ctx.moveTo(cx - 4 * scale, cy + 8 * scale); // knee
		ctx.lineTo(cx - 2 * scale, cy + 12 * scale); // foot
		ctx.stroke();

		// Draw bent right leg (thigh)
		ctx.beginPath();
		ctx.moveTo(cx, cy + 2 * scale); // hip
		ctx.lineTo(cx + 2 * scale, cy + 10 * scale); // knee
		ctx.stroke();

		// Draw bent right leg (shin)
		ctx.beginPath();
		ctx.moveTo(cx + 2 * scale, cy + 10 * scale); // knee
		ctx.lineTo(cx + 6 * scale, cy + 14 * scale); // foot
		ctx.stroke();
	};

	const drawFn = (ctx: CanvasRenderingContext2D) => {
		ctx.save();
		ctx.globalAlpha = 1.0;
		ctx.fillStyle = fill;
		ctx.strokeStyle = outline;
		ctx.lineWidth = 4;
		ctx.lineCap = 'round';
		ctx.lineJoin = 'round';

		// Scale factor based on radius
		const scale = r / 10;

		// Draw angled surfboard (rotated ellipse)
		ctx.beginPath();
		const boardAngle = Math.PI / 6; // 30 degrees
		ctx.ellipse(cx - 1 * scale, cy + 12 * scale, 18 * scale, 5 * scale, boardAngle, 0, 2 * Math.PI);
		ctx.stroke();
		ctx.fill();

		// Draw surfer head (circle)
		ctx.beginPath();
		ctx.arc(cx, cy - 12 * scale, 3 * scale, 0, 2 * Math.PI);
		ctx.stroke();
		ctx.fill();

		ctx.strokeStyle = outline;
		ctx.lineWidth = 8;
		drawBody(ctx, scale);

		ctx.strokeStyle = fill;
		ctx.lineWidth = 4;
		drawBody(ctx, scale);

		ctx.restore();
	};
</script>
