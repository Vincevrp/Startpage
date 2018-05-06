const
    gulp = require("gulp"),
    minifyHTML = require("gulp-htmlmin"),
    sass = require("gulp-sass"),
    minifyJS = require("gulp-minify"),
    ncp = require("ncp");

const
    outputDir = "./build/";

gulp.task("minifyHTML", () => {
    return gulp.src("views/*.html")
        .pipe(minifyHTML({
            removeComments: true,
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            removeAttributeQuotes: true,
            removeEmptyAttributes: true,
            minifyJS: true
        }))
        .pipe(gulp.dest(outputDir));
});

gulp.task("sass", () => {
    gulp.src("./sass/*.scss")
        .pipe(sass({
            outputStyle: "compressed"
        }))
        .pipe(gulp.dest(outputDir+"css"));
});

gulp.task("minifyJS", () => {
    gulp.src("./scripts/*.js")
        .pipe(minifyJS({
            ext: {
                min: ".js",
            },
            noSource: true
        }))
        .pipe(gulp.dest(outputDir+"js"));
});

gulp.task("initStatic", () => {
    ncp("./public/", outputDir, function (err) {
        if (err == null) { return null; }
        return console.log(err);
    });
});

gulp.task("default", ["minifyHTML", "sass", "minifyJS", "initStatic"]);
