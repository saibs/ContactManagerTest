'use strict';

var pkg = require('./package.json');

module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    grunt.initConfig({
        'http-server': {
            'dev': {
                root: "./",
                port: 8282,
                host: "0.0.0.0",
                showDir : true,
                autoIndex: true,
                ext: "html"
            }
        },

        watch: {
            files: [
                'app/css/less/**/*.less'
            ],
            tasks: 'less:development'
        },

        less: {
            development: {
                files: {
                    'app/css/main.css': 'app/css/less/main.less'
                },
                options: {
                    sourceMap: true,
                    sourceMapFilename: 'app/css/main.css.map',
                    sourceMapRootpath: '/',
                    sourceMapURL: '/app/css/main.css.map'
                }
            },
            production: {
                files: {
                    'app/css/main.css': 'app/css/less/main.less'
                },
                options: {
                }
            }
        }
    });

    grunt.registerTask( 'serverStart', ['http-server:dev']);

    grunt.registerTask( 'build', [ 'less:production'] );
};

