<script lang="ts">
	import type { Step } from '../../types';
	import ScrollyTelling from '$lib/layouts/scrollytelling/index.svelte';
	import { setGroupContext } from '../../create-context.svelte';
	import { generateNodes } from '../../utils/generate-nodes';
	import Network from '../../Components/Network.svelte';
	import PageRankScores from '../../Components/PageRankScores.svelte';

	const nodes = generateNodes(4, 0);
	const nodesWithScores = $state(
		Array.from({ length: 4 }, (_, i) => ({
			name: String.fromCharCode(65 + i), // Convert to letters: A, B, C, etc.
			id: i,
			score: 0,
			group: 'M' as const,
			cx: 0,
			cy: 0,
			img: ''
		}))
	);

	const edges = [
		{ id: '0-1', source: 0, target: 1 },
		{ id: '1-2', source: 1, target: 2 },
		{ id: '2-3', source: 2, target: 3 },
		{ id: '3-0', source: 3, target: 0 },
		{ id: '1-3', source: 1, target: 3 },
		{ id: '3-1', source: 3, target: 1 },
		{ id: '2-0', source: 2, target: 0 }
	];

	const key = $props.id();
	const groupContext = setGroupContext(key, { nodes, edges });
	groupContext.randomSurfer.visible = true;

	let intersectingStep = $state(0);
	let currentNodePositionIndex = $state(0);

	$effect(() => {
		groupContext.randomSurfer.cx = groupContext.enhancedNodes[currentNodePositionIndex].cx;
		groupContext.randomSurfer.cy = groupContext.enhancedNodes[currentNodePositionIndex].cy;
	});

	const steps: Step[] = [
		{
			step: [
				{
					type: 'text',
					value:
						"Let's try that out. Our Random Surfer starts their random journey through the internet by picking a website to start with. How do they pick that website, you guessed it, randomly"
				}
			]
		},
		{
			step: [
				{
					type: 'text',
					value:
						"As the Random Surfer moves through the simplified and probably very boring internet with just four websites, we'll keep count of how many times they visit each page"
				}
			]
		},
		{
			step: [
				{ type: 'text', value: "Each time they land on a new page, we'll update that page's score" }
			]
		},
		{
			step: [
				{
					type: 'text',
					value:
						'Pages that have more incoming links are more likely to be visited and to see their scores increase'
				}
			]
		},
		{
			step: [
				{
					type: 'text',
					value:
						'And because these pages are more likely to be visited, the pages they link to are in turn more likely to be visited and to then get higher scores themselves'
				}
			]
		},
		{
			step: [
				{
					type: 'text',
					value:
						"As we've seen, a link from a more important page matters more than a link from a less important page"
				}
			]
		},
		{
			step: [
				{
					type: 'text',
					value:
						'We can look at the scores and calculate what percentage of the total score belongs to each page'
				}
			]
		},
		{
			step: [
				{
					type: 'text',
					value:
						'The higher the percentage the more likely a Random Surfer is to be on that page at any given time'
				}
			]
		}
	];

	$effect(() => {
		// Add edges based on the intersecting step
		switch (intersectingStep) {
			case 0:
				currentNodePositionIndex = 0;
				nodesWithScores[0].score = 1;
				nodesWithScores[1].score = 0;
				nodesWithScores[2].score = 0;
				nodesWithScores[3].score = 0;
				break;
			case 1:
				currentNodePositionIndex = 1;
				nodesWithScores[0].score = 1;
				nodesWithScores[1].score = 1;
				nodesWithScores[2].score = 0;
				nodesWithScores[3].score = 0;
				break;
			case 2:
				currentNodePositionIndex = 2;
				nodesWithScores[0].score = 1;
				nodesWithScores[1].score = 1;
				nodesWithScores[2].score = 1;
				nodesWithScores[3].score = 0;
				break;
			case 3:
				currentNodePositionIndex = 3;
				nodesWithScores[0].score = 1;
				nodesWithScores[1].score = 1;
				nodesWithScores[2].score = 1;
				nodesWithScores[3].score = 1;
				break;
			case 4:
				currentNodePositionIndex = 1;
				nodesWithScores[0].score = 1;
				nodesWithScores[1].score = 2;
				nodesWithScores[2].score = 1;
				nodesWithScores[3].score = 1;
				break;
			case 5:
				currentNodePositionIndex = 3;
				nodesWithScores[0].score = 1;
				nodesWithScores[1].score = 2;
				nodesWithScores[2].score = 1;
				nodesWithScores[3].score = 2;
				break;
			case 6:
				currentNodePositionIndex = 0;
				nodesWithScores[0].score = 2;
				nodesWithScores[1].score = 2;
				nodesWithScores[2].score = 1;
				nodesWithScores[3].score = 2;
				break;
			case 7:
				currentNodePositionIndex = 1;
				nodesWithScores[0].score = 2;
				nodesWithScores[1].score = 3;
				nodesWithScores[2].score = 1;
				nodesWithScores[3].score = 2;
				break;
			default:
				break;
		}
	});
</script>

<ScrollyTelling {steps} bind:intersectingStep>
	<div class="flex-container">
		<div class="network-container">
			<div class="l-stack">
				<PageRankScores
					nodes={nodesWithScores}
					radius={groupContext.radius / 2}
					showScores={true}
				/>
				<Network {key} />
			</div>
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
