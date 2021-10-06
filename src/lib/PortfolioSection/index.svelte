<script>
	import { CardSideImage, CardSideImageBox } from 'nature-immersive-svelte-components';

	export let articles;
</script>

{#each articles as cardData, i}
	{#if i % 2}
		<CardSideImage headerLevel="none" headlineFontSize="big-1" {cardData} sidebarOnLeft={i % 2} />
	{:else}
		<CardSideImageBox
			headerLevel="none"
			headlineFontSize="big-1"
			{cardData}
			sidebarOnLeft={i % 2}
		/>
	{/if}
{/each}
