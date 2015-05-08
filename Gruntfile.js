module.exports = function(grunt) {

    require('time-grunt')(grunt);
    require('jit-grunt')(grunt);

    /* ====================================
        Project configuration
    ==================================== */

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /*
            Concurrent
        ==================================== */
        concurrent: {
            build: {
                tasks: ['build:js', 'build:css'],
                options: {
                    logConcurrentOutput: false
                }
            }
        },

        /*
            Watch
        ==================================== */
        watch: {
            sass: {
                files: ['<%= pkg.directories.sass %>/**/*.scss'],
                tasks: ['build:css'],
                options: {
                    livereload: true,
                }
            },
            concat: {
                files: ['<%= pkg.directories.js_dev %>/**/*.js'],
                tasks: ['build:js'],
                options: {
                    livereload: true,
                }
            }
        },

        /*
            Sass
        ==================================== */
        sass: {
            dev: {
                options: {
                    outputStyle: 'expanded',
                    trace: true
                },
                files: {
                    '<%= pkg.directories.css %>/style__<%= pkg.version %>.css': '<%= pkg.directories.sass %>/style.scss'
                }
            },
            dist: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    '<%= pkg.directories.css %>/style__<%= pkg.version %>.css': '<%= pkg.directories.sass %>/style.scss'
                }
            }
        },

        /*
            Javascript concatination
        ==================================== */
        concat: {
            dist: {
                src: ['<%= pkg.directories.js_dev %>/vendor/jquery-1.9.1.js','<%= pkg.directories.js_dev %>/vendor/modernizr.js','<%= pkg.directories.js_dev %>/**/*.js'],
                dest: '<%= pkg.directories.js %>/script__<%= pkg.version %>.js'
            }
        },

        /*
            JSHint
        ==================================== */
        jshint: {
            all: {
                src: '<%= pkg.directories.js_partials %>/*.js'
            },

            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish'),
                ignores: [
                ]
            }
        },

        /*
            Javascript uglify
        ==================================== */
        uglify: {
            options: {
                mangle: false,
                compress: {
                    drop_console: true
                }
            },
            my_target: {
                files: {
                    '<%= pkg.directories.js %>/script__<%= pkg.version %>.js': ['<%= pkg.directories.js %>/script__<%= pkg.version %>.js']
                }
            }
        },

        /*
            CSS autoprefixer
        ==================================== */
        autoprefixer: {
            dist: {
                options: {
                    browsers: ['last 3 versions', '> 1%', 'ie 8', 'ie 7']
                },
                src: '<%= pkg.directories.css %>/style__<%= pkg.version %>.css',
                dest: '<%= pkg.directories.css %>/style__<%= pkg.version %>.css'
            }
        },

        /*
            Server
        ==================================== */
        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    port: 8080,
                    base: './',
                    open: 'http://localhost:8080/'
                }
            }
        }        
    });

    /* ====================================
        Tasks
    ==================================== */

    grunt.registerTask('default', [
        'build',
        'connect',
        'watch'
    ]);

    grunt.registerTask('build', [
        'concurrent:build'
    ]);

    grunt.registerTask('build:js', [
        'concat',
        'jshint'
    ]);

    grunt.registerTask('build:css', [
        'sass:dev',
        'autoprefixer'
    ]);

    grunt.registerTask('dist',[
        'sass:dist',
        'autoprefixer',        
        'concat',
        'uglify'
    ]);

};
