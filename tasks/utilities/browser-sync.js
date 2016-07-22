// Browser-sync
// todo: Make more dynamic
module.exports = {
  fn: function (gulp, plugins, options, callback) {
    var projectPath = __dirname.toLowerCase().replace("d:\\php\\", "");
	// Serve files from the root of this project
	  plugins.browserSync.init({
		open: "external",
		proxy: "localhost/" + projectPath.replace("\\", "/") + "/site"
	});
  }
};