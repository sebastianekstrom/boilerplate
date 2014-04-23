module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      sass: {
        files: ['<%= pkg.directories.sass %>/**/*.sass'],
        tasks: ['sass:dev', 'autoprefixer:dev'],
        options: {
          livereload: true,
        }        
      },
      concat: {
        files: ['<%= pkg.directories.js_dev %>/**/*.js'],
        tasks: 'concat',
        options: {
          livereload: true,
        }        
      }  
    },
    sass: {
      dev: {
        options: {
          style: 'expanded',
          trace: true
        },
        files: {
          '<%= pkg.directories.css %>/style__<%= pkg.version %>.css': '<%= pkg.directories.sass %>/style.sass'
        }
      },
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
         '<%= pkg.directories.css %>/style__<%= pkg.version %>.css': '<%= pkg.directories.sass %>/style.sass' 
        }
      }
    },
    concat: {
      dev: {
        src: ['<%= pkg.directories.js_dev %>/vendor/jquery-1.9.1.js','<%= pkg.directories.js_dev %>/vendor/modernizr.js','<%= pkg.directories.js_dev %>/**/*.js'],
        dest: '<%= pkg.directories.js %>/script__<%= pkg.version %>.js'
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          '<%= pkg.directories.js %>/script__<%= pkg.version %>.js': ['<%= pkg.directories.js %>/script__<%= pkg.version %>.js']
        }
      }
    },    
    autoprefixer: {
      dev: {
        options: {
          browsers: ['last 3 versions', '> 1%', 'ie 8', 'ie 7']
        },
        src: '<%= pkg.directories.css %>/style__<%= pkg.version %>.css',
        dest: '<%= pkg.directories.css %>/style__<%= pkg.version %>.css'
      }
    }
  });

  grunt.loadNpmTasks ('grunt-bump');
  grunt.loadNpmTasks ('grunt-contrib-uglify');
  grunt.loadNpmTasks ('grunt-contrib-concat');
  grunt.loadNpmTasks ('grunt-autoprefixer');
  grunt.loadNpmTasks ('grunt-contrib-sass');
  grunt.loadNpmTasks ('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['autoprefixer:dev','sass:dev', 'concat', 'watch']);
  grunt.registerTask('dist', ['autoprefixer:dev','sass:dist','concat', 'uglify']);

};