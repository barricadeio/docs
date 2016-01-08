/*!
 * gulp
 * $ npm install gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del --save-dev
 */

// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');


// Copy
gulp.task('copyjson', function() {
  return gulp.src('themes/barricade/static/src/particlesjs-config.json')
    .pipe(gulp.dest('static/src/'))
    .pipe(notify({ message: 'Copy json task complete' }));
});
gulp.task('copyfonts', function() {
  return gulp.src('bower_components/font-awesome/fonts/*')
    .pipe(gulp.dest('static/src/fonts'))
    .pipe(notify({ message: 'Copy fonts task complete' }));
});
gulp.task('copy', function() {
    gulp.start('copyjson', 'copyfonts');
});


// Styles
gulp.task('styles', function() {
  return sass('themes/barricade/static/src/sass/styles.scss', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('themes/barricade/static/src/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('static/src/css'))
    .pipe(notify({ message: 'Styles task complete' }));
});

// Scripts
gulp.task('scriptconcat', function() {
  return gulp.src([
      'themes/barricade/static/src/js/custom/jquery.js',
      'themes/barricade/static/src/js/custom/foundation.js',
      'themes/barricade/static/src/js/custom/foundation.topbar.js',
      'themes/barricade/static/src/js/custom/foundation.offcanvas.js',
      'themes/barricade/static/src/js/custom/foundation.accordion.js',
      'themes/barricade/static/src/js/custom/foundation.dropdown.js',
      'themes/barricade/static/src/js/custom/foundation.slider.js',
      'themes/barricade/static/src/js/custom/foundation.tooltip.js',
      'themes/barricade/static/src/js/custom/particles.min.js',
      'themes/barricade/static/src/js/custom/headroom.min.js',
      'themes/barricade/static/src/js/custom/init.js'
    ])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('themes/barricade/static/src/js'))
    .pipe(notify({ message: 'Script concat task complete' }));
});
gulp.task('scriptminify', function() {
  return gulp.src([
    'themes/barricade/static/src/js/main.js',
    'themes/barricade/static/src/js/analytics.js'
    ])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('static/src/js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('static/src/js'))
    .pipe(notify({ message: 'Script minify task complete' }));
});
gulp.task('scripts', function() {
    gulp.start('scriptconcat', 'scriptminify');
});

// Images
gulp.task('images', function() {
  return gulp.src('themes/barricade/static/src/img/**/*')
    // imagemin can't handle svg?
    // .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('static/src/img'))
    .pipe(notify({ message: 'Images task complete' }));
});

// Clean
gulp.task('clean', function() {
  return del('static/src/**/*');
});


// Default task
gulp.task('default', ['clean'],  function() {
  gulp.start('copy', 'styles', 'scripts', 'images');
});

// Watch
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('themes/barricade/static/src/sass/**/*.scss', ['styles']);

  // Watch .js files
  gulp.watch('themes/barricade/static/src/js/**/*.js', ['scripts']);

  // Watch image files
  gulp.watch('themes/barricade/static/img/src/**/*.{png,gif,jpg}', ['images']);

  // Create LiveReload server
  livereload.listen();

  // Watch any files in dist/, reload on change
  gulp.watch(['static/**', 'static/src/**']).on('change', livereload.changed);

});
