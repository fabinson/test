const gulp = require("gulp"),
      pug = require("gulp-pug")
      watch = require("gulp-watch")
      

gulp.task("pug", () => {
  
    gulp.src("./src/pug/index.pug")
    .pipe(pug())
    .pipe(gulp.dest("./"))
    
  })
  
  gulp.watch(["./src/pug/index.pug"], ["pug"])

