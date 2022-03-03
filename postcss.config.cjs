const autoprefixer = require('autoprefixer');
const atImport = require('postcss-import');

const config = {
	plugins: [autoprefixer(), atImport()]
};

module.exports = config;
