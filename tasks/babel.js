var gulp = require('gulp');
var babel = require('gulp-babel');
var sourcemaps = require("gulp-sourcemaps");
var rollup = require('gulp-rollup');


gulp.task('babel', function () {
    return gulp.src(['elements/**/*.js'])
        // .pipe(sourcemaps.init())
        .pipe(rollup())
        .pipe(babel({
            modules: 'umd'
        }))
        // .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('dist'));
});
