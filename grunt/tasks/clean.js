module.exports = function (grunt) {
	'use strict';

	grunt.config.set('clean', {
		svg: {
			src: ["<%= conf.dir.assets %>/svg/"]
		},

		dist: {
			src: ["<%= conf.dir.distto %>"]
		}
	});
};
