<script lang="ts">
	import { getGroupContext } from '../create-context.svelte';
	import { startpointOutside } from '../utils/start-point-outside';

	import Arrow from '$lib/layouts/canvas/Arrow.svelte';
	import Cross from '../Components/Cross.svelte';
	import Plus from '../Components/Plus.svelte';

	type Props = {
		key: string;
	};

	let { key }: Props = $props();

	const groupContext = getGroupContext(key);
</script>

{#if groupContext.activeNodeId !== null}
	{@const activeNode = groupContext.enhancedNodes.find(
		(node) => node.id === groupContext.activeNodeId
	)}
	{#if activeNode && groupContext.targetNodeId === null && groupContext.mouseOverContainer}
		{@const startPoint = startpointOutside(
			activeNode,
			{ cx: groupContext.pointerX, cy: groupContext.pointerY },
			groupContext.radius,
			groupContext.arrowPadding
		)}
		{#if activeNode.cx >= groupContext.pointerX + groupContext.radius + 2 || 
			activeNode.cx <= groupContext.pointerX - groupContext.radius - 2 || 
			activeNode.cy >= groupContext.pointerY + groupContext.radius + 2 || 
			activeNode.cy <= groupContext.pointerY - groupContext.radius - 2
		}
			<Arrow
				{key}
				startX={startPoint.x}
				startY={startPoint.y}
				endX={groupContext.pointerX}
				endY={groupContext.pointerY}
				color="#888888"
				curvature={0.15}
				lineDash={[5, 5]}
			/>
		{/if}
	{:else if activeNode && groupContext.targetNodeId !== null}
		{@const targetNode = groupContext.enhancedNodes.find(
			(node) => node.id === groupContext.targetNodeId
		)}
		{#if targetNode}
			{@const existingEdge = groupContext.edges.find(
				(edge) =>
					(edge.source === activeNode.id && edge.target === targetNode.id)
			)}
			{@const existingOppositeEdge = groupContext.edges.find(
				(edge) =>
					(edge.source === targetNode.id && edge.target === activeNode.id)
			)}
			{@const startPoint = startpointOutside(
				activeNode,
				targetNode,
				groupContext.radius,
				groupContext.arrowPadding
			)}
			{@const endPoint = startpointOutside(
				targetNode,
				activeNode,
				groupContext.radius,
				groupContext.arrowPadding
			)}
			{@const crossEndPoint = startpointOutside(
				targetNode,
				activeNode,
				groupContext.radius,
				groupContext.arrowPadding + 8
			)}
			{#if !existingEdge && !existingOppositeEdge}
				<Arrow
					{key}
					startX={startPoint.x}
					startY={startPoint.y}
					endX={endPoint.x}
					endY={endPoint.y}
				/>
				<Plus
					{key}
					cx={crossEndPoint.x}
					cy={crossEndPoint.y}
					r={12}
				/>
			{:else if !existingEdge && existingOppositeEdge}
				<Arrow
					{key}
					startX={startPoint.x}
					startY={startPoint.y}
					endX={endPoint.x}
					endY={endPoint.y}
					doubleHeaded={true}
				/>
				<Plus
					{key}
					cx={crossEndPoint.x}
					cy={crossEndPoint.y}
					r={12}
				/>
			{:else}
				<Cross
					{key}
					cx={crossEndPoint.x}
					cy={crossEndPoint.y}
					r={12}
				/>
			{/if}
		{/if}
	{/if}
{/if}
