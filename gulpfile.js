const { src, dest, watch, series } = require("gulp");
const concat = require("gulp-concat");
const sass = require("gulp-sass")(require("sass"));
const pug = require("gulp-pug");
const livereload = require("gulp-livereload");
const sourcemaps = require("gulp-sourcemaps");
const minify = require("gulp-minify");
const autoPrefixer = require("gulp-autoprefixer");
const terser = require('gulp-terser');

function htmlTask() {
    return src("stage/html/*.pug")
    .pipe(
    pug({
        pretty: true,
})
    )
    .pipe(dest("dist"))
    .pipe(livereload());
}

function cssTask() {
    return src(["stage/css/**/*.css", "stage/css/**/*.scss"])
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoPrefixer())
    .pipe(concat("main.css"))
    .pipe(sourcemaps.write("."))
    .pipe(dest("dist/css"))
    .pipe(livereload());
}

function jsTask() {
    return src("stage/js/*.js")
    .pipe(sourcemaps.init())
    .pipe(concat("main.js"))
    .pipe(terser())
    .pipe(sourcemaps.write("."))
    .pipe(dest("dist/js"))
    .pipe(livereload());
}

//watch tasks
function watchTask() {
    require("./server.js");
    livereload.listen();
    watch("stage/html/**/*.bug", htmlTask);
    watch(["stage/css/**/*.css", "stage/css/**/*.scss"], cssTask);
    watch("stage/js/*.js", jsTask);
}

exports.default = series(
    htmlTask,
    cssTask,
    jsTask,
    watchTask
);
