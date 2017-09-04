var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );
var vender = require( 'gulp-autoprefixer' );
var cleancss = require( 'gulp-clean-css' );
var sourcemaps = require( 'gulp-sourcemaps' );
var rename = require( 'gulp-rename' );
var plumber = require( 'gulp-plumber' );
var rigger = require( 'gulp-rigger' );
var watch = require( 'gulp-watch' );

gulp.task( 'sass', function () {

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

});

gulp.task( 'rigger', function () {

return gulp.src( 'app/*.html' )
           .pipe( rigger() )
           .pipe( gulp.dest( 'dist/' ) );   

});

gulp.task( 'watch', function () {

    watch( 'app/sass/**/*.scss', function () {

        setTimeout( function () {

            gulp.start( 'sass' );

        }, 500);

    });

    watch( 'app/**/*.html', function () {

        gulp.start( 'rigger' );

    });

});