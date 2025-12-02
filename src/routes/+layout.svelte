<script lang="ts">
	import Header from '$lib/Header/index.svelte';
	import Footer from '$lib/Footer/index.svelte';
	import '$lib/scss/index.scss';
</script>

<Header />

<slot />

<Footer />
