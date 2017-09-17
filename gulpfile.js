var gulp = require( 'gulp' );
    sass = require( 'gulp-sass' ),
    vender = require( 'gulp-autoprefixer' ),
    cleancss = require( 'gulp-clean-css' ),
    sourcemaps = require( 'gulp-sourcemaps' ),
    rename = require( 'gulp-rename' ),
    plumber = require( 'gulp-plumber' ),
    rigger = require( 'gulp-rigger' ),
    uglify = require( 'gulp-uglify' ),
    concat = require( 'gulp-concat' );

function script() {
return gulp.src( 'app/js/jScript/*.js' )
           .pipe( concat( 'common.js' ) )
           .pipe( uglify() )
           .pipe( rename({ suffix : '.min' }) )
           .pipe( gulp.dest( 'dist/js/' ) )
}

function jquery() {
    return gulp.src( 'app/js/jquery/*.js' )
               .pipe( concat( 'jQuery.js' ) )
               .pipe( uglify() )
               .pipe( rename({ suffix : '.min' }) )
               .pipe( gulp.dest( 'dist/js/' ) )
}

function styles() {

return gulp.src( 'app/sass/*.scss' )
           .pipe( sourcemaps.init() )
           .pipe( sass() )
           .pipe( vender() )
           .pipe( cleancss() )
           .pipe( rename({

           basename : 'styles',
           suffix : '.min'

           }) )
           .pipe( plumber() )
           .pipe( sourcemaps.write() )
           .pipe( gulp.dest( 'dist/css/' ) );

};    

function htmlbuild() {

return gulp.src( 'app/*.html' )
           .pipe( rigger() )
           .pipe( gulp.dest( 'dist/' ) );   

};

function watch() {
    gulp.watch( 'app/sass/**/*.scss', styles );
    gulp.watch( 'app/**/*.html', htmlbuild );
    gulp.watch( 'app/js/jScript/*.js', script );
    gulp.watch( 'app/js/jquery/*.js', jquery );
};

exports.styles = styles;
exports.htmlbuild = htmlbuild;
exports.script = script;
exports.jquery = jquery;
exports.watch = watch;