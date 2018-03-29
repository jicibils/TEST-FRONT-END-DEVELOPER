var gulp = require('gulp')
var minjs = require('gulp-uglify')
var sass = require('gulp-sass')
var concat = require('gulp-concat');

var paths = {
  'bower': './bower_components',
  'assets': './assets',
  'public': './public'
}

gulp.task('styles',function() {
  return gulp.src([paths.assets + '/styles/sass/main.scss'])
             .pipe(sass({includePaths: [paths.bower + '/bootstrap/scss']}))
             .pipe(concat('main.css'))
             .pipe(gulp.dest(paths.public + '/css'));
});

gulp.task('scripts',function() {
  gulp.src([
    paths.bower + '/jquery/dist/jquery.js',
    paths.bower + '/bootstrap/dist/js/bootstrap.js',
    // paths.bower + '/bootstrap/js/dist/alert.js',
    paths.assets + '/scripts/main.js'
  ])
  .pipe(concat('main.js'))
  .pipe(gulp.dest(paths.public + '/js'))
})

gulp.task('watch',function() {
  gulp.watch(paths.assets + '/styles/sass/*.scss', ['styles'])
  gulp.watch(paths.assets + '/scripts/*.js', ['scripts'])
})


gulp.task('default',['styles','scripts']);

















// gulp.task('mainminjs', function() {
//   gulp.src('./src/js/main.js')
//       .pipe(minjs())
//       .pipe(gulp.dest('./build/js/'))
// })
//
// gulp.task('varmainjs',function() {
//   gulp.watch('./src/js/*.js', ['mainminjs'])
// })
