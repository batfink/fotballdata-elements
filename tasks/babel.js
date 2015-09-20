var gulp = require('gulp');
var babel = require('gulp-babel');
var sourcemaps = require("gulp-sourcemaps");
var concat = require("gulp-concat");


gulp.task('babel', function () {
    return gulp.src(['elements/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(babel({
            modules: 'umd'
        }))
        .pipe(concat("elements.js"))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('dist'));
});
