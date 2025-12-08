<script>
	import CardHeadline from '$lib/CardHeadline/index.svelte';

	/**
	 * - eyebrow
	 * - subHead
	 * - headline
	 * - href
	 */
	export let cardData;

	/**
	 * Space between eyebrow, headline and sub-head
	 */
	export let cardHeaderStackSpace = 'var(--s-4)';
	export let headerLevel = 'h2';
	export let headlineFontSize = 'big-2';
	export let id = '';

	let { eyebrow, subHead, headline, href } = cardData;
</script>

<header>
	<div class="l-stack" style="--stack-space--component: {cardHeaderStackSpace};">
		{#if eyebrow}
			<p class="b-eyebrow">
				{@html eyebrow}
			</p>
		{/if}

		<CardHeadline {cardData} {id} {headerLevel} {headlineFontSize}>
			{#if href}
				<a
					{href}
					id={id.length ? id : null}
					data-track="click"
					data-event-category="body links"
					data-event-action="click"
					data-event-label={headline}
				>
					{@html headline}
				</a>
			{:else}
				{@html headline}
			{/if}
		</CardHeadline>

		{#if subHead}
			<p class="b-subhead">
				{@html subHead}
			</p>
		{/if}
	</div>
</header>

<style>
	a {
		text-decoration: none;
	}

	.b-eyebrow, .b-subhead {
		font-size: 0.8rem;
	}
</style>
