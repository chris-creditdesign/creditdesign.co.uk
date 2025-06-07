<script lang="ts">
	import type { PortfolioItem } from '../types';
	import { Center, Stack } from 'creditdesign-svelte-components';
	import WebsiteIntro from '$lib/WebsiteIntro/index.svelte';
	import ProjectsSection from '$lib/ProjectsSection/index.svelte';

	interface Props {
		data: {
			projects: PortfolioItem[];
		}
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>Chris Ryan</title>
</svelte:head>

<main>
	<Stack stackSpace="var(--s3)">
		<Center>
			<WebsiteIntro />
		</Center>

		<div class="center" style="--center-measure--component: 140ch;">
			<ProjectsSection projects={data.projects} />
		</div>
	</Stack>
</main>
