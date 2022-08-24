import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../chunks/index-f572932e.js";
import Clicker from "./components/Clicker/index.svelte.js";
const metadata = {
  "eyebrow": "Immersive article",
  "altText": "",
  "caption": "",
  "srcURL": "img/portfolio/diabetes-small.jpg",
  "headline": "Milestones in diabetes",
  "href": "https://www.nature.com/immersive/d42859-021-00002-5/index.html",
  "footnote": "Produced by <i>Nature Portfolio</i>.",
  "subHead": 2021,
  "text": "Timeline and 3D animation built with <strong>Svelte</strong>, <strong>Three.js</strong> and <strong>GSAP</strong>. Featuring an insulin molecule downloaded from <em>Protein Data Bank</em> and processed with <strong>Blender</strong>."
};
const { eyebrow, altText, caption, srcURL, headline, href, footnote, subHead, text } = metadata;
const Milestones_in_diabetes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>${escape(headline)}</h1>
<p>${escape(eyebrow)}</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
${validate_component(Clicker, "Clicker").$$render($$result, {}, {}, {})}
<p>This is some <code class="${"language-js"}">inline code</code> here we go.</p>
<p>One more <code>try</code> hello.</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">get</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">const</span> this_is_a_string <span class="token operator">=</span> <span class="token string">'hello'</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> projects <span class="token operator">=</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>
		markdwon_pages_entries<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>path<span class="token punctuation">,</span> page<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
			<span class="token keyword">const</span> <span class="token punctuation">&#123;</span> metadata <span class="token punctuation">&#125;</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">page</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token comment">// convert from "./milestones-in-diabetes/index.md"</span>
			<span class="token comment">// to "milestones-in-diabetes"</span>
			<span class="token keyword">const</span> slug <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">./(.*)/index.md</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

			<span class="token keyword">return</span> <span class="token punctuation">&#123;</span> <span class="token operator">...</span>metadata<span class="token punctuation">,</span> slug <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
		<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>

	projects<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">const</span> dateA <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>subHead<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> dateB <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>subHead<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">return</span> dateB <span class="token operator">-</span> dateA<span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
		<span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
		<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span> projects <span class="token punctuation">&#125;</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<pre class="${"language-css"}"><!-- HTML_TAG_START -->${`<code class="language-css"><span class="token selector">.nature-video-button</span> <span class="token punctuation">&#123;</span>
	<span class="token property">z-index</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span> <span class="token comment">/* Make sure button is above video */</span>
	<span class="token property">margin-block-start</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
	<span class="token property">padding</span><span class="token punctuation">:</span> 5px 10px<span class="token punctuation">;</span>
	<span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
	<span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">'Graphik Nature l Web'</span><span class="token punctuation">;</span>
	<span class="token property">color</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>
	<span class="token property">text-transform</span><span class="token punctuation">:</span> uppercase<span class="token punctuation">;</span>
	<span class="token property">background-color</span><span class="token punctuation">:</span> #222222<span class="token punctuation">;</span>
	<span class="token property">border-color</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>
	<span class="token property">border-width</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
	<span class="token property">border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
	<span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token selector">.nature-video-button:hover,
.nature-video-button:focus</span> <span class="token punctuation">&#123;</span>
	<span class="token property">color</span><span class="token punctuation">:</span> #222222<span class="token punctuation">;</span>
	<span class="token property">background-color</span><span class="token punctuation">:</span> #efd600<span class="token punctuation">;</span>
	<span class="token property">border-color</span><span class="token punctuation">:</span> #222222<span class="token punctuation">;</span>
	<span class="token property">outline</span><span class="token punctuation">:</span> 3px solid #efd600<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token selector">.nature-video-button:active</span> <span class="token punctuation">&#123;</span>
	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token selector">.Layout.FullSize--fullHeight.Theme-Layer-TextBlock.Layer--one > .nature-video-button</span> <span class="token punctuation">&#123;</span>
	<span class="token property">pointer-events</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
	<span class="token property">width</span><span class="token punctuation">:</span> fit-content<span class="token punctuation">;</span>
	<span class="token property">margin-left</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
	<span class="token property">margin-right</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<pre class="${"language-r"}"><!-- HTML_TAG_START -->${`<code class="language-r">scrape_one_natureindex_article <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>article<span class="token punctuation">,</span> add_tags<span class="token operator">=</span><span class="token keyword">NA</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token comment"># scrape the 'accessible' version of the article</span>
  article_html <span class="token operator">&lt;-</span> rvest<span class="token operator">::</span>read_html<span class="token punctuation">(</span>article<span class="token punctuation">)</span>

  <span class="token comment"># allow caller to try new article tags if the web style changes</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>is.na<span class="token punctuation">(</span>add_tags<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> OTHER_TAGS <span class="token operator">&lt;-</span> add_tags
  <span class="token comment"># TO-DO -- do something with other tags...</span>

  title <span class="token operator">&lt;-</span>
    stand <span class="token operator">&lt;-</span>
    date <span class="token operator">&lt;-</span>
    authors <span class="token operator">&lt;-</span>
    <span class="token keyword">NA</span>

  <span class="token comment"># get title</span>
  title <span class="token operator">&lt;-</span> scrape_text<span class="token punctuation">(</span>article_html<span class="token punctuation">,</span> NATINDEX_TITLE_TAGS<span class="token punctuation">)</span>

  <span class="token comment"># get standfirst</span>
  stand <span class="token operator">&lt;-</span> scrape_text<span class="token punctuation">(</span>article_html<span class="token punctuation">,</span> NATINDEX_STAND_TAGS<span class="token punctuation">)</span>

  <span class="token comment"># get author</span>
  authors <span class="token operator">&lt;-</span> scrape_text<span class="token punctuation">(</span>article_html<span class="token punctuation">,</span> NATINDEX_AUTHOR_TAGS<span class="token punctuation">)</span>

  <span class="token comment"># get date</span>
  date <span class="token operator">&lt;-</span> scrape_text<span class="token punctuation">(</span>article_html<span class="token punctuation">,</span> NATINDEX_DATE_TAGS<span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
    as.Date<span class="token punctuation">(</span><span class="token string">"%d %b %Y"</span><span class="token punctuation">)</span>

  tmp <span class="token operator">&lt;-</span> list<span class="token punctuation">(</span>title<span class="token operator">=</span>title<span class="token punctuation">,</span> stand<span class="token operator">=</span>stand<span class="token punctuation">,</span> date<span class="token operator">=</span>date<span class="token punctuation">,</span> authors<span class="token operator">=</span>authors<span class="token punctuation">,</span> url<span class="token operator">=</span>article<span class="token punctuation">)</span>

  return<span class="token punctuation">(</span>tmp<span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span> <span class="token comment"># scrape_one_natureindex_article</span>
</code>`}<!-- HTML_TAG_END --></pre>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<pre class="${"language-python"}"><!-- HTML_TAG_START -->${`<code class="language-python"><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
<span class="token keyword">import</span> requests
<span class="token keyword">import</span> simplejson <span class="token keyword">as</span> json
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np

<span class="token keyword">def</span> <span class="token function">get_lat_long</span><span class="token punctuation">(</span>place_id<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        API_KEY <span class="token operator">=</span> key<span class="token punctuation">.</span>rstrip<span class="token punctuation">(</span><span class="token string">"&#92;n"</span><span class="token punctuation">)</span>
        url <span class="token operator">=</span> <span class="token string">"https://maps.googleapis.com/maps/api/place/details/json?place_id="</span> <span class="token operator">+</span> <span class="token builtin">str</span><span class="token punctuation">(</span>place_id<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"&amp;key="</span> <span class="token operator">+</span> <span class="token builtin">str</span><span class="token punctuation">(</span>API_KEY<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"&amp;fields=geometry"</span>

        response <span class="token operator">=</span> <span class="token punctuation">(</span>requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>text<span class="token punctuation">)</span>
        response_json <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>response<span class="token punctuation">)</span>

        <span class="token keyword">if</span> <span class="token string">"result"</span> <span class="token keyword">in</span> response_json<span class="token punctuation">:</span>
            result <span class="token operator">=</span> response_json<span class="token punctuation">[</span><span class="token string">"result"</span><span class="token punctuation">]</span>
            <span class="token keyword">if</span> <span class="token string">"geometry"</span> <span class="token keyword">in</span> result<span class="token punctuation">:</span>
                geometry <span class="token operator">=</span> result<span class="token punctuation">[</span><span class="token string">"geometry"</span><span class="token punctuation">]</span>
                <span class="token keyword">if</span> <span class="token string">"location"</span> <span class="token keyword">in</span> geometry<span class="token punctuation">:</span>
                    location <span class="token operator">=</span> geometry<span class="token punctuation">[</span><span class="token string">"location"</span><span class="token punctuation">]</span>
                    <span class="token keyword">return</span> location<span class="token punctuation">[</span><span class="token string">"lat"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> location<span class="token punctuation">[</span><span class="token string">"lng"</span><span class="token punctuation">]</span>
                <span class="token keyword">else</span><span class="token punctuation">:</span>
                    <span class="token keyword">return</span> <span class="token boolean">None</span><span class="token punctuation">,</span> <span class="token boolean">None</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> <span class="token boolean">None</span><span class="token punctuation">,</span> <span class="token boolean">None</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">None</span><span class="token punctuation">,</span> <span class="token boolean">None</span>

    <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
        <span class="token keyword">raise</span> e</code>`}<!-- HTML_TAG_END --></pre>`;
});
export { Milestones_in_diabetes as default, metadata };
