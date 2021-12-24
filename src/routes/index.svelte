<script context="module" lang="ts">
	export const prerender = true;
</script>

<script>
	import { Center, Stack } from 'creditdesign-svelte-components';
	import { CoverBackgroundVideo } from 'nature-immersive-svelte-components';
	import WebsiteIntro from '$lib/WebsiteIntro/index.svelte';
	import PortfolioSection from '$lib/PortfolioSection/index.svelte';
	import portfolioArticles from '../content/portfolio-articles.json';
	let { articles } = portfolioArticles;
</script>

<style>
	:global(body) {
		margin-bottom: var(--s1);
	}
</style>

<svelte:head>
	<title>Chris Ryan</title>
</svelte:head>

<Stack stackSpace="var(--s3)">
	<CoverBackgroundVideo
		srcURL="video/creditdesign-intro-small.jpg"
		alt="This is the alt text"
		coverHeight="40vh"
	>
		<h1 class="cover__centered">Credit Design</h1>
	</CoverBackgroundVideo>

	<Stack stackSpace="var(--s3)">
		<Center>
			<WebsiteIntro />
		</Center>

		<PortfolioSection {articles} />

		<Center>
			<div class="border-above">
				<Stack>
					<p>
						This website is built with <a href="https://kit.svelte.dev/">SvelteKit</a>, the typeface
						used is
						<a href="https://brailleinstitute.org/freefont">Atkinson Hyperlegible</a>.
					</p>

					<p>
						Credit Design is short for <strong>C</strong>hris
						<strong>R</strong>yan <strong>Edit</strong>orial
						<strong>Design</strong>, geddit?
					</p>

					<p>
						© Copyright 2021 Chris Ryan. No, sadly not ‘that’ <a
							href="https://en.wikipedia.org/wiki/Chris_Ryan">Chris Ryan</a
						>.
					</p>
				</Stack>
			</div>
		</Center>
	</Stack>
</Stack>
