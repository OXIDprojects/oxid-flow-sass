module.exports = function (grunt) {
	'use strict';

	grunt.config.set('watch', {
		assets: {
			files: [
				'<%= conf.dir.assets %>/img/*',
				'<%= conf.dir.assets %>/fonts/*'
			],
			tasks: ['copy']
		},

		svg: {
			files: [
				'<%= conf.dir.assets %>/svg/**/*.svg'
			],
			tasks: ['svg']
		},

		scss: {
			files: ['<%= conf.dir.assets %>/scss/**/*.scss', '<%= conf.dir.source %>/**/*.scss', ],
			tasks: ['css']
		},
	});
};

