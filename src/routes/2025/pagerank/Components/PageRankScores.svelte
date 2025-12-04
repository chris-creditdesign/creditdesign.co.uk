<script lang="ts">
	import { flip } from '$lib/animate/flip';
	import { slide } from 'svelte/transition';
	import type { EnhancedNode } from '../types';
	import Node from '../Components/Node.svelte';

	type Props = {
		nodes: EnhancedNode[];
		radius: number;
		showScores?: boolean;
		scoreFormat?: (score: number) => string;
		onNodeClick?: (nodeId: number) => void;
	};

	let { nodes, radius, showScores = false, scoreFormat, onNodeClick }: Props = $props();
</script>

{#snippet node(id: number, name: string, group: string, radius: number)}
	<Node
		{id}
		{name}
		onClick={(id) => onNodeClick && onNodeClick(id)}
		--radius={radius}
		--group-border-color={group === 'M' ? '#DDA7DB' : '#FFC29D'}
		--group-background-color={group === 'M' ? '#FDE4FF' : '#FFEBE4'}
	/>
{/snippet}

<ul class="l-cluster" style="--cluster-justify-content: space-around; --cluster-space: var(--s1);">
	{#each nodes as { id, name, score, group }, index (`node-${id}`)}
		<li animate:flip={{ duration: 400 }} in:slide={{ duration: 400 }} out:slide={{ duration: 400 }}>
			<div class="l-stack" style="--stack-space: 0; align-items: center;">
				<span class="u-font-weight:bold">{index + 1}</span>
				{@render node(id, name, group, radius)}
				{#if showScores}
					<span>{scoreFormat ? scoreFormat(score) : score}</span>
				{/if}
			</div>
		</li>
	{/each}
</ul>

<style>
	ul {
		min-height: 6.5em;
		border: 4px solid black;
		border-radius: var(--s0);
		padding: var(--s0);
	}
</style>
