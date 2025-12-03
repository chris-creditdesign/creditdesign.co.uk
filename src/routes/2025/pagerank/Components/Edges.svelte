<script lang="ts">
	import { SvelteMap } from 'svelte/reactivity';
	import { getGroupContext } from '../create-context.svelte';
	import { startpointOutside } from '../utils/start-point-outside';
	import { endpointOutside } from '../utils/end-point-outside';

	import Arrow from '$lib/layouts/canvas/Arrow.svelte';
 
	type Props = {
		key: string;
	};

	let { key }: Props = $props();

	const groupContext = getGroupContext(key);
		
	// Create a map for efficient node lookup by ID
	const nodeMap = $derived(new SvelteMap(groupContext.enhancedNodes.map(node => [node.id, node])));
</script>

{#each groupContext.enhancedEdges as { id, source, target, isBidirectional }, index (`${id}-${index}`)}
	{@const sourceNode = nodeMap.get(source)}
	{@const targetNode = nodeMap.get(target)}
	{#if sourceNode && targetNode}
		{@const startPoint = startpointOutside(
			sourceNode,
			targetNode,
			groupContext.radius,
			groupContext.arrowPadding
		)}
		{@const endPoint = endpointOutside(
			sourceNode,
			targetNode,
			groupContext.radius,
			groupContext.arrowPadding
		)}
	{@const startX = startPoint.x}
	{@const startY = startPoint.y}
	{@const endX = endPoint.x}
	{@const endY = endPoint.y}
	<Arrow
		{key}
		{startX}
		{startY}
		{endX}
		{endY}
		doubleHeaded={isBidirectional}
		opacity={groupContext.activeNodeId === null || sourceNode.id === groupContext.activeNodeId || targetNode.id === groupContext.activeNodeId ? 1 : 0.1}
	/>
	{/if}
{/each}
