<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { Step } from '$lib/types';
	import { onMount } from 'svelte';

	interface Props {
		steps: Step[];
		children?: Snippet;
		intersectingStep?: number;
	}
	let { steps, children, intersectingStep = $bindable(0) }: Props = $props();

	let mounted = $state(false);

	let stepContainer: HTMLDivElement | null = $state(null);

	/* '-50%' intercept when the item is half way up the screen */
	let options = {
		root: null,
		rootMargin: '-50% 0px -50% 0px'
	};

	onMount(() => {
		let observer: IntersectionObserver;
		let rendered_steps: Element[] = [];

		if (stepContainer && window.innerWidth > 600) {
			mounted = true;
			rendered_steps = Array.from(stepContainer.querySelectorAll('.step'));

			let onEnterScreen = (entries: IntersectionObserverEntry[]) => {
				let entriesOnScreen = entries.filter((entry) => entry.isIntersecting);

				if (entriesOnScreen.length) {
					entriesOnScreen.forEach((entry) => {
						intersectingStep = rendered_steps.indexOf(entry.target);
					});
				}
			};

			observer = new IntersectionObserver(onEnterScreen, options);

			rendered_steps.forEach((step) => observer.observe(step));
		}

		return () => rendered_steps.forEach((step) => observer.unobserve(step));
	});
</script>

<div class="nature-interactive-graphic">
	<div class="background-container">
		<div class="background">
			{#if mounted}
				{@render children?.()}
			{/if}
		</div>
	</div>

	<div class="steps" bind:this={stepContainer}>
		{#each steps as step, index (`step-${index}`)}
			<div class="l-flow step">
				{#each step.step as stepText, stepIndex (`steptext-${stepIndex}`)}
					<p>
						{@html stepText.value}
					</p>
				{/each}
			</div>
		{/each}
	</div>
</div>

<style>
	.nature-interactive-graphic {
		overflow-x: clip;
		background-color: initial;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--s2);
		grid-template-rows: 1fr;
	}

	.background-container {
		grid-column-start: 2;
		grid-column-end: 3;
		grid-row-start: 1;
		grid-row-end: 2;
		z-index: -999;
	}

	.steps {
		grid-column-start: 1;
		grid-column-end: 2;
		grid-row-start: 1;
		grid-row-end: 2;
		padding: 0;
	}

	.step {
		margin: var(--s0);
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	@media (min-width: 650px) {
		.background {
			position: sticky;
			top: 0;
			left: 0;
			min-height: 100vh;
		}

		.steps {
			margin: 0 0 50vh 0;
		}

		.step {
			margin: 0;
			min-height: 25vh;
		}

		.step:first-of-type {
			margin-block-start: 50vh;
		}

	}
</style>
