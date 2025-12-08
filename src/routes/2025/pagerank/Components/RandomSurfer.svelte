<script lang="ts">
	import { Tween } from 'svelte/motion';
	import { getGroupContext } from '../create-context.svelte';
	import Surfer from './Surfer.svelte';

	type Props = {
		key: string;
	};

	let { key }: Props = $props();

	const groupContext = getGroupContext(key);

	const tweenedCx = new Tween(0, {
		duration: 300,
	});

	const tweenedCy = new Tween(0, {
		duration: 300,
	});

	$effect(() => {
		tweenedCx.set(groupContext.randomSurfer.cx);
		tweenedCy.set(groupContext.randomSurfer.cy);
	});
</script>

{#if groupContext.randomSurfer.visible}
	<Surfer
		{key}
		r={groupContext.radius * 0.6}
		cx={tweenedCx.current}
		cy={tweenedCy.current}
		opacity={1}
	/>
{/if}
