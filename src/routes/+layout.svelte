<script lang="ts">
	import Footer from '$lib/Footer/index.svelte';
	import '$lib/scss/index.scss';
</script>

<header class="l-cluster u-box" style="--box-padding: var(--s1);">
	<a href="/"> CreditDesign </a>
</header>

<slot />

<Footer />
