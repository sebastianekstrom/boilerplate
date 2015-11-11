// /**
//  * Gulp
//  * -----------------------------------------------------------------------------
//  */
'use strict';

/* Plugins
 * -------------------- */
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var argv = require('yargs').argv;
var gulpif = require('gulp-if');
var buffer = require('vinyl-buffer');
var lost = require('lost');
var postcss = require('gulp-postcss');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var changed = require('gulp-changed');
var eslint = require('gulp-eslint');

/* Task for building the Sass files
 * -------------------- */
gulp.task('styles', function() {
    var format = argv.production ? 'compressed' : 'expanded';

    return gulp.src('source/sass/*.scss')
        .pipe(gulpif(!argv.production, sourcemaps.init()))
        .pipe(sass({
            outputStyle: format
        }))
        .pipe(postcss([
            lost()
        ]))
        .on('error', function(err) {
            console.error(err.message);
        })
        .pipe(autoprefixer({
            browsers: ['last 8 versions', 'ie 8', 'ie 9']
        }))
        .pipe(gulpif(!argv.production, sourcemaps.write('.')))
        .pipe(gulp.dest('dist/css/'))
        .pipe(connect.reload());
});

/* Browserify
 * -------------------- */
gulp.task('scripts', function() {
    return browserify('source/js/main.js')
        .bundle()
        .pipe(source('script.js'))
        .pipe(buffer())
        .pipe(gulpif(!argv.production, sourcemaps.init({loadMaps: true})))
        .pipe(gulpif(!argv.production, sourcemaps.write('./')))
        .pipe(gulpif(argv.production, uglify()))
        .pipe(gulp.dest('dist/js/'))
        .pipe(connect.reload());
});

/* Image compression
 * -------------------- */
gulp.task('image-compression', function () {
    return gulp.src('source/img/*')
        .pipe(changed('dist/img'))
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/img'));
});

/* JS Lint
 * -------------------- */

gulp.task('lint', function () {
    return gulp.src(['source/js/**/*.js','!source/js/vendor/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

/* Local server
 * -------------------- */
gulp.task('connect', function() {
    connect.server({
        livereload: true,
        port: 8080
    });
});

/*
 * `gulp` will build the JS & CSS files and start watching the `src` folder for changes
 * `gulp watch` will only start watching the `src` folder for changes
 * `gulp build` will only build the JS & CSS files
 * `gulp build --production` will build the CSS files for production use (minify etc.)
 * -------------------- */
gulp.task('default', ['build', 'watch', 'connect']);
gulp.task('build', ['scripts', 'styles', 'lint']);
gulp.task('watch', function() {
    gulp.watch('source/js/**/*.js', ['scripts']);
    gulp.watch('source/sass/**/*.scss', ['styles']);
    gulp.watch('source/img/*', ['image-compression']);
    gulp.watch('source/js/**/*.js', ['lint']);
});
