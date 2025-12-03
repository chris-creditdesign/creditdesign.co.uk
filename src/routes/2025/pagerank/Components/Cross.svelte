<script lang="ts">
	import Circle from '$lib/layouts/canvas/Circle.svelte';
	import Line from '$lib/layouts/canvas/Line.svelte';

	type Props = {
		key: string;
		cx: number;
		cy: number;
		r: number;
	};

	let { key, cx, cy, r }: Props = $props();
</script>

<Circle {key} {r} {cx} {cy} fill="#FF0000" opacity={1} />
<Line {key} startX={cx - r / 2} startY={cy - r / 2} endX={cx + r / 2} endY={cy + r / 2} color="#FFFFFF" lineWidth={4} />
<Line {key} startX={cx - r / 2} startY={cy + r / 2} endX={cx + r / 2} endY={cy - r / 2} color="#FFFFFF" lineWidth={4} />