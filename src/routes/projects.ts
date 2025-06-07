import type { PortfolioItem } from "../types";

export const projects: PortfolioItem[] = [
	{
		eyebrow: "Data investigation",
		altText: 'Snippets of an infographic showing a map of the United States with a bar chart',
		caption: '',
		srcURL: "img/portfolio/nih-grant-terminations.jpg",
		headline: "How Trump 2.0 is slashing NIH-backed research — in charts",
		href: "https://www.nature.com/articles/d41586-025-01099-8",
		footnote: "With Max Kozlov.",
		subHead: "2025",
		text: "Series of static graphics built from <strong>original research</strong> into grant termination data. <strong>Python code cited in article</strong> and made <a href='https://github.com/chris-creditdesign/nature-nih-grant-terminations-data-wrangling/tree/main'>publicly available on GitHub</a>."
	},
	{
		eyebrow: "Data investigation and immersive graphics",
		altText: 'Grey, blue and orange circles arranged in a circle.',
		caption: '',
		srcURL: "img/portfolio/nobel-prize-small.jpg",
		headline: "How to win a Nobel prize",
		href: "https://www.nature.com/immersive/d41586-024-02897-2/index.html",
		footnote: "With Kerri Smith. <strong>Finalist:</strong> Association of British Science writters, Research Policy or Funding Story of the Year, 2024. <strong>Longlisted:</strong> Information is Beautiful Awards, 2025.",
		subHead: "2024",
		text: "<strong>Analysing Nobel Prize data</strong> to collaboratively create an immersive article combining <strong>2D and 3D graphics</strong> animated graphics with static <strong>ai2html</strong> charts."
	},
	{
		eyebrow: "Scrollytelling graphic",
		altText: 'Grey, blue and orange circles arranged in a circle.',
		caption: '',
		srcURL: "img/portfolio/womens-health-small.jpg",
		headline: "Women’s health research lacks funding – these charts show how",
		href: "https://www.nature.com/immersive/d41586-023-01475-2/index.html",
		footnote: "Written and edited by Kerri Smith.",
		subHead: "2023",
		text: "Scrollytelling canvas graphic built with <strong>Svelte</strong> and <strong>D3</strong> to be embedded in a <a href=\"https://shorthand.com/\">Shorthand</a> page."
	},
	{
		eyebrow: "Immersive article",
		altText: '3D model of an insulin molecule.',
		caption: '',
		srcURL: "img/portfolio/diabetes-small.jpg",
		headline: "Milestones in diabetes",
		href: "https://www.nature.com/immersive/d42859-021-00002-5/index.html",
		footnote: "Produced by <i>Nature</i> Milestones.",
		subHead: "2021",
		text: "Timeline and 3D animation built with <strong>Svelte</strong>, <strong>Three.js</strong> and <strong>GSAP</strong>. Insulin molecule downloaded from <em>Protein Data Bank</em> and processed with <strong>Blender</strong>."
	}
];
