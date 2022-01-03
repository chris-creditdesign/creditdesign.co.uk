<script>
	import { Stack, GridList } from 'creditdesign-svelte-components';
	import { CardSideImage, CardSideImageBox } from 'nature-immersive-svelte-components';

	export let projects;
</script>

<div class="border-above border-below">
	<Stack stackSpace="var(--s-1)">
		<h2>Projects</h2>

		<p>These are some of my favourite projects from the last few years:</p>

		<GridList gridSpace="var(--s4)">
			{#each projects as cardData, i}
				{#if i === 0 || i === 3}
					<li>
						<CardSideImageBox
							headerLevel="none"
							headlineFontSize="big-1"
							{cardData}
							imageWidth="20ch"
							sidebarSpace="var(--s1)"
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
							imageOnLeft={false}
						/>
					</li>
				{/if}
			{/each}
		</GridList>
	</Stack>
</div>
