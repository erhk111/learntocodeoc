var gulp = require('gulp');
var mocha = require('mocha');
var chai = require('chai');
var mocha = require('gulp-mocha');

gulp.task('build', ['test'], function() {

});

gulp.task('test', function () {
    return gulp.src('test.js', {read: false})
        .pipe(mocha({reporter: 'list'}));
});