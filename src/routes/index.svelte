<script>
	import { Center, Stack, Box } from "creditdesign-svelte-components";
	import RelatedArticleContainer from "../components/RelatedArticleContainer/index.svelte";

	let malaria = {
		altText: "Three young girls bathing in the Mekong river in Cambodia.",
		caption: "Adam Dean for <i>Nature</i>",
		srcURL: "img/portfolio/malaria-small.jpg",
		headline: "Malaria’s ticking time bomb",
		href: "https://www.nature.com/immersive/d41586-018-05772-z/index.html",
		footnote: "2018",
	};

	let natures10 = {
		altText:
			"Syringe and viral particles forming the shape of the number ten.",
		caption: "AXS Studio",
		srcURL: "img/portfolio/natures-10-small.jpg",
		headline: "Nature’s 10",
		href: "https://www.nature.com/immersive/d41586-020-03435-6/index.html",
		footnote: "2020",
	};

	let encode = {
		altText:
			"Stylised illustration showing strands of DNA arranged to form the number 3.",
		caption: "StoryTK",
		srcURL: "img/portfolio/encode-small.jpg",
		headline: "Encode 3",
		href: "https://www.nature.com/immersive/d42859-020-00027-2/index.html",
		footnote: "2020",
	};

	let cancer = {
		altText: "Stylised cells forming the shape of a crab.",
		srcURL: "img/portfolio/cancer-milestones-small.jpg",
		headline: "Milestones in cancer",
		href: "https://www.nature.com/immersive/d42859-020-00083-8/index.html",
		footnote: "2020",
	};

	let indirectCosts = {
		altText: "Coloured dots forming part of a scatter plot.",
		srcURL: "img/portfolio/indirect-costs-small.jpg",
		headline: "Indirect costs",
		href:
			"https://www.nature.com/news/indirect-costs-keeping-the-lights-on-1.16376#/interactive",
		footnote: "2014",
	};

	let refugees = {
		altText: "Close up view of a sankey diagram",
		srcURL: "img/portfolio/refugees-small.jpg",
		headline: "What the numbers say about refugees",
		href:
			"https://www.nature.com/news/what-the-numbers-say-about-refugees-1.21548",
		footnote: "2017",
	};
</script>

<svelte:head>
	<title>Chris Ryan</title>
</svelte:head>

<Box boxSpace="var(--s2)">
	<Center>
		<Stack stackSpace="var(--s3)">
			<Stack stackSpace="var(--s-3)">
				<h1>Hi I'm Chris Ryan</h1>

				<p>
					A Senior Art Editor
					<a href="https://twitter.com/naturenews">@NatureNews</a>
					in London.
				</p>

				<p>
					You can find me on
					<a href="https://github.com/chris-creditdesign">GitHub</a>
					and
					<a href="https://codepen.io/chris-creditdesign">CodePen</a>.
				</p>
			</Stack>

			<RelatedArticleContainer
				headline="Immersive articles"
				relatedArticles={[natures10, encode, cancer, malaria]} />

			<RelatedArticleContainer
				headline="Interactive graphics"
				relatedArticles={[refugees, indirectCosts]} />

			<p>© Copyright 2021 Chris Ryan</p>
		</Stack>
	</Center>
</Box>
