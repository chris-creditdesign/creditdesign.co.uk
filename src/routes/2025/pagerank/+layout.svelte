<script lang="ts">
	import { setDialogContext } from './dialog-context.svelte';
	import Dialog from './Components/Dialog.svelte';

	let { children } = $props();

	import '$lib/scss/index.scss';

	setDialogContext();
</script>

<main class="b-main">
	{@render children()}
</main>

<Dialog />

