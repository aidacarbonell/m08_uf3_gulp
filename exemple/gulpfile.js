var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
 
gulp.task('exemple', function() {
  console.log("Exemple d'exercici");
 
  return gulp.src('src/js/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js/'));
});
 
gulp.task('default', function() {
    console.log('Hello world!');
});