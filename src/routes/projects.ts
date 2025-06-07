import type { PortfolioItem } from "../types";

export const projects: PortfolioItem[] = [
	{
		eyebrow: "Data investigation",
		altText: 'Grey, blue and orange circles arranged in a circle.',
		caption: '',
		srcURL: "img/portfolio/nobel-prize-small.jpg",
		headline: "How to win a Nobel prize",
		href: "https://www.nature.com/immersive/d41586-024-02897-2/index.html",
		footnote: "With Kerri Smith. Finalist: Association of British Science writters, Research Policy or Funding Story of the Year.",
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
	},
	{
		eyebrow: "Immersive article",
		altText: 'Map of africa with countries coloured according to malaria prevalence.',
		caption: '',
		srcURL: "img/portfolio/malaria-small.jpg",
		headline: "Malaria’s ticking time bomb",
		href: "https://www.nature.com/immersive/d41586-018-05772-z/index.html",
		footnote: "Written by Amy Maxmen and edited by Brendan Maher.",
		subHead: "2018",
		text: "Featuring a scrollytelling map built with <strong>d3</strong>. Data processed with <strong>pandas</strong> and <strong>d3-geo</strong>."
	},
	{
		eyebrow: "Interactive graphic",
		altText: 'Thick red curved lines crossing on a grey background.',
		caption: '',
		srcURL: "img/portfolio/refugees-small.jpg",
		headline: "What the numbers say about refugees",
		href: "https://www.nature.com/news/what-the-numbers-say-about-refugees-1.21548",
		footnote: "Static graphics and colour scheme by Jasiek Krzysztofiak. Written by Declan Butler and edited by Brendan Maher.",
		subHead: "2017",
		text: "Built with a customised version of the <strong>d3-sankey</strong> plugin to allow countries to be sorted by continent or by volume of people."
	},
	{
		eyebrow: "Interactive graphic",
		altText: "",
		caption: "",
		srcURL: "img/portfolio/indirect-costs-small.jpg",
		headline: "Indirect costs: Keeping the lights on",
		href: "https://www.nature.com/news/indirect-costs-keeping-the-lights-on-1.16376#/interactive",
		footnote: "Written by Heidi Ledford and edited by Brendan Maher.",
		subHead: "2014",
		text: "Brushable Scatterplot built with <strong>D3</strong>. Original data analysis performed with <strong>python</strong> and <strong>csvKit</strong>, hosted on <a href='https://github.com/chris-creditdesign/nature-indirect-costs'>GitHub</a> and cited within the article."
	}
];
