<script context="module" lang="ts">
	export const prerender = true;

	export async function load({ fetch }) {
		const res = await fetch(`/projects.js`);
		const { projects } = await res.json();

		return {
			props: { projects }
		};
	}
</script>

<script>
	import { Center, Stack } from 'creditdesign-svelte-components';
	import WebsiteIntro from '$lib/WebsiteIntro/index.svelte';
	import ProjectsSection from '$lib/ProjectsSection/index.svelte';

	export let projects;
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
			<ProjectsSection projects={[projects[0], projects[2], projects[3], projects[1]]} />
		</div>
	</Stack>
</main>
