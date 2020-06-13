const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

// sass.compiler = require('node-sass');

/*
    --TOP LEVEL FUNCTIONS --
    gulp.task  - Define tasks
    gulp.src   - Points to files to use
    gulp.dest  - Points to folder to output
    gulp.watch - Watch files and folders for changes
 */

// *gulp <task-name>*

// Logs Message
gulp.task('message', async function () {
    return console.log('Gulp is running...');
});

//Copy All HTML files
gulp.task('copyHtml', async function () {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

//Optimize images
gulp.task('imageMin', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);

/*exports.imageMin = () => (
    gulp.src('src/images/!*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);*/

//Minify JS
gulp.task('minifyJs', async function () {
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

//Compile Sass
gulp.task('sass', async function () {
    gulp.src('src/sass/*.scss')
        .pipe(sass()).on('error', sass.logError)
        .pipe(gulp.dest('dist/css'));
});

//Scripts
gulp.task('scripts', async function() {
   gulp.src('src/js/*.js')
       .pipe(concat('main.min.js'))
       .pipe(uglify())
       .pipe(gulp.dest('dist/js'));
});

// *gulp*
gulp.task('default', gulp.series('message', 'copyHtml', 'imageMin', 'sass', 'scripts'));
// gulp.task('default', gulp.parallel('message', 'copyHtml', 'imageMin', 'sass', 'scripts'));

gulp.task('watch', async function () {
    gulp.watch('src/js/*.js', gulp.series('scripts'));
    gulp.watch('src/images/*', gulp.series('imageMin'));
    gulp.watch('src/sass/*.scss', gulp.series('sass'));
    gulp.watch('src/*.html', gulp.series('copyHtml'));
});
