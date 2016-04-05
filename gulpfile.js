"use strict";
var concat = require('gulp-concat');
var gulp = require('gulp');
var sass = require('gulp-sass');
var maps = require('gulp-sourcemaps');

gulp.task("concatScripts", function() {
	gulp.src('js/**/*.js')
		.pipe(concat("app.js"))
		.pipe(gulp.dest('js'));
});

gulp.task('styles', function() {
    gulp.src('scss/**/*.scss')
    	.pipe(maps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(maps.write('./'))
        .pipe(gulp.dest('css'));
});

//Watch task
gulp.task('default', function() {
	gulp.watch('scss/**/*.scss', ['styles']);
});