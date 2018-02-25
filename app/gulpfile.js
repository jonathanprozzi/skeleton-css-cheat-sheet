var gulp = require('gulp') // reuqire gulp
var sass = require('gulp-sass') // require gulp-sass plugin
var browserSync = require('browser-sync').create() // require browser-sync

gulp.task('sass', function () {
  return gulp.src('scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
})

gulp.task('watch', ['browserSync', 'sass'], function () {
  gulp.watch('scss/**/*.scss', ['sass'])
  gulp.watch('index.html').on('change', browserSync.reload)
})

gulp.task('default', ['watch'])
