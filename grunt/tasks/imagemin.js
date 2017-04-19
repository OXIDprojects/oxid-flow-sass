module.exports = function (grunt) {
	'use strict';

	grunt.config.set('imagemin', {
		dist: {
			files: [{
				expand: true,
				cwd: '<%= conf.dir.assets %>/img/',
				src: ['*.{png,jpg,gif}'],
				dest: '<%= conf.dir.compileto %>/img/'
			}]
		}
	});
};

