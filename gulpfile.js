'use strict';

// REQUIRES
// Gulp
var gulp         = require('gulp');
var del          = require('del');

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
    DIR_BUILD_INDEX      = './dist';
var DIR_WATCH_INDEX      = DIR_SOURCE_INDEX;

var DIR_SOURCE_MARKUP    = './app/instances/pages/**/*.jade',
    DIR_BUILD_MARKUP     = './dist';
var DIR_WATCH_MARKUP     = './app/{templates,instances}/**/*.jade';

var DIR_SOURCE_STYLES    = ['./app/global.sass', './app/{templates,instances}/**/*.{sass,scss}'],
    DIR_BUILD_STYLES     = './dist';
var DIR_WATCH_STYLES     = './app/**/**/*.{sass,scss}';

var DIR_SOURCE_SCRIPTS   = './app/{templates,instances}/**/*.{coffee,litcoffee}',
    DIR_BUILD_SCRIPTS    = './dist';
var DIR_WATCH_SCRIPTS    = DIR_SOURCE_SCRIPTS;

// Copied
// Copy global assets into a root assets folder.
var DIR_SOURCE_GLOBAL_ASSETS = './app/assets/**/*',
    DIR_BUILD_GLOBAL_ASSETS  = './dist/assets';
var DIR_WATCH_GLOBAL_ASSETS  = DIR_SOURCE_GLOBAL_ASSETS;

// Copy page assets into their page's assets folder.
var DIR_SOURCE_PAGE_ASSETS   = './app/instances/pages/**/assets/*',
    DIR_BUILD_PAGE_ASSETS    = './dist';
var DIR_WATCH_PAGE_ASSETS    = DIR_SOURCE_PAGE_ASSETS;

// Combine bower_components and non-bower components into a single vendor folder.
var DIR_SOURCE_VENDOR        = ['./app/vendor/bower_components/**/*', './app/vendor/!(bower_components)'],
    DIR_BUILD_VENDOR         = './dist/vendor';


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

// Copy global assets
gulp.task('copy_global_assets', function() {
  return gulp.src(DIR_SOURCE_GLOBAL_ASSETS)
    .pipe(gulp.dest(DIR_BUILD_GLOBAL_ASSETS));
});

// Copy page assets
gulp.task('copy_page_assets', function() {
  return gulp.src(DIR_SOURCE_PAGE_ASSETS)
    .pipe(gulp.dest(DIR_BUILD_PAGE_ASSETS));
});

// Serve
gulp.task('serve', ['index', 'jade', 'sass', 'coffee', 'copy_vendor', 'copy_global_assets', 'copy_page_assets'], function() {
  browserSync.init({
    browser: 'google chrome',
    notify: false,
    server: {
      baseDir: DIR_BUILD_INDEX
    }
  });

  gulp.watch(DIR_WATCH_INDEX, ['index']);
  gulp.watch(DIR_WATCH_MARKUP, ['index', 'jade']);
  gulp.watch(DIR_WATCH_STYLES, ['sass']);
  gulp.watch(DIR_WATCH_SCRIPTS, ['coffee']);
  gulp.watch(DIR_WATCH_GLOBAL_ASSETS, ['copy_global_assets']).on('change', browserSync.reload);
  gulp.watch(DIR_WATCH_PAGE_ASSETS, ['copy_page_assets']).on('change', browserSync.reload);
});

// Default
gulp.task('default', ['serve']);

// Clean `dist` folder except for the .git file
gulp.task('clean', function() {
  del(['dist/**/*', '!.git', '!README.md']);
});