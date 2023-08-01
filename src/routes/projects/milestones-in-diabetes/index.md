---
eyebrow: Immersive article
altText: ''
caption: ''
srcURL: img/portfolio/diabetes-small.jpg
headline: Milestones in diabetes
href: https://www.nature.com/immersive/d42859-021-00002-5/index.html
footnote: Produced by <i>Nature Portfolio</i>.
subHead: 2021
text: Timeline and 3D animation built with <strong>Svelte</strong>, <strong>Three.js</strong> and <strong>GSAP</strong>. Insulin molecule downloaded from <em>Protein Data Bank</em> and processed with <strong>Blender</strong>.
---

<script>
	import Clicker from "./components/Clicker/index.svelte";
</script>

# {headline}

{eyebrow}

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<Clicker />

This is some <code class="language-js">inline code</code> here we go.

One more `try` hello.

```js
export const get = async () => {
	const this_is_a_string = 'hello';

	const projects = await Promise.all(
		markdwon_pages_entries.map(async ([path, page]) => {
			const { metadata } = await page();

			// convert from "./milestones-in-diabetes/index.md"
			// to "milestones-in-diabetes"
			const slug = path.match(/.\/(.*)\/index.md/)[1];

			return { ...metadata, slug };
		})
	);

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
```

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

```css
.nature-video-button {
	z-index: 1; /* Make sure button is above video */
	margin-block-start: 1em;
	padding: 5px 10px;
	font-weight: bold;
	font-family: 'Graphik Nature l Web';
	color: #ffffff;
	text-transform: uppercase;
	background-color: #222222;
	border-color: #ffffff;
	border-width: 3px;
	border-style: solid;
	cursor: pointer;
}

.nature-video-button:hover,
.nature-video-button:focus {
	color: #222222;
	background-color: #efd600;
	border-color: #222222;
	outline: 3px solid #efd600;
}

.nature-video-button:active {
	transform: translateY(1px);
}

.Layout.FullSize--fullHeight.Theme-Layer-TextBlock.Layer--one > .nature-video-button {
	pointer-events: auto;
	width: fit-content;
	margin-left: auto;
	margin-right: auto;
}
```

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

```R
scrape_one_natureindex_article <- function(article, add_tags=NA) {
  # scrape the 'accessible' version of the article
  article_html <- rvest::read_html(article)

  # allow caller to try new article tags if the web style changes
  if (!is.na(add_tags[1])) OTHER_TAGS <- add_tags
  # TO-DO -- do something with other tags...

  title <-
    stand <-
    date <-
    authors <-
    NA

  # get title
  title <- scrape_text(article_html, NATINDEX_TITLE_TAGS)

  # get standfirst
  stand <- scrape_text(article_html, NATINDEX_STAND_TAGS)

  # get author
  authors <- scrape_text(article_html, NATINDEX_AUTHOR_TAGS)

  # get date
  date <- scrape_text(article_html, NATINDEX_DATE_TAGS) %>%
    as.Date("%d %b %Y")

  tmp <- list(title=title, stand=stand, date=date, authors=authors, url=article)

  return(tmp)
} # scrape_one_natureindex_article

```

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

```python
import pandas as pd
import requests
import simplejson as json
import numpy as np

def get_lat_long(place_id):
    try:
        API_KEY = key.rstrip("\n")
        url = "https://maps.googleapis.com/maps/api/place/details/json?place_id=" + str(place_id) + "&key=" + str(API_KEY) + "&fields=geometry"

        response = (requests.get(url).text)
        response_json = json.loads(response)

        if "result" in response_json:
            result = response_json["result"]
            if "geometry" in result:
                geometry = result["geometry"]
                if "location" in geometry:
                    location = geometry["location"]
                    return location["lat"], location["lng"]
                else:
                    return None, None
            else:
                return None, None
        else:
            return None, None

    except Exception as e:
        raise e
```
