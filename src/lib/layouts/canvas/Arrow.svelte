<script lang="ts">
	import { onMount } from 'svelte';
	import { Tween } from 'svelte/motion';
	import { getCanvasContext } from './create-canvas-context.svelte';

	type Props = {
		key: string;
		startX: number;
		startY: number;
		endX: number;
		endY: number;
		curvature?: number;
		lineWidth?: number;
		arrowHeadSize?: number;
		opacity?: number;
		color?: string;
		doubleHeaded?: boolean;
		lineDash?: number[];
	};

	let {
		key,
		startX,
		startY,
		endX,
		endY,
		curvature = 0.15,
		lineWidth = 3,
		arrowHeadSize = 16,
		opacity = 1,
		color = '#000000',
		doubleHeaded = false,
		lineDash = []
	}: Props = $props();

	const { linkDrawFunctions } = getCanvasContext(key);

	let tweenedOpacity = new Tween(0, { duration: 400 });

	$effect(() => {
		tweenedOpacity.set(opacity);
	});

	onMount(() => {
		linkDrawFunctions.push(drawFn);

		return () => {
			linkDrawFunctions.splice(linkDrawFunctions.indexOf(drawFn), 1);
		};
	});

	function drawFn(ctx: CanvasRenderingContext2D) {
		// don't draw degenerate arrows
		if (startX === endX && startY === endY) return;

		// compute a control point for a slight perpendicular offset (quadratic Bezier)
		const dx = endX - startX;
		const dy = endY - startY;
		const len = Math.hypot(dx, dy) || 1;

		// relative curvature (0 = straight line). tweak for more/less curve.
		// perpendicular unit vector
		const nx = -dy / len;
		const ny = dx / len;

		// control point placed at midpoint plus perpendicular offset
		const midX = (startX + endX) / 2;
		const midY = (startY + endY) / 2;
		const cx = midX + nx * (curvature * len);
		const cy = midY + ny * (curvature * len);

		// Calculate arrowhead parameters
		const head = arrowHeadSize;
		const sideAngle = Math.PI / 6; // 30 degrees

		// Calculate where line should end (before arrowhead)
		const endTanX = endX - cx;
		const endTanY = endY - cy;
		const endAngle = Math.atan2(endTanY, endTanX);
		const endTanLen = Math.hypot(endTanX, endTanY) || 1;
		
		// Calculate the exact distance to shorten based on arrowhead geometry
		// This is the distance from the tip to the base of the triangle along the arrow direction
		const shortenDistance = head * Math.cos(sideAngle);
		const lineEndX = endX - (endTanX / endTanLen) * shortenDistance;
		const lineEndY = endY - (endTanY / endTanLen) * shortenDistance;

		// Calculate start line endpoint for double-headed arrows
		let lineStartX = startX;
		let lineStartY = startY;
		
		if (doubleHeaded) {
			const startTanX = cx - startX;
			const startTanY = cy - startY;
			const startTanLen = Math.hypot(startTanX, startTanY) || 1;
			
			// Position the line to start after the start arrowhead
			// Move along the tangent direction by the arrowhead base distance
			lineStartX = startX + (startTanX / startTanLen) * shortenDistance;
			lineStartY = startY + (startTanY / startTanLen) * shortenDistance;
		}

		// Draw the curved line (shortened to not go behind arrowheads)
		ctx.save();
		ctx.strokeStyle = color;
		ctx.lineWidth = lineWidth;
		ctx.lineJoin = 'round';
		ctx.globalAlpha = tweenedOpacity.current;
		ctx.setLineDash(lineDash);
		ctx.beginPath();
		ctx.moveTo(lineStartX, lineStartY);
		ctx.quadraticCurveTo(cx, cy, lineEndX, lineEndY);
		ctx.stroke();
		ctx.restore();

		// Draw arrowheads
		ctx.save();
		ctx.globalAlpha = tweenedOpacity.current;
		ctx.fillStyle = color;

		// Draw arrowhead at the end point
		ctx.beginPath();
		ctx.moveTo(endX, endY);
		ctx.lineTo(
			endX - head * Math.cos(endAngle - sideAngle),
			endY - head * Math.sin(endAngle - sideAngle)
		);
		ctx.lineTo(
			endX - head * Math.cos(endAngle + sideAngle),
			endY - head * Math.sin(endAngle + sideAngle)
		);
		ctx.closePath();
		ctx.fill();

		// Draw arrowhead at the start point if double-headed
		if (doubleHeaded) {
			const startTanX = cx - startX;
			const startTanY = cy - startY;
			const startAngle = Math.atan2(startTanY, startTanX) + Math.PI; // Rotate 180 degrees

			ctx.beginPath();
			ctx.moveTo(startX, startY);
			ctx.lineTo(
				startX - head * Math.cos(startAngle - sideAngle),
				startY - head * Math.sin(startAngle - sideAngle)
			);
			ctx.lineTo(
				startX - head * Math.cos(startAngle + sideAngle),
				startY - head * Math.sin(startAngle + sideAngle)
			);
			ctx.closePath();
			ctx.fill();
		}

		ctx.restore();
	}
</script>
