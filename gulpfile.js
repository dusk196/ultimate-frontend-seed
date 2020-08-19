/**
 * Importing all the required modules
 * You can add/remove any unused module depending on your project
 * 
 * If you're on VSCode & `require` is showing to convert to ES6; ts(80001),
 * then put this in your VSCode stettings
 * `javascript.validate.enable`: false
 * https://github.com/microsoft/vscode/issues/47299
 */
var del = require("del");
var gulp = require("gulp");
var csso = require("gulp-csso");
var scss = require("gulp-sass");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var terser = require('gulp-terser');
var rename = require("gulp-rename");
var htmlmin = require("gulp-htmlmin");
var cleanCSS = require("gulp-clean-css");
var typescript = require('gulp-typescript');
var autoprefixer = require("gulp-autoprefixer");
var browserSync = require("browser-sync").create();


/**
 * Declare the source & destination paths of the file path
 * Depending on your project type, feel free to remove whichever is not required
 */
var paths = {
  html: { src: "src/**/*.html", dest: "dist/" },
  css: { src: "src/**/*.css", dest: "dist/css/" },
  scss: { src: "src/**/*.scss", dest: "dist/css/" },
  js: { src: "src/**/*.js", dest: "dist/scripts/" },
  ts: { src: "src/**/*.ts", dest: "dist/scripts/" },
  asset: { src: "src/assets/**/*", dest: "dist/assets/" }
};


/**
 * Task to clean the output/destination path
 * All the tasks must return either a promise, a stream or take a callback and call it
 */
function clean() {
  return del(["dist"]);
}


/**
 * Task to minify all HTML pages
 */
function html() {
  return gulp.src([paths.html.src])
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest(paths.html.dest));
}


/**
 * Task to minify all CSS files
 */
function css() {
  return gulp.src(paths.css.src)
    .pipe(csso())
    .pipe(autoprefixer())
    .pipe(concat("css-bundle.css"))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(paths.css.dest));
}


/**
 * Task to minify all SCSS files
 */
function sass() {
  return gulp.src(paths.scss.src)
    .pipe(scss().on("error", scss.logError))
    .pipe(csso())
    .pipe(autoprefixer())
    .pipe(concat("scss-bundle.css"))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(paths.scss.dest));
}


/**
 * Task to minify all JS files
 */
function js() {
  return gulp.src(paths.js.src)
    .pipe(concat("js-bundle.js"))
    .pipe(babel())
    .pipe(uglify())
    .pipe(terser({
      compress: true,
      mangle: {
        toplevel: true,
        reserved: ["initJs"]
      }
    }))
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(gulp.dest(paths.js.dest));
}


/**
 * Task to concat & put all JS files at the destination without minifying for debugging purpose
 */
function jsDev() {
  return gulp.src(paths.js.src)
    .pipe(concat("js-bundle.min.js"))
    .pipe(gulp.dest(paths.js.dest));
}


/**
 * Task to minify all TS files
 */
function ts() {
  return gulp.src(paths.ts.src)
    .pipe(concat("ts-bundle.ts"))
    .pipe(typescript({
      noImplicitAny: true,
      outFile: 'ts-bundle.js'
    }))
    .pipe(babel())
    .pipe(uglify())
    .pipe(terser({
      compress: true,
      mangle: {
        toplevel: true,
        reserved: ["initTs"]
      }
    }))
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(gulp.dest(paths.js.dest));
}


/**
 * Task to concat & put all TS files at the destination without minifying for debugging purpose
 */
function tsDev() {
  return gulp.src(paths.ts.src)
    .pipe(concat("ts-bundle.ts"))
    .pipe(typescript({
      noImplicitAny: true,
      outFile: 'ts-bundle.min.js'
    }))
    .pipe(gulp.dest(paths.js.dest));
}


/**
 * Task to copy all the asset files & put it in the destination assets folder
 */
function assets() {
  del(["dist/assets"]);
  return gulp.src(paths.asset.src)
    .pipe(gulp.dest(paths.asset.dest));
}


/**
 * Task to watch files changes in the mentioned directories
 * Also reload the browser if any change in the files detected
 */
function watch() {
  browserSync.init({
    server: { baseDir: "dist", index: "/index.html" }
  });
  gulp.watch(paths.js.src, jsDev);
  gulp.watch(paths.ts.src, tsDev);
  gulp.watch(paths.css.src, css);
  gulp.watch(paths.scss.src, sass);
  gulp.watch(paths.html.src, html);
  gulp.watch(paths.asset.src, assets);
  gulp.watch("dist/**/*").on("change", browserSync.reload);
}


/**
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 * Those tasks can be called by just running `gulp taskname` from cli
 */
var build = gulp.series(clean, gulp.parallel(html, css, sass, js, ts, assets));
var dev = gulp.series(clean, gulp.parallel(html, css, sass, jsDev, tsDev, assets));


/**
 * Declaring all the tasks
 */
exports.clean = clean;
exports.html = html;
exports.css = css;
exports.sass = sass;
exports.js = js;
exports.jsdev = jsDev;
exports.tsdev = tsDev;
exports.watch = watch;
exports.build = build;
exports.dev = dev;


/*
 * Defining a default task that can be called by just running `gulp` from cli
 */
exports.default = build;