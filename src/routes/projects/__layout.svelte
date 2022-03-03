<script>
	import { FullBleed } from 'creditdesign-svelte-components';
</script>

<style>
	:global(.full-bleed-container pre) {
		grid-column: 4 / 7;
	}
</style>

<FullBleed fullBleedStackSpace="var(--s1)">
	<slot />
</FullBleed>
