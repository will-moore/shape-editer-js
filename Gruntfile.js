/* jshint node: true */

module.exports = function(grunt) {

    var sources = [
        "src/js/shapeEditor.js"
    ];

    grunt.initConfig({
        clean: {
            dist: [
                'dist/css',
                'dist/js/*.js'
            ]
        },
        jshint: {
            all: [
                "Gruntfile.js",
                "src/js/*.js"
            ],
            options: {
              jshintrc: '.jshintrc'
            }
        },
        concat: {
            options: {
                banner: "//! Built on <%= grunt.template.today('yyyy-mm-dd') %>\n" +
                    "//! GPL License. www.openmicroscopy.org\n\n" +
                    "//!  DO NOT EDIT THIS FILE! - Edit under src/js/*.js\n\n",
                process: true,
                stripBanners: true,
            },
            dist: {
                src:  [ "<banner>" ].concat(sources),
                dest: "dist/js/shape-editor.js"
            }
        },
        watch: {
            files: [ "src/js/*.js" ],
            tasks: ["jshint", "concat"]
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Register tasks
    grunt.registerTask('default', [
        'clean'
    ]);

};