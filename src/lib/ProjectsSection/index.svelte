<script lang="ts">
	import type { PortfolioItem } from '../../types';
	import { Stack, Grid } from 'creditdesign-svelte-components';
	import CardSideImage from '$lib/CardSideImage/index.svelte';
	import CardSideImageBox from '$lib/CardSideImageBox/index.svelte';

	interface Props {
		projects: PortfolioItem[];
	}

	let { projects }: Props = $props();
</script>

<div class="border-above border-below">
	<Stack stackSpace="var(--s-1)">
		<h2>Projects</h2>

		<Grid gridSpace="var(--s4)" list={true}>
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
		</Grid>
	</Stack>
</div>

<style>
	li {
		max-width: none;
	}
</style>
