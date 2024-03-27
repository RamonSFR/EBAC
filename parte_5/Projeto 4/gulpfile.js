const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');


function styles() {
    return gulp.src('./src/styles/main.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}
function js() {
    return gulp.src('./src/javascript/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/javascript'));
}

exports.default = gulp.parallel(styles, images, js)
exports.watch = function () {
    gulp.watch('./src/styles/**/*.scss', gulp.parallel(styles));
}