<script>
	import { Stack, Sidebar } from 'creditdesign-svelte-components';
</script>

<style>
	img {
		border-radius: 50%;
		max-width: 160px;
	}
</style>

<Sidebar sidebarSpace="var(--s1)" sidebarContentMinWidth="50%">
	<div slot="sidebar">
		<img
			src="img/chris-ryan-guardian.jpg"
			alt="Head and shoulders of Chris Ryan wearing a jacket stood outside looking towards the camera."
		/>
	</div>
	<div slot="main-content">
		<Stack stackSpace="var(--s-1)">
			<h2>Hi, I'm Chris Ryan</h2>

			<p>
				I'm a Senior Art Editor at
				<a href="https://www.nature.com/news"><i>Nature</i> news</a>
				in London.
			</p>

			<p>
				I enjoy designing interactive graphics with <strong>D3</strong>,
				<strong>Three.js</strong>,
				<strong>PixiJS</strong> and <strong>Svelte</strong>, wrangling data with
				<strong>Python</strong> and <strong>R</strong> and animating with
				<strong>Adobe After Effects</strong>.
			</p>

			<p>
				You can find me on
				<a href="https://twitter.com/creditdesign">Twitter</a>,
				<a href="https://github.com/chris-creditdesign">GitHub</a>,
				<a href="https://codepen.io/chris-creditdesign">Codepen</a>
				and <a href="https://observablehq.com/@chris-creditdesign">Observable</a>.
			</p>
		</Stack>
	</div>
</Sidebar>
