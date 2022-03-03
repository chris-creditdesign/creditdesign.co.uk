export const get = async () => {
	// https://vitejs.dev/guide/features.html#glob-import
	const markdown_pages_glob = import.meta.glob('./*/index.md');

	const markdwon_pages_entries = Object.entries(markdown_pages_glob);

	const projects = await Promise.all(
		markdwon_pages_entries.map(async ([path, page]) => {
			const result = await page();

			const { metadata } = result;

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
