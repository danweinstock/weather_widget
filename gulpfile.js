
var gulp = require('gulp'), // Load Gulp!
// Now that we've installed the uglify package we can require it:
ugly = require('gulp-uglify'),
rename = require('gulp-rename');

gulp.task('css', function(){
   var tester = gulp.src('./css/*.css') // What files do we want gulp to consume?
     .pipe(ugly()) // Call the uglify function on these files
     .pipe(rename({ extname: '.min.css' })) //  Rename the uglified file
     .pipe(gulp.dest('./build/css')) // Where do we put the result?
});
gulp.task('js',function(){
	var newtest = gulp.src('./js/*.js')
			.pipe(ugly())
			.pipe(rename({ extname: '.min.js'}))
			.pipe(gulp.dest('./build/js'));
});
gulp.task('default', ["css","js"]);