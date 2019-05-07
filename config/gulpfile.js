var gulp = require('gulp');
var less = require('gulp-less');
var zip = require('gulp-zip');

gulp.task('less', function() {
    return gulp.src('../force-app/main/default/lwc/**/*.less')  // only compile the entry file
        .pipe(less())
        .pipe(gulp.dest('../force-app/main/default/lwc/'))
});

gulp.task('watch-less', function() {
    gulp.watch('../force-app/main/default/lwc/**/*.less', gulp.series('less'));  // Watch all the .less files into styles, then run the less task
});

gulp.task('default', gulp.series('watch-less'));

gulp.task('zip', function () {
    return gulp.src('../front/Assets/**')
        .pipe(zip('Assets.zip'))
        .pipe(gulp.dest('../front'));
});
// Default will run the 'entry' watch task