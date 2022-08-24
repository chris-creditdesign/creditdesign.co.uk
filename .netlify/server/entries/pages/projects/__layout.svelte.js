import { c as create_ssr_component, a as add_attribute, v as validate_component } from "../../../chunks/index-f572932e.js";
const FullBleed = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fullBleedMeasureComponent;
  let fullBleedSideSpaceComponent;
  let fullBleedStackSpaceComponent;
  let { fullBleedMeasure = "" } = $$props;
  let { fullBleedSideSpace = "" } = $$props;
  let { fullBleedStackSpace = "" } = $$props;
  let { className = "" } = $$props;
  if ($$props.fullBleedMeasure === void 0 && $$bindings.fullBleedMeasure && fullBleedMeasure !== void 0)
    $$bindings.fullBleedMeasure(fullBleedMeasure);
  if ($$props.fullBleedSideSpace === void 0 && $$bindings.fullBleedSideSpace && fullBleedSideSpace !== void 0)
    $$bindings.fullBleedSideSpace(fullBleedSideSpace);
  if ($$props.fullBleedStackSpace === void 0 && $$bindings.fullBleedStackSpace && fullBleedStackSpace !== void 0)
    $$bindings.fullBleedStackSpace(fullBleedStackSpace);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  fullBleedMeasureComponent = fullBleedMeasure.length > 0 ? `--full-bleed-measure--component: ${fullBleedMeasure};` : "";
  fullBleedSideSpaceComponent = fullBleedSideSpace.length > 0 ? `--full-bleed-side-space--component: ${fullBleedSideSpace};` : "";
  fullBleedStackSpaceComponent = fullBleedStackSpace.length > 0 ? `--full-bleed-stack-space--component: ${fullBleedStackSpace};` : "";
  return `


<div${add_attribute("class", `full-bleed ${className}`, 0)}${add_attribute("style", `${fullBleedMeasureComponent} ${fullBleedSideSpaceComponent} ${fullBleedStackSpaceComponent}`, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".full-bleed-container pre{grid-column:4 / 7}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(FullBleed, "FullBleed").$$render($$result, { fullBleedStackSpace: "var(--s1)" }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
export { _layout as default };
