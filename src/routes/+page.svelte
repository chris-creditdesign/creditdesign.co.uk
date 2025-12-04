<script lang="ts">
	import type { PortfolioItem } from '../types';
	import WebsiteIntro from '$lib/WebsiteIntro/index.svelte';
	import ProjectsSection from '$lib/ProjectsSection/index.svelte';

	interface Props {
		data: {
			projects: PortfolioItem[];
		};
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>Chris Ryan</title>
</svelte:head>

<main>
	<div class="l-stack" style="--stack-space--component: var(--s-3);">
		<div class="l-center">
			<WebsiteIntro />
		</div>

		<div class="l-center" style="--center-measure--component: 140ch;">
			<ProjectsSection projects={data.projects} />
		</div>
	</div>
</main>
