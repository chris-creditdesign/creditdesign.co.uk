import { c as create_ssr_component, e as escape } from "../../../../chunks/index-f572932e.js";
const metadata = {
  "eyebrow": "Immersive article",
  "altText": "",
  "caption": "",
  "srcURL": "img/portfolio/genomic-sequencing-small.jpg",
  "headline": "Milestones in genomic sequencing",
  "href": "https://www.nature.com/immersive/d42859-020-00099-0/index.html",
  "footnote": "Produced by <i>Nature</i>, <i>Nature Genetics</i> and <i>Nature Reviews Genetics</i>.",
  "subHead": 2021,
  "text": "Timeline and circos diagram built with <strong>Svelte</strong> and <strong>D3</strong>. For performance the background animation is rendered using <strong>PixiJS</strong>."
};
const { eyebrow, altText, caption, srcURL, headline, href, footnote, subHead, text } = metadata;
const Milestones_in_genomic_sequencing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>${escape(headline)}</h1>
<p>${escape(eyebrow)}</p>`;
});
export { Milestones_in_genomic_sequencing as default, metadata };
