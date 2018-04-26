var gulp = require('gulp')
var minjs = require('gulp-uglify')
var sass = require('gulp-ruby-sass')
var concat = require('gulp-concat')
var bower = require('gulp-bower')

var paths = {
  'bower': './bower_components',
  'assets': './assets',
  'public': './public'
}

gulp.task('bower', function() {
    return bower()
        .pipe(gulp.dest(paths.bower))
});

gulp.task('styles',function() {
  return gulp.src([
    paths.assets + '/styles/sass/main.scss',
    paths.bower + '/datatables.net-dt/css/jquery.dataTables.css',
  ])
             .pipe(sass({
               style: 'compressed',
               loadPath: [
                paths.assets + '/styles/sass',
                paths.bower + '/bootstrap-sass/assets/stylesheets',
               ]}))
             .pipe(concat('main.css'))
             .pipe(gulp.dest(paths.public + '/css'));
});

// gulp.task('styles', function() {
//     return sass(paths.assets + '/styles/sass/main.scss', {
//             // style: 'compressed',
//             loadPath: [
//                 paths.assets + '/styles/sass',
//                 paths.bower + '/bootstrap-sass/assets/stylesheets',
//             ]
//         })
//         .pipe(gulp.dest(paths.public + '/css'));
// });


gulp.task('scripts',function() {
  gulp.src([
    paths.bower + '/jquery/dist/jquery.js',
    paths.bower + '/bootstrap/dist/js/bootstrap.js',
    paths.bower + '/jquery-smoove/dist/jquery.smoove.js',
    paths.bower + '/datatables.net/js/jquery.dataTables.js',
    paths.bower + '/chart.js/dist/Chart.js',
    paths.assets + '/scripts/main.js'
  ])
  .pipe(concat('main.js'))
  .pipe(gulp.dest(paths.public + '/js'))
})

gulp.task('watch',function() {
  gulp.watch(paths.assets + '/styles/sass/*.scss', ['styles'])
  gulp.watch(paths.assets + '/scripts/*.js', ['scripts'])
})


gulp.task('default',['bower','styles','scripts']);
// gulp.task('default',['styles','scripts']);
