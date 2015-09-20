var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer-core');
var cssimport = require('postcss-import');
var customProperties = require('postcss-custom-properties');
var sourcemaps = require('gulp-sourcemaps');
var log = console.log.bind(console);
var csswring = require('csswring');
var colorFunction = require('postcss-color-function');
var nested = require('postcss-nested');

gulp.task('styles', function () {

    var processors = [
        cssimport(),
        customProperties(),
        colorFunction(),
        nested(),
        autoprefixer({ browsers: ['last 2 versions'] })
    ];

    // comment during development
    // processors.push(csswring());

    return gulp.src([ 'css/fotballdata-elements.css', 'css/mockup.css' ])
        .pipe(sourcemaps.init())
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));

});
