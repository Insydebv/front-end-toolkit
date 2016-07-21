module.exports = {
  fn: function (gulp, plugins, callback) {
    var projectPath = __dirname.toLowerCase().replace("d:\\php\\", "");
	// Serve files from the root of this project
	  plugins.browserSync.init({
		open: "external",
		proxy: "localhost/" + projectPath.replace("\\", "/") + "/site"
	});
  }
};