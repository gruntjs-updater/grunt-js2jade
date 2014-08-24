#  Gruntfile

configTest = (root, files) ->
  src: files.map (name) -> root + name + ".js"
  actual: root + files.join("") + ".jade"
  expect: root + files.join("") + "_.jade"

module.exports = (grunt) ->

  test = configTest "test/", ["a", "b", "c"]

  grunt.task.registerTask "test", ->
    if grunt.file.exists( test.actual ) and grunt.file.exists( test.expect )
      grunt.file.read( test.actual ) == grunt.file.read( test.expect )

  grunt.initConfig
    uglify:
      options:
        banner: "-"
      build:
        src: test.src
        dest: test.actual

    js2jade:
      files:
        src: test.src
        dest: test.expect

    clean:
      tests: [test.actual, test.expect]

  grunt.loadNpmTasks "grunt-contrib-clean"
  grunt.loadNpmTasks "grunt-contrib-uglify"
  grunt.loadTasks "tasks"

  grunt.registerTask "default", [ "uglify", "js2jade", "test", "clean" ]