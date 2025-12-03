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

<Circle {key} {r} {cx} {cy} fill="#0000FF" opacity={1} />
<Line {key} startX={cx - r * 0.7} startY={cy} endX={cx + r * 0.75} endY={cy} color="#FFFFFF" lineWidth={4} />
<Line {key} startX={cx} startY={cy - r * 0.7} endX={cx} endY={cy + r * 0.7} color="#FFFFFF" lineWidth={4} />
