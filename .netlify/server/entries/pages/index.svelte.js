var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { c as create_ssr_component, a as add_attribute, e as escape, h as is_void, v as validate_component, n as null_to_empty, j as each } from "../../chunks/index-f572932e.js";
import "../../chunks/index.svelte_svelte_type_style_lang-18a91bdb.js";
const Box = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let boxSpaceComponent;
  let { boxSpace = "" } = $$props;
  let { className = "" } = $$props;
  if ($$props.boxSpace === void 0 && $$bindings.boxSpace && boxSpace !== void 0)
    $$bindings.boxSpace(boxSpace);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  boxSpaceComponent = boxSpace.length > 0 ? `--box-space--component: ${boxSpace};` : "";
  return `


<div${add_attribute("class", `box ${className}`, 0)}${add_attribute("style", boxSpaceComponent, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const Center = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let centerMeasureComponent;
  let centerSpaceComponent;
  let { centerMeasure = "" } = $$props;
  let { centerSpace = "" } = $$props;
  let { intrinsicallyCenter = false } = $$props;
  let { className = "" } = $$props;
  if ($$props.centerMeasure === void 0 && $$bindings.centerMeasure && centerMeasure !== void 0)
    $$bindings.centerMeasure(centerMeasure);
  if ($$props.centerSpace === void 0 && $$bindings.centerSpace && centerSpace !== void 0)
    $$bindings.centerSpace(centerSpace);
  if ($$props.intrinsicallyCenter === void 0 && $$bindings.intrinsicallyCenter && intrinsicallyCenter !== void 0)
    $$bindings.intrinsicallyCenter(intrinsicallyCenter);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  centerMeasureComponent = centerMeasure.length > 0 ? `--center-measure--component: ${centerMeasure};` : "";
  centerSpaceComponent = centerSpace.length > 0 ? `--center-space--component: ${centerSpace};` : "";
  return `


<div class="${[
    escape(`center ${className}`),
    intrinsicallyCenter ? "intrinsically-center" : ""
  ].join(" ").trim()}"${add_attribute("style", `${centerMeasureComponent} ${centerSpaceComponent}`, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const Grid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let minWidthComponent;
  let { gridColumnSpace = "" } = $$props;
  let { gridRowSpace = "" } = $$props;
  let { gridSpace = "" } = $$props;
  let { minWidth = "" } = $$props;
  let { list = false } = $$props;
  let { className = "" } = $$props;
  let tag = list ? "ul" : "div";
  let gridColumnSpaceComponent = "";
  let gridRowSpaceComponent = "";
  if ($$props.gridColumnSpace === void 0 && $$bindings.gridColumnSpace && gridColumnSpace !== void 0)
    $$bindings.gridColumnSpace(gridColumnSpace);
  if ($$props.gridRowSpace === void 0 && $$bindings.gridRowSpace && gridRowSpace !== void 0)
    $$bindings.gridRowSpace(gridRowSpace);
  if ($$props.gridSpace === void 0 && $$bindings.gridSpace && gridSpace !== void 0)
    $$bindings.gridSpace(gridSpace);
  if ($$props.minWidth === void 0 && $$bindings.minWidth && minWidth !== void 0)
    $$bindings.minWidth(minWidth);
  if ($$props.list === void 0 && $$bindings.list && list !== void 0)
    $$bindings.list(list);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  {
    {
      if (gridSpace.length > 0) {
        gridColumnSpaceComponent = `--grid-column-space--component: ${gridSpace};`;
        gridRowSpaceComponent = `--grid-row-space--component: ${gridSpace};`;
      } else {
        if (gridColumnSpace.length > 0) {
          gridColumnSpaceComponent = `--grid-column-space--component: ${gridColumnSpace};`;
        }
        if (gridRowSpace.length > 0) {
          gridRowSpaceComponent = `--grid-row-space--component: ${gridRowSpace};`;
        }
      }
    }
  }
  minWidthComponent = minWidth.length > 0 ? `--grid-min-width--component: ${minWidth};` : "";
  return `


${((tag$1) => {
    return tag$1 ? `<${tag}${add_attribute("class", `grid ${className}`, 0)}${add_attribute("style", `${gridColumnSpaceComponent} ${gridRowSpaceComponent} ${minWidthComponent}`, 0)}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}`;
});
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sidebarContentMinWidthComponent;
  let sidebarSpaceComponent;
  let sidebarWidthComponent;
  let alignItemsComponent;
  let { sidebarContentMinWidth = "" } = $$props;
  let { sidebarOnRight = false } = $$props;
  let { sidebarSpace = "" } = $$props;
  let { sidebarWidth = "" } = $$props;
  let { alignItems = "stretch" } = $$props;
  let { className = "" } = $$props;
  if ($$props.sidebarContentMinWidth === void 0 && $$bindings.sidebarContentMinWidth && sidebarContentMinWidth !== void 0)
    $$bindings.sidebarContentMinWidth(sidebarContentMinWidth);
  if ($$props.sidebarOnRight === void 0 && $$bindings.sidebarOnRight && sidebarOnRight !== void 0)
    $$bindings.sidebarOnRight(sidebarOnRight);
  if ($$props.sidebarSpace === void 0 && $$bindings.sidebarSpace && sidebarSpace !== void 0)
    $$bindings.sidebarSpace(sidebarSpace);
  if ($$props.sidebarWidth === void 0 && $$bindings.sidebarWidth && sidebarWidth !== void 0)
    $$bindings.sidebarWidth(sidebarWidth);
  if ($$props.alignItems === void 0 && $$bindings.alignItems && alignItems !== void 0)
    $$bindings.alignItems(alignItems);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  sidebarContentMinWidthComponent = sidebarContentMinWidth.length > 0 ? `--sidebar-content-min-width--component: ${sidebarContentMinWidth};` : "";
  sidebarSpaceComponent = sidebarSpace.length > 0 ? `--sidebar-space--component: ${sidebarSpace};` : "";
  sidebarWidthComponent = sidebarWidth.length > 0 ? `--sidebar-width--component: ${sidebarWidth};` : "";
  alignItemsComponent = `align-items: ${alignItems};`;
  return `




<div class="${[escape(`sidebar ${className}`), sidebarOnRight ? "sidebar-on-right" : ""].join(" ").trim()}"${add_attribute("style", `
		${sidebarContentMinWidthComponent}
		${sidebarSpaceComponent}
		${sidebarWidthComponent}
		${alignItemsComponent}
	`, 0)}>${sidebarOnRight ? `${slots["main-content"] ? slots["main-content"]({}) : ``}
		${slots.sidebar ? slots.sidebar({}) : ``}` : `${slots.sidebar ? slots.sidebar({}) : ``}
		${slots["main-content"] ? slots["main-content"]({}) : ``}`}</div>`;
});
const Stack = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let stackSpaceComponent;
  let { stackSpace = "" } = $$props;
  let { list = false } = $$props;
  let { className = "" } = $$props;
  let tag = list ? "ul" : "div";
  if ($$props.stackSpace === void 0 && $$bindings.stackSpace && stackSpace !== void 0)
    $$bindings.stackSpace(stackSpace);
  if ($$props.list === void 0 && $$bindings.list && list !== void 0)
    $$bindings.list(list);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  stackSpaceComponent = stackSpace.length > 0 ? `--stack-space--component: ${stackSpace};` : "";
  return `


${((tag$1) => {
    return tag$1 ? `<${tag}${add_attribute("class", `stack ${className}`, 0)}${add_attribute("style", stackSpaceComponent, 0)}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}`;
});
const CardHeadline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cardData } = $$props;
  let { headerLevel = "h2" } = $$props;
  let { headlineFontSize = "big-2" } = $$props;
  let { id = "" } = $$props;
  let { href } = cardData;
  let useId = id.length && href !== void 0 ? id : null;
  let tabindex = id.length && href !== void 0 ? "-1" : null;
  let className = `font-size:${headlineFontSize} font-weight:bold`;
  if ($$props.cardData === void 0 && $$bindings.cardData && cardData !== void 0)
    $$bindings.cardData(cardData);
  if ($$props.headerLevel === void 0 && $$bindings.headerLevel && headerLevel !== void 0)
    $$bindings.headerLevel(headerLevel);
  if ($$props.headlineFontSize === void 0 && $$bindings.headlineFontSize && headlineFontSize !== void 0)
    $$bindings.headlineFontSize(headlineFontSize);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `${headerLevel === "h1" ? `<h1${add_attribute("id", useId, 0)}${add_attribute("tabindex", tabindex, 0)}${add_attribute("class", className, 0)}>${slots.default ? slots.default({}) : ``}</h1>` : `${headerLevel === "h2" ? `<h2${add_attribute("id", useId, 0)}${add_attribute("tabindex", tabindex, 0)}${add_attribute("class", className, 0)}>${slots.default ? slots.default({}) : ``}</h2>` : `${headerLevel === "h3" ? `<h3${add_attribute("id", useId, 0)}${add_attribute("tabindex", tabindex, 0)}${add_attribute("class", className, 0)}>${slots.default ? slots.default({}) : ``}</h3>` : `${headerLevel === "h4" ? `<h4${add_attribute("id", useId, 0)}${add_attribute("tabindex", tabindex, 0)}${add_attribute("class", className, 0)}>${slots.default ? slots.default({}) : ``}</h4>` : `${headerLevel === "none" ? `<span${add_attribute("id", useId, 0)}${add_attribute("tabindex", tabindex, 0)}${add_attribute("class", className, 0)}>${slots.default ? slots.default({}) : ``}</span>` : ``}`}`}`}`}`;
});
const css$4 = {
  code: "a.svelte-qsj75p{text-decoration:none}",
  map: null
};
const CardHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cardData } = $$props;
  let { cardHeaderStackSpace = "var(--s-4)" } = $$props;
  let { headerLevel = "h2" } = $$props;
  let { headlineFontSize = "big-2" } = $$props;
  let { id = "" } = $$props;
  let { eyebrow, subHead, headline, href } = cardData;
  if ($$props.cardData === void 0 && $$bindings.cardData && cardData !== void 0)
    $$bindings.cardData(cardData);
  if ($$props.cardHeaderStackSpace === void 0 && $$bindings.cardHeaderStackSpace && cardHeaderStackSpace !== void 0)
    $$bindings.cardHeaderStackSpace(cardHeaderStackSpace);
  if ($$props.headerLevel === void 0 && $$bindings.headerLevel && headerLevel !== void 0)
    $$bindings.headerLevel(headerLevel);
  if ($$props.headlineFontSize === void 0 && $$bindings.headlineFontSize && headlineFontSize !== void 0)
    $$bindings.headlineFontSize(headlineFontSize);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css$4);
  return `<header>${validate_component(Stack, "Stack").$$render($$result, { stackSpace: cardHeaderStackSpace }, {}, {
    default: () => {
      return `${eyebrow ? `<p class="${"font-size:small font-family:sans-serif"}"><!-- HTML_TAG_START -->${eyebrow}<!-- HTML_TAG_END --></p>` : ``}

    ${validate_component(CardHeadline, "CardHeadline").$$render($$result, {
        cardData,
        id,
        headerLevel,
        headlineFontSize
      }, {}, {
        default: () => {
          return `${href ? `<a${add_attribute("href", href, 0)}${add_attribute("id", id.length ? id : null, 0)} data-track="${"click"}" data-event-category="${"body links"}" data-event-action="${"click"}"${add_attribute("data-event-label", headline, 0)} class="${"svelte-qsj75p"}"><!-- HTML_TAG_START -->${headline}<!-- HTML_TAG_END --></a>` : `<!-- HTML_TAG_START -->${headline}<!-- HTML_TAG_END -->`}`;
        }
      })}

    ${subHead ? `<p class="${"font-size:small font-family:sans-serif"}"><!-- HTML_TAG_START -->${subHead}<!-- HTML_TAG_END --></p>` : ``}`;
    }
  })}</header>`;
});
const css$3 = {
  code: ":root{--image-caption-space--global:0}figure.svelte-1ufxp76{--image-caption-space--component:initial}img.svelte-1ufxp76{display:block}figcaption.svelte-1ufxp76{--video-caption-space--component:initial;--image-caption-space:var(\n      --image-caption-space--component,\n      var(--image-caption-space--global, 0)\n    );margin-top:var(--s-3);margin-right:var(--image-caption-space);margin-left:var(--image-caption-space)}",
  map: null
};
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let src;
  let { altText } = $$props;
  let { caption = "" } = $$props;
  let { className = "" } = $$props;
  let { srcURL } = $$props;
  let { captionSpace = 0 } = $$props;
  let image;
  let captionSpaceComponent = captionSpace ? `--image-caption-space--component: ${captionSpace};` : "";
  let captionStyle = `${captionSpaceComponent}`;
  if ($$props.altText === void 0 && $$bindings.altText && altText !== void 0)
    $$bindings.altText(altText);
  if ($$props.caption === void 0 && $$bindings.caption && caption !== void 0)
    $$bindings.caption(caption);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.srcURL === void 0 && $$bindings.srcURL && srcURL !== void 0)
    $$bindings.srcURL(srcURL);
  if ($$props.captionSpace === void 0 && $$bindings.captionSpace && captionSpace !== void 0)
    $$bindings.captionSpace(captionSpace);
  $$result.css.add(css$3);
  src = srcURL;
  return `<figure class="${escape(null_to_empty(`${className}`)) + " svelte-1ufxp76"}"><img${add_attribute("src", src, 0)}${add_attribute("alt", altText, 0)} loading="${"lazy"}" class="${"svelte-1ufxp76"}"${add_attribute("this", image, 0)}>
  ${caption.length ? `<figcaption${add_attribute("style", captionStyle, 0)} class="${"font-size:small font-family:sans-serif svelte-1ufxp76"}"><!-- HTML_TAG_START -->${caption}<!-- HTML_TAG_END --></figcaption>` : ``}</figure>`;
});
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cardData } = $$props;
  let { cardHeaderStackSpace = "var(--s-4)" } = $$props;
  let { className = "" } = $$props;
  let { headerLevel = "h2" } = $$props;
  let { headlineFontSize = "big-2" } = $$props;
  let { id = "" } = $$props;
  let { stackSpace = "var(--s-1)" } = $$props;
  let { relatedLinksStackSpace = "var(--s-3)" } = $$props;
  let { theme = "" } = $$props;
  let { altText, caption, footnote, srcURL, text, relatedLinksHeadline, relatedLinks } = cardData;
  if ($$props.cardData === void 0 && $$bindings.cardData && cardData !== void 0)
    $$bindings.cardData(cardData);
  if ($$props.cardHeaderStackSpace === void 0 && $$bindings.cardHeaderStackSpace && cardHeaderStackSpace !== void 0)
    $$bindings.cardHeaderStackSpace(cardHeaderStackSpace);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.headerLevel === void 0 && $$bindings.headerLevel && headerLevel !== void 0)
    $$bindings.headerLevel(headerLevel);
  if ($$props.headlineFontSize === void 0 && $$bindings.headlineFontSize && headlineFontSize !== void 0)
    $$bindings.headlineFontSize(headlineFontSize);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.stackSpace === void 0 && $$bindings.stackSpace && stackSpace !== void 0)
    $$bindings.stackSpace(stackSpace);
  if ($$props.relatedLinksStackSpace === void 0 && $$bindings.relatedLinksStackSpace && relatedLinksStackSpace !== void 0)
    $$bindings.relatedLinksStackSpace(relatedLinksStackSpace);
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  return `<div${add_attribute("class", `card ${className}`, 0)}${add_attribute("data-theme", theme, 0)}>${validate_component(Stack, "Stack").$$render($$result, { stackSpace }, {}, {
    default: () => {
      return `${srcURL ? `${validate_component(Image, "Image").$$render($$result, { altText, caption, srcURL }, {}, {})}` : ``}

    ${validate_component(CardHeader, "CardHeader").$$render($$result, {
        cardData,
        cardHeaderStackSpace,
        headerLevel,
        headlineFontSize,
        id
      }, {}, {})}

    ${text ? `<p><!-- HTML_TAG_START -->${text}<!-- HTML_TAG_END --></p>` : ``}

    ${relatedLinks && relatedLinks.length ? `<div class="${"footnote font-size:small font-family:sans-serif"}">${validate_component(Stack, "Stack").$$render($$result, { stackSpace: relatedLinksStackSpace }, {}, {
        default: () => {
          return `${relatedLinksHeadline ? `<p><!-- HTML_TAG_START -->${relatedLinksHeadline}<!-- HTML_TAG_END --></p>` : ``}

          ${validate_component(Stack, "Stack").$$render($$result, {
            stackSpace: relatedLinksStackSpace,
            list: true
          }, {}, {
            default: () => {
              return `${each(relatedLinks, (link) => {
                return `<li><!-- HTML_TAG_START -->${link.value}<!-- HTML_TAG_END -->
              </li>`;
              })}`;
            }
          })}`;
        }
      })}</div>` : ``}

    ${footnote ? `<p class="${"footnote font-size:small font-family:sans-serif"}"><!-- HTML_TAG_START -->${footnote}<!-- HTML_TAG_END --></p>` : ``}

    ${slots.default ? slots.default({}) : ``}`;
    }
  })}</div>`;
});
const CardSideImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cardData } = $$props;
  let { cardHeaderStackSpace = "var(--s-4)" } = $$props;
  let { className = "" } = $$props;
  let { headerLevel = "h2" } = $$props;
  let { headlineFontSize = "big-2" } = $$props;
  let { id = "" } = $$props;
  let { textMinWidth = "50%" } = $$props;
  let { imageOnLeft = true } = $$props;
  let { sidebarSpace = "var(--s-1)" } = $$props;
  let { imageWidth = "var(--s7)" } = $$props;
  let { stackSpace = "var(--s-1)" } = $$props;
  let { relatedLinksStackSpace = "var(--s-3)" } = $$props;
  let { theme = "" } = $$props;
  let { altText, caption, srcURL } = cardData;
  let cardDataNoImage = __spreadProps(__spreadValues({}, cardData), { srcURL: void 0 });
  if ($$props.cardData === void 0 && $$bindings.cardData && cardData !== void 0)
    $$bindings.cardData(cardData);
  if ($$props.cardHeaderStackSpace === void 0 && $$bindings.cardHeaderStackSpace && cardHeaderStackSpace !== void 0)
    $$bindings.cardHeaderStackSpace(cardHeaderStackSpace);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.headerLevel === void 0 && $$bindings.headerLevel && headerLevel !== void 0)
    $$bindings.headerLevel(headerLevel);
  if ($$props.headlineFontSize === void 0 && $$bindings.headlineFontSize && headlineFontSize !== void 0)
    $$bindings.headlineFontSize(headlineFontSize);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.textMinWidth === void 0 && $$bindings.textMinWidth && textMinWidth !== void 0)
    $$bindings.textMinWidth(textMinWidth);
  if ($$props.imageOnLeft === void 0 && $$bindings.imageOnLeft && imageOnLeft !== void 0)
    $$bindings.imageOnLeft(imageOnLeft);
  if ($$props.sidebarSpace === void 0 && $$bindings.sidebarSpace && sidebarSpace !== void 0)
    $$bindings.sidebarSpace(sidebarSpace);
  if ($$props.imageWidth === void 0 && $$bindings.imageWidth && imageWidth !== void 0)
    $$bindings.imageWidth(imageWidth);
  if ($$props.stackSpace === void 0 && $$bindings.stackSpace && stackSpace !== void 0)
    $$bindings.stackSpace(stackSpace);
  if ($$props.relatedLinksStackSpace === void 0 && $$bindings.relatedLinksStackSpace && relatedLinksStackSpace !== void 0)
    $$bindings.relatedLinksStackSpace(relatedLinksStackSpace);
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  return `<div${add_attribute("class", `card--side-image ${className}`, 0)}${add_attribute("data-theme", theme, 0)}>${srcURL ? `${validate_component(Stack, "Stack").$$render($$result, { stackSpace }, {}, {
    default: () => {
      return `${validate_component(Sidebar, "Sidebar").$$render($$result, {
        sidebarContentMinWidth: textMinWidth,
        sidebarOnLeft: imageOnLeft,
        sidebarSpace,
        sidebarWidth: imageWidth
      }, {}, {
        "main-content": () => {
          return `<div slot="${"main-content"}">${validate_component(Card, "Card").$$render($$result, {
            cardHeaderStackSpace,
            headerLevel,
            headlineFontSize,
            id,
            stackSpace,
            relatedLinksStackSpace,
            cardData: cardDataNoImage,
            theme
          }, {}, {})}</div>`;
        },
        sidebar: () => {
          return `<div slot="${"sidebar"}">${validate_component(Image, "Image").$$render($$result, { altText, caption, srcURL }, {}, {})}</div>`;
        }
      })}
      ${slots.default ? slots.default({}) : ``}`;
    }
  })}` : `${validate_component(Card, "Card").$$render($$result, {
    cardData,
    cardHeaderStackSpace,
    headerLevel,
    id,
    stackSpace,
    relatedLinksStackSpace,
    theme
  }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`}</div>`;
});
const CardSideImageBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { boxSpace = "var(--s-1)" } = $$props;
  let { cardData } = $$props;
  let { cardHeaderStackSpace = "var(--s-4)" } = $$props;
  let { className = "" } = $$props;
  let { headerLevel = "h2" } = $$props;
  let { headlineFontSize = "big-2" } = $$props;
  let { id = "" } = $$props;
  let { textMinWidth = "50%" } = $$props;
  let { imageOnLeft = true } = $$props;
  let { sidebarSpace = "var(--s-1)" } = $$props;
  let { imageWidth = "var(--s7)" } = $$props;
  let { stackSpace = "var(--s-1)" } = $$props;
  let { relatedLinksStackSpace = "var(--s-3)" } = $$props;
  let { theme = "invert" } = $$props;
  if ($$props.boxSpace === void 0 && $$bindings.boxSpace && boxSpace !== void 0)
    $$bindings.boxSpace(boxSpace);
  if ($$props.cardData === void 0 && $$bindings.cardData && cardData !== void 0)
    $$bindings.cardData(cardData);
  if ($$props.cardHeaderStackSpace === void 0 && $$bindings.cardHeaderStackSpace && cardHeaderStackSpace !== void 0)
    $$bindings.cardHeaderStackSpace(cardHeaderStackSpace);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.headerLevel === void 0 && $$bindings.headerLevel && headerLevel !== void 0)
    $$bindings.headerLevel(headerLevel);
  if ($$props.headlineFontSize === void 0 && $$bindings.headlineFontSize && headlineFontSize !== void 0)
    $$bindings.headlineFontSize(headlineFontSize);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.textMinWidth === void 0 && $$bindings.textMinWidth && textMinWidth !== void 0)
    $$bindings.textMinWidth(textMinWidth);
  if ($$props.imageOnLeft === void 0 && $$bindings.imageOnLeft && imageOnLeft !== void 0)
    $$bindings.imageOnLeft(imageOnLeft);
  if ($$props.sidebarSpace === void 0 && $$bindings.sidebarSpace && sidebarSpace !== void 0)
    $$bindings.sidebarSpace(sidebarSpace);
  if ($$props.imageWidth === void 0 && $$bindings.imageWidth && imageWidth !== void 0)
    $$bindings.imageWidth(imageWidth);
  if ($$props.stackSpace === void 0 && $$bindings.stackSpace && stackSpace !== void 0)
    $$bindings.stackSpace(stackSpace);
  if ($$props.relatedLinksStackSpace === void 0 && $$bindings.relatedLinksStackSpace && relatedLinksStackSpace !== void 0)
    $$bindings.relatedLinksStackSpace(relatedLinksStackSpace);
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  return `<div${add_attribute("class", `card invert ${className}`, 0)}${add_attribute("data-theme", theme, 0)}>${validate_component(Box, "Box").$$render($$result, { boxSpace }, {}, {
    default: () => {
      return `${validate_component(CardSideImage, "CardSideImage").$$render($$result, {
        cardData,
        cardHeaderStackSpace,
        headerLevel,
        headlineFontSize,
        id,
        textMinWidth,
        imageOnLeft,
        sidebarSpace,
        imageWidth,
        stackSpace,
        relatedLinksStackSpace,
        theme
      }, {}, {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      })}`;
    }
  })}</div>`;
});
var index_svelte_svelte_type_style_lang$2 = "";
const css$2 = {
  code: "img.svelte-10r0osr{border-radius:50%;max-width:160px}",
  map: null
};
const WebsiteIntro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `${validate_component(Sidebar, "Sidebar").$$render($$result, {
    sidebarSpace: "var(--s1)",
    sidebarContentMinWidth: "50%"
  }, {}, {
    "main-content": () => {
      return `<div slot="${"main-content"}">${validate_component(Stack, "Stack").$$render($$result, { stackSpace: "var(--s-1)" }, {}, {
        default: () => {
          return `<h2>Hi, I&#39;m Chris Ryan</h2>

			<p>I&#39;m a Senior Art Editor at
				<a href="${"https://www.nature.com/news"}"><i>Nature</i> news</a>
				in London.
			</p>

			<p>I enjoy designing interactive graphics with <strong>D3</strong>,
				<strong>Three.js</strong>,
				<strong>PixiJS</strong> and <strong>Svelte</strong>, wrangling data with
				<strong>Python</strong> and <strong>R</strong> and animating with
				<strong>Adobe After Effects</strong>.
			</p>

			<p>You can find me on
				<a href="${"https://twitter.com/creditdesign"}">Twitter</a>,
				<a href="${"https://github.com/chris-creditdesign"}">GitHub</a>,
				<a href="${"https://codepen.io/chris-creditdesign"}">Codepen</a>
				and <a href="${"https://observablehq.com/@chris-creditdesign"}">Observable</a>.
			</p>`;
        }
      })}</div>`;
    },
    sidebar: () => {
      return `<div slot="${"sidebar"}"><img src="${"img/chris-ryan-guardian.jpg"}" alt="${"Head and shoulders of Chris Ryan wearing a jacket stood outside looking towards the camera."}" class="${"svelte-10r0osr"}"></div>`;
    }
  })}`;
});
var index_svelte_svelte_type_style_lang$1 = "";
const css$1 = {
  code: "li.svelte-1sfssk6{max-width:none}",
  map: null
};
const ProjectsSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { projects } = $$props;
  if ($$props.projects === void 0 && $$bindings.projects && projects !== void 0)
    $$bindings.projects(projects);
  $$result.css.add(css$1);
  return `<div class="${"border-above border-below"}">${validate_component(Stack, "Stack").$$render($$result, { stackSpace: "var(--s-1)" }, {}, {
    default: () => {
      return `<h2>Projects</h2>

		<p>These are some of my favourite projects from the last few years:</p>

		${validate_component(Grid, "Grid").$$render($$result, { gridSpace: "var(--s4)", list: true }, {}, {
        default: () => {
          return `${each(projects, (cardData, i) => {
            return `${i === 0 || i === 3 ? `<li class="${"svelte-1sfssk6"}">${validate_component(CardSideImageBox, "CardSideImageBox").$$render($$result, {
              headerLevel: "none",
              headlineFontSize: "big-1",
              cardData,
              imageWidth: "20ch",
              sidebarSpace: "var(--s1)"
            }, {}, {})}
					</li>` : `<li class="${"svelte-1sfssk6"}">${validate_component(CardSideImage, "CardSideImage").$$render($$result, {
              headerLevel: "none",
              headlineFontSize: "big-1",
              cardData,
              imageWidth: "20ch",
              sidebarSpace: "var(--s1)",
              imageOnLeft: false
            }, {}, {})}
					</li>`}`;
          })}`;
        }
      })}`;
    }
  })}</div>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "li.svelte-1sfssk6{max-width:none}",
  map: null
};
const OpenSource = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"stack border-above border-below"}" style="${"--stack-space--component: var(--s2);"}"><h2>Open source contributions</h2>

	<ul class="${"stack"}" style="${"--stack-space--component: var(--s2)"}"><li class="${"stack svelte-1sfssk6"}"><h3>Layercake:</h3>
			<a href="${"https://github.com/mhkeller/layercake/pull/77"}">Adds map example using pre-projected data ref #61 #77</a></li>

		<li class="${"stack svelte-1sfssk6"}"><h3>Flourish/example-template-svelte-circle:</h3>
			<a href="${"https://github.com/kiln/example-template-svelte-circle/pull/2"}">Updates template to use Svelte version 3 #2</a></li></ul></div>`;
});
const prerender = true;
async function load({ fetch }) {
  const res = await fetch(`/projects.js`);
  const { projects } = await res.json();
  return { props: { projects } };
}
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { projects } = $$props;
  if ($$props.projects === void 0 && $$bindings.projects && projects !== void 0)
    $$bindings.projects(projects);
  return `${$$result.head += `${$$result.title = `<title>Chris Ryan</title>`, ""}`, ""}

<main>${validate_component(Stack, "Stack").$$render($$result, { stackSpace: "var(--s3)" }, {}, {
    default: () => {
      return `${validate_component(Center, "Center").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(WebsiteIntro, "WebsiteIntro").$$render($$result, {}, {}, {})}`;
        }
      })}

		<div class="${"center"}" style="${"--center-measure--component: 140ch;"}">${validate_component(ProjectsSection, "ProjectsSection").$$render($$result, {
        projects: [projects[0], projects[2], projects[3], projects[1]]
      }, {}, {})}</div>

		<div class="${"center"}">${validate_component(OpenSource, "OpenSource").$$render($$result, {}, {}, {})}</div>`;
    }
  })}</main>`;
});
export { Routes as default, load, prerender };
