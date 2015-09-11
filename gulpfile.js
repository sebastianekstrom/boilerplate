// /**
//  * Gulp
//  * -----------------------------------------------------------------------------
//  */

'use strict';

//var test = ['!source/sass/libs/*.scss','!source/sass/helpers/_reset.scss','!source/sass/helpers/_mixins.scss','!source/sass/foundation/_print.scss'];

/* Plugins
 * -------------------- */
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var connect = require('gulp-connect');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var sassLint = require('gulp-sass-lint');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var stylish = require('jshint-stylish');
var minifyCss = require('gulp-minify-css');

/* Paths
 * -------------------- */
var project = {
    sassAllFiles: 'source/sass/**/*.scss',
    sassIgnoreFiles: [
        '!source/sass/libs/*.scss',
        '!source/sass/helpers/_reset.scss',
        '!source/sass/helpers/_mixins.scss',
        '!source/sass/foundation/_print.scss'
    ],
    jsMain: 'source/js/main.js',
    jsComponents: 'source/js/components/*.js',
    jsDist: './dist/js/',
    cssDist: './dist/css'
};

/* Sass compilation and autoprefixing
 * -------------------- */
gulp.task('sass', function () {
    gulp.src(project.sassAllFiles)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(project.cssDist))
        .pipe(connect.reload());
});

/* Browserify
 * -------------------- */
gulp.task('browserify', function() {
    return browserify(project.jsMain)
        .bundle()
        .pipe(source('script.js'))
        .pipe(gulp.dest(project.jsDist))
        .pipe(connect.reload());
});

/* Local server
 * -------------------- */
gulp.task('connect', function() {
    connect.server({
        livereload: true,
        port: 8080
    });
});

/* Minification
 * -------------------- */
gulp.task('minify-js', function() {
    return gulp.src('dist/js/script.js')
        .pipe(uglify())
        .pipe(gulp.dest(project.jsDist));
});

gulp.task('minify-css', function() {
  return gulp.src('dist/css/style.css')
    .pipe(minifyCss())
    .pipe(gulp.dest(project.cssDist));
});

/* Linting
 * -------------------- */
gulp.task('lint-js', function() {
    gulp.src([project.jsComponents])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter(stylish))
});

gulp.task('lint-scss', function() {
    var sassIgnoreFileLength = project.sassIgnoreFiles.length;
    gulp.src([project.sassAllFiles, for (var i = 0; i < sassIgnoreFileLength; i++) {project.sassIgnoreFiles[i]}])
        .pipe(sassLint())
        .pipe(sassLint.format()
    );
});

gulp.task('lint-all', function() {
    gulp.src([project.jsComponents])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter(stylish))
    gulp.src([project.sassAllFiles, $.each(project.sassIgnoreFiles, function(i, e){e})])
        .pipe(sassLint())
        .pipe(sassLint.format()
    );
});

/* Running tasks
 * -------------------- */
gulp.task('default',['browserify','sass', 'connect'], function(){
    gulp.watch(project.sassAllFiles, ['sass']);
    gulp.watch([project.jsComponents, project.jsMain], ['lint-js','browserify']);
});

gulp.task('lint', ['lint-all']);
gulp.task('dist',['minify-js','minify-css']);
