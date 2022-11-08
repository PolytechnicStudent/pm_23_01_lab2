const { src, dest, series } = require("gulp");

function html() {
  return src("*.html")
  .pipe(dest("build/"));
}

function img() {
  return src("**/img/*.{png,jpg,jpeg,gif}",)
  .pipe(dest("build/"));
}

function css() {
  return src("**/css/*.css")
  .pipe(dest("build/"));
}
exports.build = series(html, img, css);
