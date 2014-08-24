/**
 *
 *  grunt-js2jade
 *
 *	github.com/bucaran/grunt-js2jade/blob/master/LICENSE
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
		if (!grunt.file.exists("node_modules/grunt-contrib-uglify")) {
			grunt.log.writeln("Loading Uglify task...".cyan);
			grunt.loadNpmTasks("grunt-js2jade/node_modules/grunt-contrib-uglify");
		}
		grunt.task.run('uglify');

		this.data.src.forEach(function(item) {
			grunt.log.writeln(item.grey);
		});
		grunt.log.ok(this.data.dest);
	});
}
