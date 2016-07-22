// Build styles
module.exports = {
	nativeTask: plugins.sequence(['styles:sass-index', 'styles:sass'])
};