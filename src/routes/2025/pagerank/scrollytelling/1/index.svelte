<script lang="ts">
	import type { Step } from '../../types';
	import ScrollyTelling from '$lib/layouts/scrollytelling/index.svelte';
	import { setGroupContext } from '../../create-context.svelte';
	import { generateNodes } from '../../utils/generate-nodes';
	import Network from '../../Components/Network.svelte';

	const nodes = generateNodes(4, 0);

	const key = $props.id();
	const groupContext = setGroupContext(key, { nodes, edges: [] });

	let intersectingStep = $state(0);

	const steps: Step[] = [
		{
			step: [
				{
					type: 'text',
					value: "It's <em>The Banishment Ceremony</em>."
				},
				{
					type: 'text',
					value: 'Everyone has to nominate someone to be the traitor.'
				},
				{
					type: 'text',
					value: "They can't pick themselves."
				},
				{
					type: 'text',
					value: "If they're unsure, they can pick more than one person."
				}
			]
		},
		{
			step: [
				{
					type: 'text',
					value: "In this diagram, a black arrow represents an accusation. Let's say A accuses B..."
				}
			]
		},
		{
			step: [
				{
					type: 'text',
					value: 'B accuses C and D...'
				}
			]
		},
		{
			step: [
				{
					type: 'text',
					value: 'C accuses A and D...'
				}
			]
		},
		{
			step: [
				{
					type: 'text',
					value: 'and finally D accuses A and B.'
				}
			]
		}
	];

	$effect(() => {
		// Add edges based on the intersecting step
		switch (intersectingStep) {
			case 0:
				groupContext.edges = [];
				break;
			case 1:
				groupContext.edges = [{ id: '0-1', source: 0, target: 1 }];
				break;
			case 2:
				groupContext.edges = [
					{ id: '0-1', source: 0, target: 1 },
					{ id: '1-2', source: 1, target: 2 },
					{ id: '1-3', source: 1, target: 3 }
				];
				break;
			case 3:
				groupContext.edges = [
					{ id: '0-1', source: 0, target: 1 },
					{ id: '1-2', source: 1, target: 2 },
					{ id: '1-3', source: 1, target: 3 },
					{ id: '2-0', source: 2, target: 0 },
					{ id: '2-3', source: 2, target: 3 }
				];
				break;
			case 4:
				groupContext.edges = [
					{ id: '0-1', source: 0, target: 1 },
					{ id: '1-2', source: 1, target: 2 },
					{ id: '1-3', source: 1, target: 3 },
					{ id: '2-0', source: 2, target: 0 },
					{ id: '2-3', source: 2, target: 3 },
					{ id: '3-0', source: 3, target: 0 },
					{ id: '3-1', source: 3, target: 1 }
				];
				break;
			default:
				break;
		}
	});
</script>

<ScrollyTelling {steps} bind:intersectingStep>
	<div class="flex-container">
		<div class="network-container">
			<p class="u-text-align:center u-font-weight:bold">The Banishment Ceremony</p>
			<Network {key} />
		</div>
	</div>
</ScrollyTelling>

<style>
	.flex-container {
		display: flex;
		align-items: center;
		min-height: 100vh;
	}

	.network-container {
		flex-grow: 1;
	}
</style>
