let mix = require('laravel-mix');

mix.options({
    processCssUrls: false
});

mix.js('assets/js/app.js', 'public/js/')
   .sass('assets/scss/app.scss', 'public/css/');
