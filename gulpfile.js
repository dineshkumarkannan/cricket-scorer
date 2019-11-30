const gulp = require('gulp');
const browserSync = require('browser-sync').create();

const appBaseDir = './app';

function watch() {
  browserSync.init({
    server: {
      baseDir: appBaseDir,
      index: '/index.html'
    }
  });

  gulp.watch(`${appBaseDir}/*`).on('change', browserSync.reload);
}

exports.watch = watch;