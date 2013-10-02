module.exports = function(grunt) {


  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      sass: {
        files: ['<%= pkg.directories.sass %>/**/*.sass'],
        tasks: ['sass:dev', 'autoprefixer:dev']
      },
      concat: {
        files: ['<%= pkg.directories.dev_js %>/**/*.js'],
        tasks: 'concat'
      },
      imagemin: {
        files: ['<%= pkg.directories.img %>/**/*.jpg', '<%= pkg.directories.img %>/**/*.png'],
        tasks: 'imagemin'
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
        src: ['<%= pkg.directories.dev_js %>/**/*.js'],
        dest: '<%= pkg.directories.js %>/script__<%= pkg.version %>.js'
      }
    },
    uglify: {
      options: {
        mangle: {
          except: ['jQuery']
        }
      },
      my_target: {
        files: {
          '<%= pkg.directories.js %>/script__<%= pkg.version %>.js': ['<%= pkg.directories.dev_js %>/main.js']
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
    },     
    imagemin: {
      png: {
        options: {
          optimizationLevel: 7
        },
        files: [{
          expand: true,
          cwd: '<%= pkg.directories.img %>',
          src: ['**/*.png'],
          dest: '<%= pkg.directories.img_compressed %>',
          ext: '.png'
        }]
      },
      jpg: {
        options: {
          progressive: true
        },
        files: [{
          expand: true,
          cwd: '<%= pkg.directories.img %>',
          src: ['**/*.jpg'],
          dest: '<%= pkg.directories.img_compressed %>',
          ext: '.jpg'
        }]
      }
    }

  });

  grunt.loadNpmTasks ('grunt-bump');
  grunt.loadNpmTasks ('grunt-contrib-uglify');
  grunt.loadNpmTasks ('grunt-contrib-concat');
  grunt.loadNpmTasks ('grunt-autoprefixer');
  grunt.loadNpmTasks ('grunt-contrib-sass');
  grunt.loadNpmTasks ('grunt-contrib-watch');
  grunt.loadNpmTasks ('grunt-contrib-imagemin');

  // Default task(s).
  grunt.registerTask('dev', ['autoprefixer:dev','sass:dev', 'concat', 'watch']);
  grunt.registerTask('dist', ['sass:dist','concat', 'uglify', 'imagemin', 'bump:minor']);

};