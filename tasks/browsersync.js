var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('browsersync', function() {
    browserSync({
        // browser: "google chrome canary",
        // open: false,
        // reloadOnRestart: true,
        server: {
            baseDir: [ 'www', 'bower_components', 'dist' ]
        }
    });

    gulp.watch(['www/*', 'dist/*'], reload);
    gulp.watch(['css/*', 'svg/*'], [ 'styles' ]);
    gulp.watch(['elements/*', 'lib/*'], [ 'babel' ]);
});
