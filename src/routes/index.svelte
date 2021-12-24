<script context="module" lang="ts">
	export const prerender = true;
</script>

<script>
	import { Center, Stack } from 'creditdesign-svelte-components';
	import { CoverBackgroundVideo } from 'nature-immersive-svelte-components';
	import WebsiteIntro from '$lib/WebsiteIntro/index.svelte';
	import PortfolioSection from '$lib/PortfolioSection/index.svelte';
	import Footer from '$lib/Footer/index.svelte';
	import portfolioArticles from '../content/portfolio-articles.json';
	let { articles } = portfolioArticles;
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
		<CoverBackgroundVideo
			srcURL="video/creditdesign-intro-small.jpg"
			alt="This is the alt text"
			coverHeight="40vh"
		>
			<h1 class="cover__centered">Credit Design</h1>
		</CoverBackgroundVideo>
	</header>

	<main>
		<Stack stackSpace="var(--s3)">
			<Center>
				<WebsiteIntro />
			</Center>

			<Center centerMeasure="140ch">
				<PortfolioSection {articles} />
			</Center>
		</Stack>
	</main>

	<footer>
		<Center><Footer /></Center>
	</footer>
</Stack>
