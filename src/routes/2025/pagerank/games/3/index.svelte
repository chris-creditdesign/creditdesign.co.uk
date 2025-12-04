<script lang="ts">
	import { setGroupContext } from '../../create-context.svelte';
	import { getDialogContext } from '../../dialog-context.svelte';
	import { generateNodes } from '../../utils/generate-nodes';
	import PageRankScores from '../../Components/PageRankScores.svelte';
	import Network from '../../Components/Network.svelte';

	const nodes = generateNodes(12, 0);

	const key = 'one';
	const groupContext = setGroupContext(key, { nodes, edges: [] });

	const dialogContext = getDialogContext();

	const handleCheckAnswerClick = () => {
		let answer = groupContext.enhancedNodes
			.sort((a, b) => b.score - a.score)
			.map((d) => d.name)
			.slice(0, 5)
			.toString();

		console.log(answer);

		if (answer === 'H,I,J,K,L') {
			dialogContext.isCorrect = true;
		} else {
			dialogContext.isCorrect = false;
		}

		dialogContext.message = 'You have selected the correct answer!';
		dialogContext.isOpen = true;
	};

	const handleNetworkNodeClick = (nodeId: number) => {
		if (groupContext.activeNodeId === null) {
			groupContext.activeNodeId = nodeId;
			return;
		} else {
			let source = groupContext.activeNodeId;
			let target = nodeId;

			if (source === target) {
				groupContext.activeNodeId = null;
				return;
			}

			let id = `${source}-${target}`;

			let id_array = groupContext.edges.map((e) => e.id);

			if (id_array.includes(id)) {
				groupContext.edges = groupContext.edges.filter((e) => e.id !== id);
			} else {
				groupContext.edges = [...groupContext.edges, { id, source, target }];
			}
		}

		groupContext.activeNodeId = null;
		groupContext.targetNodeId = null;
	};

	const handleNodeMouseEnter = (nodeId: number) => {
		if (groupContext.activeNodeId !== null && groupContext.activeNodeId !== nodeId) {
			groupContext.targetNodeId = nodeId;
		}
	};

	const handleNodeMouseLeave = () => {
		groupContext.targetNodeId = null;
	};
</script>

<svelte:window onkeydown={groupContext.handleWindowKeydown} />

<div class="l-stack">
	<p class="u-text-align:center u-font-weight:bold">Add links to place the websites in the order H,I,J,K and L</p>

	<PageRankScores
		nodes={groupContext.enhancedNodes.sort((a, b) => b.score - a.score).slice(0, 5)}
		radius={groupContext.radius / 2}
		showScores={true}
		scoreFormat={(score) => `${(score * 100).toFixed(1)}%`}
	/>

	<Network
		{key}
		onNodeClick={handleNetworkNodeClick}
		onNodeMouseEnter={handleNodeMouseEnter}
		onNodeMouseLeave={handleNodeMouseLeave}
	/>

	<div class="l-cluster" style="--cluster-justify-content: space-between;">
		<button onclick={handleCheckAnswerClick}>Check answer</button>
		<button onclick={groupContext.resetGraph}>Reset graph</button>
	</div>
</div>
