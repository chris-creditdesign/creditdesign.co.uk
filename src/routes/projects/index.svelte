<script context="module" lang="ts">
	export const prerender = true;

	export async function load({ fetch }) {
		const res = await fetch(`/projects.json`);
		const { projects } = await res.json();

		return {
			props: { projects }
		};
	}
</script>

<script>
	export let projects;
</script>

<h1>Hello</h1>

<ul>
	{#each projects as project}
		<li>
			<a href={`projects/${project.slug}`}>
				{project.headline}
			</a>
		</li>
	{/each}
</ul>
