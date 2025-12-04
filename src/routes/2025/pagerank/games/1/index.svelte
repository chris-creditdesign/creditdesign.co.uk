<script lang="ts">
	import type { EnhancedNode } from '../../types';
	import { setGroupContext } from '../../create-context.svelte';
	import { getDialogContext } from '../../dialog-context.svelte';
	import { generateNodes } from '../../utils/generate-nodes';
	import PageRankScores from '../../Components/PageRankScores.svelte';
	import Network from '../../Components/Network.svelte';

	const nodes = generateNodes(4, 0);

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
	const dialogContext = getDialogContext();

	let topOneNodes: EnhancedNode[] = $state([]);
	let correctAnswer = $derived(
		groupContext.enhancedNodes
			.sort((a, b) => b.score - a.score)
			.map((d) => d.id)
			.slice(0, 1)
	);

	const handlePageRankScoresNodeClick = (nodeId: number) => {
		const topFiveIndex = topOneNodes.findIndex((n) => n.id === nodeId);
		if (topFiveIndex > -1) {
			topOneNodes.splice(topFiveIndex, 1);
		}
	};

	const handleNetworkNodeClick = (nodeId: number) => {
		const node = groupContext.enhancedNodes.find((n) => n.id === nodeId);
		const topOneIndex = topOneNodes.findIndex((n) => n.id === nodeId);
		if (node && topOneNodes.length < 1 && topOneIndex === -1) {
			// If the node is not already selected and we have space, add it
			topOneNodes.push(node);
			groupContext.plusNodeId = null;
			groupContext.minusNodeId = nodeId;
		} else if (node && topOneNodes.length >= 1 && topOneIndex === -1) {
			// If we have no space, remove the existing node and add the new one
			topOneNodes.splice(0, 1, node!);
			groupContext.plusNodeId = null;
			groupContext.minusNodeId = nodeId;
			return;
		} else if (topOneIndex > -1) {
			// If the node is already selected, remove it
			topOneNodes.splice(topOneIndex, 1);
			groupContext.plusNodeId = nodeId;
			groupContext.minusNodeId = null;
		}
	};

	const handleCheckAnswerClick = () => {
		dialogContext.isCorrect = topOneNodes.map((d) => d.id).toString() === correctAnswer.toString();

		if (dialogContext.isCorrect) {
			dialogContext.message = 'You have selected the correct answer!';
		} else {
			dialogContext.message = 'You have selected the wrong answer.';
		}

		dialogContext.isOpen = true;
	};

	const handleResetTop5Nodes = () => {
		topOneNodes = [];
	};

	const handleNetworkNodeMouseEnter = (nodeId: number) => {
		const topFiveIndex = topOneNodes.findIndex((n) => n.id === nodeId);
		if (topOneNodes.length < 1 && topFiveIndex === -1) {
			groupContext.plusNodeId = nodeId;
		} else if (topFiveIndex > -1) {
			groupContext.minusNodeId = nodeId;
		}
	};

	const handleNetworkNodeMouseLeave = () => {
		groupContext.plusNodeId = null;
		groupContext.minusNodeId = null;
	};
</script>

<svelte:window onkeydown={groupContext.handleWindowKeydown} />

<div class="l-stack">
	<p class="u-text-align:center u-font-weight:bold">The Box of Guilt</p>

	<PageRankScores
		nodes={topOneNodes}
		radius={groupContext.radius / 2}
		showScores={false}
		onNodeClick={handlePageRankScoresNodeClick}
	/>

	<Network
		{key}
		onNodeClick={handleNetworkNodeClick}
		onNodeMouseEnter={handleNetworkNodeMouseEnter}
		onNodeMouseLeave={handleNetworkNodeMouseLeave}
	/>

	<div class="l-cluster" style="--cluster-justify-content: space-between;">
		<button onclick={handleCheckAnswerClick}>Check answer</button>
		<button onclick={handleResetTop5Nodes}>Reset answer</button>
	</div>
</div>
