<script lang="ts">
	import { getDialogContext } from '../dialog-context.svelte';

	const dialogContext = getDialogContext();

	let myDialog: HTMLDialogElement | null = null;

	$effect(() => {
		if (dialogContext.isOpen) {
			myDialog?.showModal();
		}
	});
</script>

<dialog
	bind:this={myDialog}
	onclose={() => (dialogContext.isOpen = false)}
	class={['l-flow', dialogContext.isCorrect && 'e-dialog-correct']}
>
	{#if dialogContext.isCorrect}
		<p class="u-font-weight:bold">Correct!</p>
	{:else}
		<p class="u-font-weight:bold">Incorrect!</p>
	{/if}

	<p>{dialogContext.message}</p>

	<button onclick={() => myDialog && myDialog.close()}>Close</button>
</dialog>

<style>
	.e-dialog-correct {
		border-color: green;
		background-color: lightgreen;
	}

	/* Open state of the dialog  */
	dialog:open {
		opacity: 1;
		transform: translate(0, 0);
	}

	/* Closed state of the dialog   */
	dialog {
		opacity: 0;
		transform: translate(0, +10px);
		transition:
			opacity 300ms ease-out,
			transform 300ms ease-out,
			overlay 300ms ease-out allow-discrete,
			display 300ms ease-out allow-discrete;
		/* Equivalent to transition: all 0.7s allow-discrete; */
		border-width: 4px;
		border-radius: var(--s0);
		border-color: red;
		background-color: pink;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	/* Before open state  */
	/* Needs to be after the previous dialog:open rule to take effect as the specificity is the same */
	@starting-style {
		dialog:open {
			opacity: 0;
			transform: translate(0, +10px);
		}
	}

	/* Transition the :backdrop when the dialog modal is promoted to the top layer */
	dialog::backdrop {
		background-color: transparent;
		transition:
			display 300ms allow-discrete,
			overlay 300ms allow-discrete,
			background-color 300ms;
		/* Equivalent to transition: all 0.7s allow-discrete; */
	}

	dialog:open::backdrop {
		background-color: rgb(0 0 0 / 25%);
	}

	/* This starting-style rule cannot be nested inside the above selector
because the nesting selector cannot represent pseudo-elements. */
	@starting-style {
		dialog:open::backdrop {
			background-color: transparent;
		}
	}
</style>
