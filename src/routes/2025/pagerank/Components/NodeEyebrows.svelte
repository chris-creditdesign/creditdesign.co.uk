<script lang="ts">
	import { getGroupContext } from '../create-context.svelte';
	import { startpointOutside } from '../utils/start-point-outside';

	import Cross from '../Components/Cross.svelte';
	import Plus from '../Components/Plus.svelte';

	type Props = {
		key: string;
	};

	let { key }: Props = $props();

	const groupContext = getGroupContext(key);
</script>

{#if groupContext.plusNodeId !== null}
	{@const plusNode = groupContext.enhancedNodes.find((node) => node.id === groupContext.plusNodeId)}
	{#if plusNode}
		{@const startPoint = startpointOutside(
			plusNode,
			{ cx: plusNode.cx  + groupContext.radius + 30, cy: plusNode.cy - groupContext.radius - 30 },
			groupContext.radius,
			groupContext.arrowPadding
		)}
		<Plus {key} cx={startPoint.x} cy={startPoint.y} r={12} />
	{/if}
{:else if groupContext.minusNodeId !== null}
	{@const minusNode = groupContext.enhancedNodes.find(
		(node) => node.id === groupContext.minusNodeId
	)}
	{#if minusNode}
		{@const startPoint = startpointOutside(
			minusNode,
			{ cx: minusNode.cx + groupContext.radius + 30, cy: minusNode.cy - groupContext.radius - 30 },
			groupContext.radius,
			groupContext.arrowPadding
		)}
		<Cross {key} cx={startPoint.x} cy={startPoint.y} r={12} />
	{/if}
{/if}
