var gulp = require('gulp');
var minify = require('gulp-minify');
var clean = require('gulp-clean-css');
var rename = require('gulp-rename');

gulp.task('js', function() {
    return gulp.src('src/*.js')
    .pipe(minify({
        ext:{
            src:'.js',
            min:'.min.js'
        },
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('css', function () {
    return gulp.src('src/*.css')
    .pipe(gulp.dest('dist'))
    .pipe(clean({compatibility: 'ie8'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['js', 'css'], function () {
    // Run both tasks
});
