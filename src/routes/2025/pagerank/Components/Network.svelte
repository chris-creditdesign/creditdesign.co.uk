<script lang="ts">
	import { getGroupContext } from '../create-context.svelte';
	import Canvas from '$lib/layouts/canvas/index.svelte';
	import HTML from '$lib/layouts/html/index.svelte';
	import Node from '../Components/Node.svelte';
	import Edges from '../Components/Edges.svelte';
	import Pointer from '../Components/Pointer.svelte';
	import NodeEyebrows from '../Components/NodeEyebrows.svelte';
	import RandomSurfer from '../Components/RandomSurfer.svelte';

	type Props = {
		key: string;
		onNodeClick?: (nodeId: number) => void;
		onNodeMouseEnter?: (nodeId: number) => void;
		onNodeMouseLeave?: () => void;
	};

	let { key, onNodeClick, onNodeMouseEnter, onNodeMouseLeave }: Props = $props();

	const groupContext = getGroupContext(key);
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions, a11y_no_static_element_interactions -->
<div
	class={["b-network-container", groupContext.nodes.length === 2 && "e-network-container--binary"]}
	bind:this={groupContext.containerElement}
	bind:offsetWidth={groupContext.containerWidth}
	bind:offsetHeight={groupContext.containerHeight}
	onclickcapture={groupContext.handleContainerClick}
	onmouseenter={() => (groupContext.mouseOverContainer = true)}
	onpointerleave={() => (groupContext.mouseOverContainer = false)}
	onpointermovecapture={groupContext.handleContainerPointerMove}
>
	<HTML
		paddingLeft={groupContext.padding.left}
		paddingTop={groupContext.padding.top}
		paddingBottom={groupContext.padding.bottom}
		paddingRight={groupContext.padding.right}
		pointerEvents={true}
	>
		{#each groupContext.enhancedNodes as node (node.id)}
			<Node
				id={node.id}
				name={node.name}
				isActive={node.id === groupContext.activeNodeId}
				onClick={(id) => onNodeClick && onNodeClick(id)}
				onMouseEnter={(id) => onNodeMouseEnter && onNodeMouseEnter(id)}
				onMouseLeave={() => onNodeMouseLeave && onNodeMouseLeave()}
				classValue="e-position-absolute"
				--top={node.cy}
				--left={node.cx}
				--radius={groupContext.radius}
				--group-border-color={node.group === 'M' ? '#DDA7DB' : '#FFC29D'}
				--group-background-color={node.group === 'M' ? '#FDE4FF' : '#FFEBE4'}
			/>
		{/each}
	</HTML>

	<Canvas
		{key}
		width={groupContext.containerWidth}
		height={groupContext.containerWidth}
		dpr={2}
		paddingLeft={groupContext.padding.left}
		paddingTop={groupContext.padding.top}
	>
		<Edges {key} />
		<Pointer {key} />
		<NodeEyebrows {key} />
		<RandomSurfer {key} />
	</Canvas>
</div>

<style>
	.b-network-container {
		position: relative;
		aspect-ratio: 1 / 1;
		max-width: 800px;
		background-color: lightblue;
		border-radius: var(--s0);

		&.e-network-container--binary {
			aspect-ratio: 4 / 1;
		}
	}
</style>
