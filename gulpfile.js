const gulp = require('gulp')
const del = require('del')

const appDir = 'dist/resources/app';

// Clean dist app
gulp.task('clean', () => {
  return del(['dist'])
})

// Create Electron distribution
gulp.task('create-electron-dist', ['clean'],  () => {
  return gulp.src(['./node_modules/electron/dist/**/*'], { base: './node_modules/electron' })
    .pipe(gulp.dest('.'))
})

// Process app files distribution
gulp.task('dist', ['create-electron-dist'], () => {
  return gulp.src(['package.json', 'src/**/*'], { base: '.' })
    .pipe(gulp.dest(appDir))
})

gulp.task('default', ['dist'])