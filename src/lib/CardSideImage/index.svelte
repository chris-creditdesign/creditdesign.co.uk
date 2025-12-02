<script>
	import Card from '$lib/Card/index.svelte';
	import Image from '$lib/Image/index.svelte';

	/**
	 * - altText
	 * - caption
	 * - eyebrow
	 * - footnote
	 * - headline
	 * - href
	 * - srcURL
	 * - subHead
	 * - text
	 */
	export let cardData;
	export let cardHeaderStackSpace = 'var(--s-4)';
	export let className = '';
	export let headerLevel = 'h2';
	export let headlineFontSize = 'big-2';
	export let id = '';
	/**
	 * Minimum percentage of the components width that the text can
	 * be squashed to before switching to the stacked view.
	 */
	export let textMinWidth = '50%';
	export let imageOnLeft = true;
	/**
	 * Space between the text block and the image,
	 * either stacked or side by side.
	 */
	export let sidebarSpace = 'var(--s-1)';
	/**
	 * Width of the image when in side by side view.
	 */
	export let imageWidth = 'var(--s7)';
	/**
	 * Stack space within the text block
	 */
	export let stackSpace = 'var(--s-1)';
	export let relatedLinksStackSpace = 'var(--s-3)';
	export let theme = '';

	let { altText, caption, srcURL } = cardData;

	let cardDataNoImage = { ...cardData, srcURL: undefined };
</script>

<div class={`card--side-image ${className}`} data-theme={theme}>
	{#if srcURL}
		<div class="l-stack" style="--stack-space--component: {sidebarSpace};">
			<div
				class="l-sidebar"
				style="--sidebar-space--component: {sidebarSpace}; --sidebar-width--component: {imageWidth}; --sidebar-on-right--component: {imageOnLeft
					? 'false'
					: 'true'}; --sidebar-content-min-width--component: {textMinWidth};"
			>
				<div class="l-sidebar__content">
					<Image {altText} {caption} {srcURL} />
				</div>
				<div class="l-sidebar__main-content">
					<Card
						{cardHeaderStackSpace}
						{headerLevel}
						{headlineFontSize}
						{id}
						{stackSpace}
						{relatedLinksStackSpace}
						cardData={cardDataNoImage}
						{theme}
					/>
				</div>
			</div>
		</div>
	{:else}
		<Card
			{cardData}
			{cardHeaderStackSpace}
			{headerLevel}
			{id}
			{stackSpace}
			{relatedLinksStackSpace}
			{theme}
		>
			<slot />
		</Card>
	{/if}
</div>
