const gulp = require ("gulp");
const imagemin = require ("gulp-imagemin");
const uglify = require ("gulp-uglify");
const obfuscate = require ("gulp-obfuscate");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");


function minificationimg(){
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}

function javascript (){
    return gulp.src("./source/script/*js")
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest("./build/script"))
}

function compilasass (){
    return gulp.src("./source/style/main.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: "compressed"}))
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("./build/style"))
}

exports.default = function() {
    gulp.watch("./source/images/*", {ignoreInitial:false}, gulp.series(minificationimg));
    gulp.watch("./source/script/*js", {ignoreInitial:false}, gulp.series(javascript));
    gulp.watch("./source/style/main.scss", {ignoreInitial:false}, gulp.series(compilasass));
}