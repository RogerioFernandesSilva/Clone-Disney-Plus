const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); // Exemplo se estiver usando SASS

// Definindo a tarefa 'styles'
gulp.task('styles', function() {
    return gulp.src('src/styles/*.scss') // Caminho dos seus arquivos de estilo
        .pipe(sass().on('error', sass.logError)) // Compila SASS para CSS
        .pipe(gulp.dest('dist/css')); // Pasta de destino
});

// Definindo a tarefa 'watch'
exports.watch = function() {
    gulp.watch('src/styles/*.scss', gulp.series('styles'));
};