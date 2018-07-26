let fs = require("fs");
let browserify = require("browserify");
let gulp = require("gulp");
let concat = require("gulp-concat");
let uglify = require("gulp-uglify");

gulp.task('scripts',()=>{
	return gulp.src("scripts/**")
	.pipe(concat('scripts.js'))
	.pipe(gulp.dest("build/"))
})

gulp.task('browserify',()=>{
	return browserify("build/scripts.js")
	.transform("babelify",{presets:["@babel/preset-env"]})
	.bundle()
	.pipe(fs.createWriteStream("build/bundle.js"))
})

gulp.task('default',['scripts','browserify']);
gulp.watch("scripts/**",['scripts','browserify'])