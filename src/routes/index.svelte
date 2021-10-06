<script context="module" lang="ts">
	export const prerender = true;
</script>

<script>
	import { Center, Stack } from 'creditdesign-svelte-components';
	import { CoverBackgroundVideo } from 'nature-immersive-svelte-components';
	import WebsiteIntro from '$lib/WebsiteIntro/index.svelte';
	import PortfolioSection from '$lib/PortfolioSection/index.svelte';

	let genomicSequencing = {
		eyebrow: 'Immersive article',
		altText: '',
		caption: '',
		srcURL: 'img/portfolio/genomic-sequencing-small.jpg',
		headline: 'Milestones in genomic sequencing',
		href: 'https://www.nature.com/immersive/d42859-020-00099-0/index.html',
		footnote:
			'Produced by <i>Nature</i>, <i>Nature Genetics</i> and <i>Nature Reviews Genetics</i>.',
		subHead: '2021',
		text: `
	  Timeline and circos diagram built with <strong>Svelte</strong> and <strong>D3</strong>.
	  For performance the background animation is rendered using <strong>PixiJS</strong>.
	  `
	};

	let malaria = {
		eyebrow: 'Immersive article',
		altText: '',
		caption: '',
		srcURL: 'img/portfolio/malaria-small.jpg',
		headline: 'Malaria’s ticking time bomb',
		href: 'https://www.nature.com/immersive/d41586-018-05772-z/index.html',
		footnote: 'Written by Amy Maxmen and edited by Brendan Maher.',
		subHead: '2018',
		text: `
		Full-screen scrollytelling map built with <strong>d3</strong>. 
		Data processed with <strong>pandas</strong> and <strong>d3-geo</strong>, recorded in a <strong>Jupyter Notebook</strong> and uploaded to <a href="https://github.com/chris-creditdesign/nature-malaria-prep">GitHub</a>.
	`
	};

	let refugees = {
		eyebrow: 'Interactive graphic',
		altText: '',
		caption: '',
		srcURL: 'img/portfolio/refugees-small.jpg',
		headline: 'What the numbers say about refugees',
		href: 'https://www.nature.com/news/what-the-numbers-say-about-refugees-1.21548',
		footnote:
			'Static graphics and colour scheme by Jasiek Krzysztofiak. Written by Declan Butler and edited by Brendan Maher.',
		subHead: '2017',
		text: `
		Built with a customised version of the <strong>d3-sankey</strong> plugin to allow countries to be sorted by continent or by volume of people.
		The code for this graphic is available on <a href="https://github.com/chris-creditdesign/nature-refugees-sankey-2017">GitHub</a>.
	`
	};

	let indirectCosts = {
		eyebrow: 'Interactive graphic',
		altText: '',
		caption: '',
		srcURL: 'img/portfolio/indirect-costs-small.jpg',
		headline: 'Indirect costs',
		href: 'https://www.nature.com/news/indirect-costs-keeping-the-lights-on-1.16376#/interactive',
		footnote: 'Written by Heidi Ledford and edited by Brendan Maher.',
		subHead: '2014',
		text: `
		Brushable Scatterplot built with <strong>D3</strong>.
		Original data analysis performed with <strong>python</strong> and <strong>csvKit</strong>, hosted on <a href="https://github.com/chris-creditdesign/nature-indirect-costs">GitHub</a> and cited within the article.
	`
	};
</script>

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

	<Center>
		<Stack stackSpace="var(--s2)">
			<WebsiteIntro />

			<Stack stackSpace="var(--s-1)">
				<h2 class="border-above">Portfolio</h2>

				<p>These are some of my favourite projects from the last few years.</p>
			</Stack>

			<PortfolioSection articles={[genomicSequencing, malaria, refugees, indirectCosts]} />

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
		</Stack>
	</Center>
</Stack>

<style>
	:global(body) {
		margin-bottom: var(--s1);
	}
</style>
