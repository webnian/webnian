var gulp = require('gulp')
var watch = require('gulp-watch')
var uglify = require('gulp-uglify')
var rename = require('gulp-rename')
var del = require('del')
var plumber = require('gulp-plumber')

gulp.task('minifyjs', function() {
  gulp.src(['./webnian.js'])
  .pipe(plumber())
  .pipe(rename({suffix: '.min'}))
  .pipe(uglify())
  .pipe(gulp.dest('./'))
})

gulp.task('clean', function() {
  del(['./webnian.min.js'])
})

gulp.task('watch',['minifyjs'], function () {
	gulp.watch(['./webnian.js'],
  ['minifyjs'])
})

gulp.task('dist', ['minifyjs'])
