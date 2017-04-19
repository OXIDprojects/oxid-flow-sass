module.exports = function (grunt) {
	'use strict';

	grunt.config.set('copy', {
		touchicons: {
			files: [
				{expand: true, cwd: '<%= conf.dir.assets %>', src: ['touchicons/**'], dest: '<%= conf.dir.compileto %>'},
			]
		},

		get_fa_from_bower: {
			files: [
				{expand: true, cwd: '<%= conf.dir.bower %>', src: ['font-awesome-sass/fonts/**'], dest: '<%= conf.dir.compileto %>/fonts/'},
			]
		},

		fonts: {
			files: [
				{expand: true, cwd: '<%= conf.dir.assets %>', src: ['fonts/**'], dest: '<%= conf.dir.compileto %>'},
			]
		},
		img: {
			files: [
				{expand: true, cwd: '<%= conf.dir.assets %>', src: ['img/*'], dest: '<%= conf.dir.compileto %>', filter: 'isFile'},
			]
		},

		oxid: {
			files: [
				{expand: true, cwd: '<%= conf.dir.distto %>build/', src: ['**'], dest: '<%= conf.dir.oxidtheme %>' },
			]
		}
	});
};

