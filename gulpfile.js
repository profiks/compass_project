var gulp     = require('gulp'),
    gutil    = require('gulp-util'),
    compass  = require('gulp-compass'),
    connect  = require('gulp-connect');


gulp.task('compass', function() {
  gulp.src('app/scss/*.scss')
    .pipe(compass({
      sass      : 'app/scss',
      css       : 'app/css',
      image     : 'app/img',
      fonts     : 'app/fonts',
      style     : 'expanded',
      require   : ['susy', 'breakpoint']
    })
    .on('error', gutil.log))
    .pipe(gulp.dest('app/css'))
    .pipe(connect.reload())
});


gulp.task('html', function() {
  gulp.src('app/*.html')
    .pipe(connect.reload())
});


gulp.task('watch', function() {
  gulp.watch(['app/scss/*.scss', 'app/scss/*/*.scss'], ['compass']);
  gulp.watch(['app/*.html', 'app/*/*.html'], ['html']);
});


gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});


gulp.task('default', ['watch', 'html', 'compass', 'connect']);
