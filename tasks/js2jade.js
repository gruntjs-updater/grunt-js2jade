/*\
 *-\
 *  grunt-js2jade
 *  Bucaran 2014
 *
 *	github.com/bucaran/grunt-js2jade/blob/master/LICENSE-MIT
 *
 *	Adds a src:dest uglify task to your grunt.config object
 *	and appends a hyphen to the generated output to convert
 *	JavaScript files to valid Jade files.
 *
 *	How to Use
 *
 *	    js2jade: {
 *       	files: {
 *        	src:['path/to/a.js', 'path/to/b.js'],
 *         	dest:'path/to/ab.jade'
 *       	}
 *      }
 *-/
 */'use strict';

module.exports = function(grunt) {
	grunt.registerMultiTask('js2jade',
		'Minifies js files into valid jade files.', function() {

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
		/*
		 * Requires the uglify module in your project.
		 */
		grunt.log.writeln(this.data.src);
		grunt.log.ok(this.data.dest.green);
	});
}
