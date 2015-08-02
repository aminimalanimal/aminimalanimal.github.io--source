'use strict';

// REQUIRES
// Gulp
var gulp         = require('gulp');
var gutil        = require('gutil');

// Live Reloading
var browserSync  = require('browser-sync').create();
var reload       = browserSync.reload;

// Precompilers
var jade         = require('gulp-jade');
var sass         = require('gulp-sass');
var coffee       = require('gulp-coffee');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');

// Watcher
require('gulp-watch');


// Jade Configuration

// enables the use of a `+filter` mixin that accepts transformers for alternate types of code
// var filter = require('jade-filters');

// should include a variety of other code types
// var transformers = require('transformers');

var jadeConfiguration = {
  basedir: 'app/markup',
  pretty: '\t'
};


// DIRECTORY STRUCTURE

// Parsed
var DIR_SOURCE_INDEX     = './app/index.jade',
    DIR_BUILD_INDEX      = './dist',
    DIR_WATCH_INDEX      = './app/index.jade';

var DIR_SOURCE_MARKUP    = './app/markup/instances/pages/**/*.jade',
    DIR_BUILD_MARKUP     = './dist',
    DIR_WATCH_MARKUP     = './app/markup/**/*.jade';

var DIR_SOURCE_STYLES    = ['./app/styles/main.sass',
                            './app/styles/pages/presentations.sass',
                            './app/styles/*.scss'],
    DIR_BUILD_STYLES     = './dist/styles',
    DIR_WATCH_STYLES     = ['./app/styles/**/*.sass', './app/styles/*.scss'];

var DIR_SOURCE_SCRIPTS   = ['./app/scripts/**/*.coffee', './app/scripts/*.litcoffee'],
    DIR_BUILD_SCRIPTS    = './dist/scripts',
    DIR_WATCH_SCRIPTS    = ['./app/scripts/**/*.coffee', './app/scripts/*.litcoffee'];

// Copied
var DIR_SOURCE_ASSETS  = './app/assets/**/*',
    DIR_BUILD_ASSETS   = './dist/assets',
    DIR_WATCH_ASSETS   = './app/assets/**/*';

var DIR_SOURCE_VENDOR    = ['./app/bower_components/**/*', './app/vendor/**/*'],
    DIR_BUILD_VENDOR     = './dist/vendor';

var DIR_SOURCE_MARKDOWN  = ['./app/markdown/**/*.md', './app/markdown/**/*.mdown', './app/markdown/**/*.markdown'],
    DIR_BUILD_MARKDOWN   = './dist',
    DIR_WATCH_MARKDOWN   = ['./app/markdown/**/*.md', './app/markdown/**/*.mdown', './app/markdown/**/*.markdown'];


// TASKS

// Compile Index
gulp.task('index', function() {
  return gulp.src(DIR_SOURCE_INDEX)
    .pipe(jade(jadeConfiguration))
    .pipe(gulp.dest(DIR_BUILD_INDEX))
    .pipe(browserSync.stream());
});

// Compile Jade
gulp.task('jade', function() {
  return gulp.src(DIR_SOURCE_MARKUP)
    .pipe(jade(jadeConfiguration))
    .pipe(gulp.dest(DIR_BUILD_MARKUP))
    .pipe(browserSync.stream());
});

// Compile Sass
gulp.task('sass', function() {
  return gulp.src(DIR_SOURCE_STYLES)
    .pipe(sourcemaps.init())
    .pipe(sass({
      indentedSyntax: true
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(DIR_BUILD_STYLES))
    .pipe(browserSync.stream());
});

// Compile Coffeescript
gulp.task('coffee', function() {
  return gulp.src(DIR_SOURCE_SCRIPTS)
    .pipe(sourcemaps.init())
    .pipe(coffee().on('error', gutil.log))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(DIR_BUILD_SCRIPTS))
    .pipe(browserSync.stream());
});

// Copy vendor scripts
gulp.task('copy_vendor', function() {
  return gulp.src(DIR_SOURCE_VENDOR)
    .pipe(gulp.dest(DIR_BUILD_VENDOR));
});

// Copy markdown files
gulp.task('copy_markdown', function() {
  return gulp.src(DIR_SOURCE_MARKDOWN)
    .pipe(gulp.dest(DIR_BUILD_MARKDOWN));
});

// Copy assets
gulp.task('copy_assets', function() {
  return gulp.src(DIR_SOURCE_ASSETS)
    .pipe(gulp.dest(DIR_BUILD_ASSETS));
});

// Serve
gulp.task('serve', ['index', 'jade', 'sass', 'coffee', 'copy_vendor', 'copy_markdown', 'copy_assets'], function() {
  browserSync.init({
    server: {
      baseDir: DIR_BUILD_INDEX
    }
  });

  gulp.watch(DIR_WATCH_INDEX, ['index']);
  gulp.watch(DIR_WATCH_MARKUP, ['index', 'jade']);
  gulp.watch(DIR_WATCH_STYLES, ['sass']);
  gulp.watch(DIR_WATCH_SCRIPTS, ['coffee']);
  gulp.watch(DIR_WATCH_MARKDOWN, ['copy_markdown']).on('change', browserSync.reload);
  gulp.watch(DIR_WATCH_ASSETS, ['copy_assets']).on('change', browserSync.reload);
});

// Default
gulp.task('default', ['serve']);