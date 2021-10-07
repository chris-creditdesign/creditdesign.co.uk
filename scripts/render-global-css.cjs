let fs = require('fs');
let sass = require('sass');

let sassResult = sass.renderSync({
	file: './src/scss/index.scss'
});

let sassString = sassResult.css.toString();

let renderedPage = `
${sassString}
`;

fs.writeFileSync('./static/css/index.css', renderedPage, 'utf8');
