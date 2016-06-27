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
xml2json = require('gulp-xml2json');
streamqueue = require('streamqueue');
cssnano = require('gulp-cssnano');
sourcemaps = require('gulp-sourcemaps');

var destination = process.env.GULP_DESTINATION || 'static';

// Copy
gulp.task('copyjson', function () {
	return gulp.src('themes/barricade/static/src/particlesjs-config.json')
		.pipe(gulp.dest(destination + '/src/'))
		.pipe(notify({message: 'Copy json task complete'}));
});
gulp.task('copyfonts', function () {
	return gulp.src('themes/barricade/static/src/fonts/*')
		.pipe(gulp.dest(destination + '/src/fonts'))
		.pipe(notify({message: 'Copy fonts task complete'}));
});
gulp.task('copy', function () {
	gulp.start('copyjson', 'copyfonts');
});


// Styles
gulp.task('styles', function () {
	return sass('themes/barricade/static/src/sass/styles.scss', {style: 'expanded'})
		.pipe(autoprefixer('last 2 version'))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
		.pipe(sourcemaps.init())
		.pipe(cssnano())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(destination + '/src/css'))
		.pipe(notify({message: 'Styles task complete'}));
});

// Scripts
gulp.task('scriptconcat', function () {
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
			'themes/barricade/static/src/js/custom/lunr.js',
			'themes/barricade/static/src/js/custom/app_init.js',
			'themes/barricade/static/src/js/custom/app_search.js'
		])
		.pipe(concat('main.js'))
		.pipe(gulp.dest('themes/barricade/static/src/js'))
		.pipe(notify({message: 'Script concat task complete'}));
});
gulp.task('scriptminify', function () {
	return gulp.src([
			'themes/barricade/static/src/js/main.js',
			'themes/barricade/static/src/js/analytics.js'
		])
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		// .pipe(concat())
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest(destination + '/src/js'))
		.pipe(notify({message: 'Script minify task complete'}));
});
gulp.task('scripts', function () {
	gulp.start('scriptconcat', 'scriptminify');
});

// Images
gulp.task('images', function () {
	return streamqueue({objectMode: true},
		gulp.src('themes/barricade/static/src/img/**/*{.jpg,.png,.gif}')
			.pipe(cache(imagemin({optimizationLevel: 3, progressive: true, interlaced: true})))
			.pipe(notify({message: 'Images minifed'})),
		gulp.src('themes/barricade/static/src/img/**/*')
			.pipe(notify({message: 'Images task complete'}))
			.pipe(gulp.dest(destination + '/src/img'))
	)
});

// JSON
gulp.task('json', function () {
	return gulp.src(destination + '/index.xml')
		.pipe(xml2json())
		.pipe(rename({extname: '.json'}))
		.pipe(gulp.dest(destination + '/'))
		.pipe(notify({message: 'JSON updated'}));
});

// Index
gulp.task('index', function () {
	var hugolunr = require('hugo-lunr');
	var inputDir = 'content/**';
	var outputDir = process.env.GULP_DESTINATION || 'static';
	var h = new hugolunr();
	h.setInput(inputDir);
	h.setOutput(outputDir + '/index.json');
	h.index();
});

// Clean
gulp.task('clean', function () {
	return del(destination + '/src/**/*', {force: true});
});


// Default task
gulp.task('default', ['clean'], function () {
	gulp.start('styles', 'scripts', 'images', 'json', 'copy', 'index');
});

// Watch
gulp.task('watch', function () {

	// Watch .scss files
	gulp.watch('themes/barricade/static/src/sass/**/*.scss', ['styles']);

	// Watch .js files
	gulp.watch('themes/barricade/static/src/js/custom/init.js', ['scripts']);

	// Watch image files
	gulp.watch('themes/barricade/static/img/src/**/*.{png,gif,jpg}', ['images']);

	// Create LiveReload server
	livereload.listen();

	// Watch any files in static/, reload on change
	gulp.watch([destination + '/**', destination + '/src/**']).on('change', livereload.changed);

});

// custom
var hugolunr = require('hugo-lunr');
var fs = require('fs');
var matter = require('gray-matter');
var removeMd = require('remove-markdown');
var striptags = require('striptags');
var path = require('path');
hugolunr.prototype.readFile = function (filePath) {
	var self = this;
	var meta = matter.read(filePath, {delims: '+++', lang: 'toml'});
	if (meta.data.draft === true) return;
	var plainText = removeMd(meta.content);
	var uri = filePath.substring(0, filePath.lastIndexOf('.'));
	uri = uri.replace(self.baseDir + '/', '');
	if (meta.data.slug != undefined) {
		uri = path.dirname(uri) + '#' + meta.data.slug;
	}
	if (meta.data.url != undefined) {
		uri = meta.data.url
	}
	var tags = [];
	if (meta.data.tags != undefined) {
		tags = meta.data.tags;
	}
	uri = '/' + uri;
	var item = {'uri': uri, 'title': meta.data.title, 'content': plainText, 'tags': tags};
	self.list.push(item);
};
