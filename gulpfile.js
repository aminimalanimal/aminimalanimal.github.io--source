'use strict';

// REQUIRES
// Gulp
var gulp         = require('gulp');
var gutil        = require('gutil');

// Live Reloading
var browserSync  = require('browser-sync').create();

// Precompilers
var jade         = require('gulp-jade');
var sass         = require('gulp-sass');
var coffee       = require('gulp-coffee');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');
var concat       = require('gulp-concat');
// Watcher
require('gulp-watch');


// Jade Configuration

// enables the use of a `+filter` mixin that accepts transformers for alternate types of code
// var filter = require('jade-filters');

// should include a variety of other code types
// var transformers = require('transformers');

var jadeConfiguration = {
  basedir: 'app',
  pretty: '\t'
};


// DIRECTORY STRUCTURE

// Parsed
var DIR_SOURCE_INDEX     = './app/index.jade',
    DIR_BUILD_INDEX      = './dist',
    DIR_WATCH_INDEX      = './app/index.jade';

var DIR_SOURCE_MARKUP    = './app/instances/pages/**/*.jade',
    DIR_BUILD_MARKUP     = './dist',
    DIR_WATCH_MARKUP     = './app/{templates,instances}/**/*.jade';

var DIR_SOURCE_STYLES    = ['./app/global.sass', './app/{templates,instances}/**/*.{sass,scss}'],
    DIR_BUILD_STYLES     = './dist',
    DIR_WATCH_STYLES     = ['./app/global.sass', './app/{templates,instances}/**/*.{sass,scss}'];

var DIR_SOURCE_SCRIPTS   = './app/{templates,instances}/**/*.{coffee,litcoffee}',
    DIR_BUILD_SCRIPTS    = './dist',
    DIR_WATCH_SCRIPTS    = './app/{templates,instances}/**/*.{coffee,litcoffee}';

// Copied
var DIR_SOURCE_ASSETS  = './app/instances/**/*.{md,mdown,markdown,svg,png,jpg,jpeg,gif,webp,ico,eot,ttf,woff,otf}',
    DIR_BUILD_ASSETS   = './dist/assets',
    DIR_WATCH_ASSETS   = './app/assets/**/*';

var DIR_SOURCE_VENDOR    = './app/vendor/**/*',
    DIR_BUILD_VENDOR     = './dist/vendor';


// Error handling

var handleError = function(error) {
  //If you want details of the error in the console
  console.log(error.toString());

  this.emit('end');
};

// TASKS

// Compile Index
gulp.task('index', function() {
  return gulp.src(DIR_SOURCE_INDEX)
    .pipe(jade(jadeConfiguration)
      .on('error', handleError))
    .pipe(gulp.dest(DIR_BUILD_INDEX))
    .pipe(browserSync.stream());
});

// Compile Jade
gulp.task('jade', function() {
  return gulp.src(DIR_SOURCE_MARKUP)
    .pipe(jade(jadeConfiguration)
      .on('error', handleError))
    .pipe(gulp.dest(DIR_BUILD_MARKUP))
    .pipe(browserSync.stream());
});

// Compile Sass
gulp.task('sass', function() {
  return gulp.src(DIR_SOURCE_STYLES)
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: ['./app'],
      indentedSyntax: true
    }).on('error', handleError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(concat('style.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(DIR_BUILD_STYLES))
    .pipe(browserSync.stream());
});

// Compile Coffeescript
gulp.task('coffee', function() {
  return gulp.src(DIR_SOURCE_SCRIPTS)
    .pipe(sourcemaps.init())
    .pipe(coffee()
      .on('error', handleError))
    .pipe(concat('script.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(DIR_BUILD_SCRIPTS))
    .pipe(browserSync.stream());
});

// Copy vendor scripts
gulp.task('copy_vendor', function() {
  return gulp.src(DIR_SOURCE_VENDOR)
    .pipe(gulp.dest(DIR_BUILD_VENDOR));
});

// Copy assets
gulp.task('copy_assets', function() {
  return gulp.src(DIR_SOURCE_ASSETS)
    .pipe(gulp.dest(DIR_BUILD_ASSETS));
});

// Serve
gulp.task('serve', ['index', 'jade', 'sass', 'coffee', 'copy_vendor', 'copy_assets'], function() {
  browserSync.init({
    browser: 'google chrome',
    server: {
      baseDir: DIR_BUILD_INDEX
    }
  });

  gulp.watch(DIR_WATCH_INDEX, ['index']);
  gulp.watch(DIR_WATCH_MARKUP, ['index', 'jade']);
  gulp.watch(DIR_WATCH_STYLES, ['sass']);
  gulp.watch(DIR_WATCH_SCRIPTS, ['coffee']);
  gulp.watch(DIR_WATCH_ASSETS, ['copy_assets']).on('change', browserSync.reload);
});

// Default
gulp.task('default', ['serve']);