const gulp = require('gulp');
const { series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

//compile 
function buildsass() {
  return gulp.src('scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
};
gulp.task('buildsass');

exports.build = series(buildsass);