import { c as create_ssr_component, e as escape } from "../../../../chunks/index-f572932e.js";
const metadata = {
  "eyebrow": "Immersive article",
  "altText": "",
  "caption": "",
  "srcURL": "img/portfolio/malaria-small.jpg",
  "headline": "Malaria\u2019s ticking time bomb",
  "href": "https://www.nature.com/immersive/d41586-018-05772-z/index.html",
  "footnote": "Written by Amy Maxmen and edited by Brendan Maher.",
  "subHead": 2018,
  "text": "Full-screen scrollytelling map built with <strong>d3</strong>. Data processed with <strong>pandas</strong> and <strong>d3-geo</strong>, recorded in a <strong>Jupyter Notebook</strong> and uploaded to <a href='https://github.com/chris-creditdesign/nature-malaria-prep'>GitHub</a>."
};
const { eyebrow, altText, caption, srcURL, headline, href, footnote, subHead, text } = metadata;
const Malarias_ticking_time_bomb = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>${escape(headline)}</h1>
<p>${escape(eyebrow)}</p>`;
});
export { Malarias_ticking_time_bomb as default, metadata };
