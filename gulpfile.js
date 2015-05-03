// REQUIRES
// Gulp
var gulp        = require('gulp');
var gutil       = require('gutil');

// Live Reloading
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

// Precompilers
var jade        = require('gulp-jade');
var sass        = require('gulp-sass');
var coffee      = require('gulp-coffee');
var sourcemaps  = require('gulp-sourcemaps');

// Watcher
var watch       = require('gulp-watch');


// DIRECTORY STRUCTURE
var DIR_SOURCE_INDEX     = './app/index.jade';
var DIR_SOURCE_TEMPLATES = './app/templates/*.jade';
var DIR_SOURCE_STYLES    = ['./app/styles/*.sass', './app/styles/*.scss'];
var DIR_SOURCE_SCRIPTS   = ['./app/scripts/*.coffee', './app/scripts/*.litcoffee'];
var DIR_SOURCE_VENDOR    = './app/bower_components/**/*'

var DIR_BUILD_INDEX      = './dist';
var DIR_BUILD_TEMPLATES  = './dist/templates';
var DIR_BUILD_STYLES     = './dist/styles';
var DIR_BUILD_SCRIPTS    = './dist/scripts';
var DIR_BUILD_VENDOR     = './dist/bower_components'


// TASKS

// Compile Index
gulp.task('index', function() {
  return gulp.src(DIR_SOURCE_INDEX)
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest(DIR_BUILD_INDEX));
});

// Compile Jade
gulp.task('jade', function() {
  return gulp.src(DIR_SOURCE_TEMPLATES)
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest(DIR_BUILD_TEMPLATES));
});

// Compile Sass
gulp.task('sass', function() {
  return gulp.src(DIR_SOURCE_STYLES)
    .pipe(sourcemaps.init())
    .pipe(sass({
      indentedSyntax: true
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(DIR_BUILD_STYLES));
    // .pipe(reload({stream: true}));
});

// Compile Coffeescript
gulp.task('coffee', function() {
  return gulp.src(DIR_SOURCE_SCRIPTS)
    .pipe(sourcemaps.init())
    .pipe(coffee().on('error', gutil.log))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(DIR_BUILD_SCRIPTS));
});

// Copy vendor scripts
gulp.task('copy_vendor', function() {
  return gulp.src(DIR_SOURCE_VENDOR)
    .pipe(gulp.dest(DIR_BUILD_VENDOR));
});

// Serve
gulp.task('serve', ['index', 'jade', 'sass', 'coffee', 'copy_vendor'], function() {
  browserSync.init({
    server: {
      baseDir: DIR_BUILD_INDEX
    }
  });

  gulp.watch(DIR_SOURCE_INDEX, ['index']).on('change', reload);
  gulp.watch(DIR_SOURCE_TEMPLATES, ['jade']).on('change', reload);
  gulp.watch(DIR_SOURCE_STYLES, ['sass']).on('change', reload);
  gulp.watch(DIR_SOURCE_SCRIPTS, ['coffee']).on('change', reload);
});

// Default
gulp.task('default', ['serve']);