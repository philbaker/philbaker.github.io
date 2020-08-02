---
title: Common Gulp Tasks
description: A set of useful Gulp tasks to assist front-end development
author: Phil Baker
date: 2016-10-17
dateModified: 2016-10-17
---
I've been using Gulp for a couple of years now. I originally had huge set of tasks available so that I'd be ready for any problem, but it became a dependency nightmare, especially when working with Windows (try deleting the node_modules folder!) I'm back now with a fairly simple set of tasks that cover the essentials. I'd highly recommend Browser-sync for local server and live-reload features.

Here's the gulpfile that I'm using at the moment:

```javascript
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('serve', function() {
    browserSync.init({
        proxy: "http://localhost.xxxx",
        notify: false
    });
});

gulp.task('watch', function () {
    gulp.watch('./css/**/*.scss', ['sass']);
    gulp.watch('./css/*.css', ['autoprefixer']);
    gulp.watch('*.php').on('change', browserSync.reload);
});

gulp.task('sass', function () {
    return gulp.src('./css/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

var autoprefixerOptions = {
    browsers: ['last 2 versions', '> 5%']
};

gulp.task('autoprefixer', function() {
    return gulp.src('./css/*.css')
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest('./css'));
});

var defaultTasks = ['sass', 'autoprefixer', 'serve', 'watch'];

gulp.task('default', defaultTasks);
```

And package.json to go along with it:

```json
{
    "devDependencies": {
        "gulp": "latest",
        "gulp-sass": "latest",
        "browser-sync": "latest",
        "gulp-cssmin": "latest",
        "gulp-rename": "latest",
        "gulp-sourcemaps": "latest",
        "gulp-autoprefixer": "latest"
    }
}
```
