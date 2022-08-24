export const manifest = {
	appDir: "_app",
	assets: new Set([".DS_Store","android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","browserconfig.xml","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.svg","fonts/Atkinson-Hyperlegible-Bold-102.woff","fonts/Atkinson-Hyperlegible-Bold-102a.woff2","fonts/Atkinson-Hyperlegible-BoldItalic-102.woff","fonts/Atkinson-Hyperlegible-BoldItalic-102a.woff2","fonts/Atkinson-Hyperlegible-Italic-102.woff","fonts/Atkinson-Hyperlegible-Italic-102a.woff2","fonts/Atkinson-Hyperlegible-Regular-102.woff","fonts/Atkinson-Hyperlegible-Regular-102a.woff2","img/.DS_Store","img/chris-ryan-guardian.jpg","img/portfolio/.DS_Store","img/portfolio/diabetes-small.jpg","img/portfolio/diabetes.jpg","img/portfolio/genomic-sequencing-small.jpg","img/portfolio/genomic-sequencing.jpg","img/portfolio/indirect-costs-small.jpg","img/portfolio/indirect-costs.jpg","img/portfolio/malaria-small.jpg","img/portfolio/malaria.jpg","img/portfolio/refugees-small.jpg","img/portfolio/refugees.jpg","manifest.json","mstile-144x144.png","mstile-150x150.png","mstile-310x150.png","mstile-310x310.png","mstile-70x70.png","safari-pinned-tab.svg","video/.DS_Store","video/creditdesign-intro-small.jpg","video/creditdesign-intro.jpg","video/creditdesign-intro.mp4","video/creditdesign-intro.webm"]),
	mimeTypes: {".png":"image/png",".xml":"application/xml",".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml",".woff":"font/woff",".woff2":"font/woff2",".jpg":"image/jpeg",".json":"application/json",".mp4":"video/mp4",".webm":"video/webm"},
	_: {
		entry: {"file":"start-49c076d1.js","js":["start-49c076d1.js","chunks/index-11bcd31b.js","chunks/index-d7dddbc2.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/5.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "projects.js",
				pattern: /^\/projects\.js$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/projects/index.js.ts.js')
			},
			{
				type: 'page',
				id: "projects/malarias-ticking-time-bomb",
				pattern: /^\/projects\/malarias-ticking-time-bomb\/?$/,
				names: [],
				types: [],
				path: "/projects/malarias-ticking-time-bomb",
				shadow: null,
				a: [0,3,4],
				b: [1]
			},
			{
				type: 'page',
				id: "projects/milestones-in-diabetes",
				pattern: /^\/projects\/milestones-in-diabetes\/?$/,
				names: [],
				types: [],
				path: "/projects/milestones-in-diabetes",
				shadow: null,
				a: [0,3,5],
				b: [1]
			},
			{
				type: 'page',
				id: "projects/milestones-in-genomic-sequencing",
				pattern: /^\/projects\/milestones-in-genomic-sequencing\/?$/,
				names: [],
				types: [],
				path: "/projects/milestones-in-genomic-sequencing",
				shadow: null,
				a: [0,3,6],
				b: [1]
			},
			{
				type: 'page',
				id: "projects/what-the-numbers-say-about-refugees",
				pattern: /^\/projects\/what-the-numbers-say-about-refugees\/?$/,
				names: [],
				types: [],
				path: "/projects/what-the-numbers-say-about-refugees",
				shadow: null,
				a: [0,3,7],
				b: [1]
			},
			{
				type: 'page',
				id: "projects/milestones-in-diabetes/components/Clicker",
				pattern: /^\/projects\/milestones-in-diabetes\/components\/Clicker\/?$/,
				names: [],
				types: [],
				path: "/projects/milestones-in-diabetes/components/Clicker",
				shadow: null,
				a: [0,3,8],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
