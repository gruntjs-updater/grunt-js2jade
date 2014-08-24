# grunt-js2jade v0.0.10 [![Build Status](https://travis-ci.org/bucaran/grunt-js2jade.svg?branch=master)](https://travis-ci.org/bucaran/grunt-js2jade)
> Minifies JavaScript files into valid Jade files.

## Getting Started
This plugin requires Grunt `~0.4.0` and [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify).

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide. Once you're familiar with the process, you may install this plugin with this command:

```shell
npm install grunt-js2jade --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-js2jade');
```

## What's this?

A grunt plugin to simplify using JavaScript libraries for Jade. It basically adds a trivial src:dest uglify task to your grunt.config object and appends a hyphen to the generated output to convert JavaScript files to valid Jade files.

## js2jade Task

Inside your grunt.config initialization add something like this:

```js
   js2jade: {
     files: {
       src:['path/to/a.js', 'path/to/b.js'],
       dest:'path/to/ab.jade'
     }
   }
```

##Get Social
+ [GitHub](http://github.com/bucaran)
+ [Twitter](http://twitter.com/jbucaran)
+ [Homepage](http://bucaran.me)

## Release History

+ 2014-08-24   v0.0.10   Added grunt-contrib-uglify dependency and simple testing.
+ 2014-08-19   v0.0.7    Fixed typos.
+ 2014-08-19   v0.0.1    Initial Release.

---

Task submitted by [Jorge Bucaran](http://bucaran.me)
