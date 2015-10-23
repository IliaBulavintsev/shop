/* --------- plugins --------- */
var gulp        = require('gulp'),
    compass     = require('gulp-compass'),
    jade        = require('gulp-jade'),
    coffee      = require('gulp-coffee'),
    minifyCSS   = require('gulp-minify-css'),
    uglifyJS    = require('gulp-uglify'),
    rename      = require('gulp-rename'),
    concat      = require('gulp-concat'),
    browserSync = require('browser-sync').create(),
    plumber     = require('gulp-plumber');

/* --------- paths --------- */
var paths = {
        jade : {
            location    : 'dist/markups/**/*.jade',
            compiled    : 'dist/markups/_pages/*.jade',
            destination : '.'
        },

        scss : {
            location    : 'dist/styles/**/*.scss',
            entryPoint  : 'css/main.css',
            cssFiles    : 'css/*.css'
        },

        coffee : {
            location    : 'dist/scripts/**/*.coffee',
            jsFiles     : 'js/*.js',
            jsFolder    : 'js',
            jsFile      : 'main.js'
        },

        compass : {
            configFile  : 'config.rb',
            cssFolder   : 'css',
            scssFolder  : 'dist/styles',
            imgFolder   : 'img'
        },

        browserSync : {
            baseDir : './',
            watchPaths : ['*.html', 'css/*.css', 'js/*.js']
        }
    }

/* --------- jade --------- */
gulp.task('jade', function() {
    gulp.src(paths.jade.compiled)
        .pipe(plumber())
        .pipe(jade({
            pretty: '\t',
        }))
        .pipe(gulp.dest(paths.jade.destination));
});

/* --------- scss --------- */
gulp.task('scss', function() {
    gulp.src(paths.scss.location)
        .pipe(plumber())
        .pipe(compass({
            config_file: paths.compass.configFile,
            css: paths.compass.cssFolder,
            sass: paths.compass.scssFolder,
            image: paths.compass.imgFolder
        }))
        .pipe(minifyCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.compass.cssFolder));;
});

/* --------- coffee --------- */
gulp.task('coffee', function() {
    gulp.src(paths.coffee.location)
        .pipe(plumber())
        .pipe(coffee({bare: true}))
        .pipe(concat(paths.coffee.jsFile))
        .pipe(gulp.dest(paths.coffee.jsFolder))
        .pipe(uglifyJS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.coffee.jsFolder));
});

/* --------- browser sync --------- */
gulp.task('sync', function() {
    browserSync.init({
        port: 9000,
        browser: "google chrome",
        server: {
            baseDir: paths.browserSync.baseDir
        }
    });
});

/* --------- watch --------- */
gulp.task('watch', function(){
    gulp.watch(paths.jade.location, ['jade']);
    gulp.watch(paths.scss.location, ['scss']);
    gulp.watch(paths.coffee.location, ['coffee']);

    gulp.watch(paths.browserSync.watchPaths).on('change', browserSync.reload);
});

/* --------- default --------- */
gulp.task('default', ['sync', 'watch']);