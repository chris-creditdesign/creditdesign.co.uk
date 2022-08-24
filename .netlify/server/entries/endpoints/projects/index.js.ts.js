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
const get = async () => {
  const markdown_pages_glob = { "./malarias-ticking-time-bomb/index.md": () => import("../../pages/projects/malarias-ticking-time-bomb/index.md.js"), "./milestones-in-diabetes/index.md": () => import("../../pages/projects/milestones-in-diabetes/index.md.js"), "./milestones-in-genomic-sequencing/index.md": () => import("../../pages/projects/milestones-in-genomic-sequencing/index.md.js"), "./what-the-numbers-say-about-refugees/index.md": () => import("../../pages/projects/what-the-numbers-say-about-refugees/index.md.js") };
  const markdwon_pages_entries = Object.entries(markdown_pages_glob);
  const projects = await Promise.all(markdwon_pages_entries.map(async ([path, page]) => {
    const result = await page();
    const { metadata } = result;
    const slug = path.match(/.\/(.*)\/index.md/)[1];
    return __spreadProps(__spreadValues({}, metadata), { slug });
  }));
  projects.sort((a, b) => {
    const dateA = parseInt(a.subHead);
    const dateB = parseInt(b.subHead);
    return dateB - dateA;
  });
  return {
    status: 200,
    body: { projects }
  };
};
export { get };
