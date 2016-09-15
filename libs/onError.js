var plugins = require('./plugins');

module.exports = function (err) {
	plugins.notify({
		title: 'Task Failed [' + err.plugin + ']',
		message: 'See console',
		sound: 'Beep'
	}).write(err);

	plugins.util.log(plugins.util.colors.bgRed('Error') + ' ' + plugins.util.colors.bgMagenta(err.plugin) + ': ' + err.message);

	if (!plugins.util.env.production) {
		// Do soft error to keep streams going
		this.emit('end');
	}
	else {
		// If run with 'gulp build --production' exit with status code 1 so the build fails
		process.exit(1);
	}
};