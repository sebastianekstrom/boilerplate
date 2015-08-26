'use strict';

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var connect = require('gulp-connect');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var scsslint = require('gulp-scss-lint');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var stylish = require('jshint-stylish');
var packageJSON  = require('./package');
var jshintConfig = packageJSON.jshintConfig;
var minifyCss = require('gulp-minify-css');

gulp.task('default',['browserify','sass'], function(){
    connect.server();
    gulp.watch('source/sass/**/*.scss', ['sass']);
    gulp.watch(['source/js/components/*.js', 'source/js/main.js'], ['lint-js','browserify']);
    gulp.watch(['index.html'], ['html']);
});

gulp.task('dist',['lint-all','minify-js','minify-css']);

gulp.task('sass', function () {
    gulp.src('source/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(connect.reload());
});

gulp.task('browserify', function() {
    return browserify('source/js/main.js')
        .bundle()
        .pipe(source('script.js'))
        .pipe(gulp.dest('./dist/js/'))
        .pipe(connect.reload());
});

gulp.task('html', function () {
  gulp.src('index.html')
    .pipe(connect.reload());
});

gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('minify-js', function() {
    return gulp.src('dist/js/script.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('minify-css', function() {
  return gulp.src('dist/css/style.css')
    .pipe(minifyCss())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('lint-js', function() {
    gulp.src('source/js/components/*.js')
        .pipe(jshint(jshintConfig))
        .pipe(jshint.reporter(stylish))
        .pipe(jshint.reporter('fail'));
});

gulp.task('lint-all', function() {
    gulp.src('source/js/components/*.js')
        .pipe(jshint(jshintConfig))
        .pipe(jshint.reporter(stylish))
        .pipe(jshint.reporter('fail'));
    gulp.src(['source/sass/**/*.scss', '!source/sass/libs/*.scss', '!source/sass/helpers/_reset.scss', , '!source/sass/helpers/_mixins.scss'])
        .pipe(scsslint({'config': '.scss-lint.yml'}));
});

gulp.task('lint-scss', function() {
    gulp.src(['source/sass/**/*.scss', '!source/sass/libs/*.scss', '!source/sass/helpers/_reset.scss', , '!source/sass/helpers/_mixins.scss'])
        .pipe(scsslint({'config': '.scss-lint.yml'}));
});
