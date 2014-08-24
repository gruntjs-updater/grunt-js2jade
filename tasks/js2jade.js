/*
 *  grunt-js2jade
 *
 *	github.com/bucaran/grunt-js2jade/blob/master/LICENSE-MIT
 *
 *	Adds a src:dest uglify task to your grunt.config object
 *	and appends a hyphen to the generated output to convert
 *	JavaScript files to valid Jade files.
 *
 *	    js2jade: {
 *       	files: {
 *        	src:['path/to/a.js', 'path/to/b.js'],
 *         	dest:'path/to/ab.jade'
 *       	}
 *      }
 */
'use strict';

module.exports = function(grunt) {
	grunt.registerMultiTask('js2jade', function() {
		grunt.config("uglify", {
			options: {
				banner: '-'
			},
			build: {
				src: this.data.src,
				dest: this.data.dest
			}
		});
		grunt.task.run('uglify');

		grunt.log.writeln(this.data.src);
		grunt.log.ok(this.data.dest.green);
	});
}
