module.exports = function (grunt) {
	'use strict';

	grunt.config.set('svgmin', {
		options: {

		},

		dist: {
			// specify files in array format with multiple src-dest mapping
			files: [
				// rasterize all SVG files in "img" and its subdirectories to "img/png"
			    { expand: true, cwd: '<%= conf.dir.assets %>/svg/', src: ['**/*.svg'], dest: '<%= conf.dir.compileto %>/svg' }
			]
		}

	});
};

