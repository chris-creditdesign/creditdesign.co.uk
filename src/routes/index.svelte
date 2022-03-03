<script context="module" lang="ts">
	export const prerender = true;

	export async function load({ fetch }) {
		const res = await fetch(`/projects.json`);
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
	import Footer from '$lib/Footer/index.svelte';

	export let projects;
</script>

<style>
	footer {
		margin-bottom: var(--s1);
	}
</style>

<svelte:head>
	<title>Chris Ryan</title>
</svelte:head>

<Stack stackSpace="var(--s3)">
	<header>
		<h1 class="cover__centered">Credit Design</h1>
	</header>

	<main>
		<Stack stackSpace="var(--s3)">
			<Center>
				<WebsiteIntro />
			</Center>

			<Center centerMeasure="140ch">
				<ProjectsSection projects={[projects[0], projects[2], projects[3], projects[1]]} />
			</Center>
		</Stack>
	</main>

	<footer>
		<Center><Footer /></Center>
	</footer>
</Stack>
