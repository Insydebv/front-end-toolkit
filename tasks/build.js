// Build everything
module.exports = {
	// dep: ['', 'clean:fonts', 'clean:images', 'clean:script', 'clean:styles'],
	nativeTask: plugins.sequence(['bower', 'styles'], 'fonts', 'scripts')
};