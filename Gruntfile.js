'use strict';


module.exports = function(grunt){

    require('time-grunt')(grunt);
    const sass=require('node-sass');
    require('jit-grunt')(grunt);

    grunt.initConfig({
        sass: {
            dist: {
                options :{
                    implementation: sass
                },
                files: {
                    'css/styles.css': 'css/styles.scss'
                }
            }
        },
        watch: {
            staticMappings: {
                default: 'default'
            },
            files: 'css/*.scss',
            task: ['sass']
        },
        browserSync: {
            staticMappings: {
                default: 'default'
            },
            dev:{
                bsFiles:{
                    src: [
                        'css/*.scss',
                        '*.html',
                        'js/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    serve:{
                      baseDir: './'
                    }
                }
            }
        }
    });

    grunt.registerTask('css',['sass']);
    grunt.registerTask('default',['browserSync','watch']);
}