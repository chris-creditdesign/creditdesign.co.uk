import { c as create_ssr_component, a as add_attribute, e as escape, n as null_to_empty, v as validate_component, b as compute_slots } from "../../chunks/index-f572932e.js";
import "../../chunks/index.svelte_svelte_type_style_lang-18a91bdb.js";
const Cover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let coverHeightComponent;
  let coverSpaceComponent;
  let { coverHeight = "" } = $$props;
  let { coverSpace = "" } = $$props;
  let { className = "" } = $$props;
  if ($$props.coverHeight === void 0 && $$bindings.coverHeight && coverHeight !== void 0)
    $$bindings.coverHeight(coverHeight);
  if ($$props.coverSpace === void 0 && $$bindings.coverSpace && coverSpace !== void 0)
    $$bindings.coverSpace(coverSpace);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  coverHeightComponent = coverHeight.length > 0 ? `--cover-height--component: ${coverHeight};` : "";
  coverSpaceComponent = coverSpace.length > 0 ? `--cover-space--component: ${coverSpace};` : "";
  return `


<div${add_attribute("class", `cover ${className}`, 0)}${add_attribute("style", `${coverHeightComponent} ${coverSpaceComponent}`, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const css$1 = {
  code: "img.svelte-8cdu4n,video.svelte-8cdu4n{width:600px;margin-right:auto;margin-left:auto}@supports (color: var(--primary)){img.svelte-8cdu4n,video.svelte-8cdu4n{position:absolute;top:50%;left:50%;z-index:-999;width:inherit;margin:0;transform:translate(-50%, -50%)}.cover-with-background.svelte-8cdu4n{color:var(--color--white-0);background-color:rgba(10, 4, 4, 0.4)}}",
  map: null
};
const CoverBackgroundVideo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { srcURL } = $$props;
  let { alt } = $$props;
  let { coverSpace = "var(--s0)" } = $$props;
  let { coverHeight = "100vh" } = $$props;
  let { buttonClassName = "" } = $$props;
  let { buttonPausedMessage = "Play video" } = $$props;
  let { buttonPlayingMessage = "Pause video" } = $$props;
  let { buttonTheme = "" } = $$props;
  let slotPresent = Object.keys($$slots).length > 0;
  let className = slotPresent ? "cover-with-background" : null;
  srcURL.replace(/-small/, "");
  srcURL.replace(/-small/, "").slice(0, -4).concat(".webm");
  srcURL.replace(/-small/, "").slice(0, -4).concat(".mp4");
  if ($$props.srcURL === void 0 && $$bindings.srcURL && srcURL !== void 0)
    $$bindings.srcURL(srcURL);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.coverSpace === void 0 && $$bindings.coverSpace && coverSpace !== void 0)
    $$bindings.coverSpace(coverSpace);
  if ($$props.coverHeight === void 0 && $$bindings.coverHeight && coverHeight !== void 0)
    $$bindings.coverHeight(coverHeight);
  if ($$props.buttonClassName === void 0 && $$bindings.buttonClassName && buttonClassName !== void 0)
    $$bindings.buttonClassName(buttonClassName);
  if ($$props.buttonPausedMessage === void 0 && $$bindings.buttonPausedMessage && buttonPausedMessage !== void 0)
    $$bindings.buttonPausedMessage(buttonPausedMessage);
  if ($$props.buttonPlayingMessage === void 0 && $$bindings.buttonPlayingMessage && buttonPlayingMessage !== void 0)
    $$bindings.buttonPlayingMessage(buttonPlayingMessage);
  if ($$props.buttonTheme === void 0 && $$bindings.buttonTheme && buttonTheme !== void 0)
    $$bindings.buttonTheme(buttonTheme);
  $$result.css.add(css$1);
  return `<div class="${escape(null_to_empty(className)) + " svelte-8cdu4n"}">${validate_component(Cover, "Cover").$$render($$result, { coverSpace, coverHeight }, {}, {
    default: () => {
      return `${`<img${add_attribute("src", srcURL, 0)}${add_attribute("alt", alt, 0)} class="${"svelte-8cdu4n"}">`}

    <div class="${"cover__centered"}">${slots.default ? slots.default({}) : ``}</div>

    ${``}`;
    }
  })}</div>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header>${validate_component(CoverBackgroundVideo, "CoverBackgroundVideo").$$render($$result, {
    srcURL: "video/creditdesign-intro-small.jpg",
    alt: "Video montage showing clips of interactive graphics built by Chris Ryan.",
    coverHeight: "40vh"
  }, {}, {
    default: () => {
      return `<h1 class="${"cover__centered"}">Credit Design</h1>`;
    }
  })}</header>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "p.svelte-e6j7vk{margin:0}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="${"grid box center font-size:small"}" style="${"--center-measure--component: var(--measure-big); --grid-space--component: var(--s-1);"}"><p class="${"svelte-e6j7vk"}">This website is built with <a href="${"https://kit.svelte.dev/"}">SvelteKit</a> and the code can be
		viewed on <a href="${"https://github.com/chris-creditdesign/creditdesign.co.uk"}">GitHub</a>.
	</p>

	<p class="${"svelte-e6j7vk"}">The typeface used is
		<a href="${"https://brailleinstitute.org/freefont"}">Atkinson Hyperlegible</a>.
	</p>

	<p class="${"svelte-e6j7vk"}">Credit Design is short for <strong>C</strong>hris
		<strong>R</strong>yan <strong>Edit</strong>orial
		<strong>Design</strong>, geddit?
	</p>

	<p class="${"svelte-e6j7vk"}">\xA9 Copyright 2021 Chris Ryan. No, sadly not \u2018that\u2019 <a href="${"https://en.wikipedia.org/wiki/Chris_Ryan"}">Chris Ryan</a>.
	</p></footer>`;
});
var app = "";
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

${slots.default ? slots.default({}) : ``}

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export { _layout as default };
