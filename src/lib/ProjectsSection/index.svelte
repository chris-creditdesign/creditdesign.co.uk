<script lang="ts">
	import type { PortfolioItem } from '../../types';
	import CardSideImage from '$lib/CardSideImage/index.svelte';
	import CardSideImageBox from '$lib/CardSideImageBox/index.svelte';

	interface Props {
		projects: PortfolioItem[];
	}

	let { projects }: Props = $props();
</script>

<div class="border-above border-below">
	<div class="l-stack" style="--stack-space--component: var(--s-1);">
		<h2>Projects</h2>

		<ul
			class="l-grid"
			style="--grid-column-space--component: var(--s-4); --grid-min-width--component: var(--measure);"
		>
			{#each projects as cardData, i (i)}
				{#if i % 4 === 0 || i % 4 === 3}
					<li>
						<CardSideImageBox
							headerLevel="none"
							headlineFontSize="big-1"
							{cardData}
							imageWidth="20ch"
							sidebarSpace="var(--s1)"
							imageOnLeft={false}
						/>
					</li>
				{:else}
					<li>
						<CardSideImage
							headerLevel="none"
							headlineFontSize="big-1"
							{cardData}
							imageWidth="20ch"
							sidebarSpace="var(--s1)"
						/>
					</li>
				{/if}
			{/each}
		</ul>
	</div>
</div>

<style>
	li {
		max-width: none;
	}
</style>
