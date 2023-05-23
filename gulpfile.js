const {parallel, watch, src, dest, series} = require('gulp'),
      sass = require('gulp-sass')(require('sass')),
      cssMinify = require('gulp-css-minify'),
      concat = require('gulp-concat')     

let css = () => {
    return src('./src/assets/scss/**/*.scss')
    .pipe(concat('main.scss'))
    .pipe(sass())
    .pipe(cssMinify())
    .pipe(concat('main.css'))
    .pipe(dest('./src/assets/css'))
}

let serve =  series( css,() => {
    watch('./src/assets/scss/**/*.scss', css);
})

  
exports.serve = serve;
exports.default = parallel(css);