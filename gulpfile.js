const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

/*
    --TOP LEVEL FUNCTIONS --
    gulp.task  - Define tasks
    gulp.src   - Points to files to use
    gulp.dest  - Points to folder to output
    gulp.watch - Watch files and folders for changes
 */

// Logs Message
// *gulp message*
gulp.task('message', async function () {
    return console.log('Gulp is running...');
});

// *gulp*
gulp.task('default', async  function () {
    return console.log('Gulp is running...');
});

//Copy All HTML files
gulp.task('copyHtml', async function () {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

//Optimize images
/*exports.imageMin = () => (
    gulp.src('src/images/!*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);*/

gulp.task('imageMin', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);
