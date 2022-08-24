import { c as create_ssr_component, e as escape } from "../../../../chunks/index-f572932e.js";
const metadata = {
  "eyebrow": "Interactive graphic",
  "altText": "",
  "caption": "",
  "srcURL": "img/portfolio/refugees-small.jpg",
  "headline": "What the numbers say about refugees",
  "href": "https://www.nature.com/news/what-the-numbers-say-about-refugees-1.21548",
  "footnote": "Static graphics and colour scheme by Jasiek Krzysztofiak. Written by Declan Butler and edited by Brendan Maher.",
  "subHead": 2017,
  "text": "Built with a customised version of the <strong>d3-sankey</strong> plugin to allow countries to be sorted by continent or by volume of people. The code for this graphic is available on <a href='https://github.com/chris-creditdesign/nature-refugees-sankey-2017'>GitHub</a>."
};
const { eyebrow, altText, caption, srcURL, headline, href, footnote, subHead, text } = metadata;
const What_the_numbers_say_about_refugees = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>${escape(headline)}</h1>
<p>${escape(eyebrow)}</p>`;
});
export { What_the_numbers_say_about_refugees as default, metadata };
