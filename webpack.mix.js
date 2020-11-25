const mix = require('laravel-mix');
// const path = require('path');
require('laravel-mix-alias');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
// mix.webpackConfig({
//   resolve: {
//     extensions: ['.js', '.vue', '.json'],
//     alias: {
//       'vue$': 'vue/dist/vue.esm.js',
//       // '@': __dirname + '/resources/js'
//       '@': path.resolve('/resources/js')
//     },
//   },
// })
// require('laravel-mix-alias');
mix.alias('@', '/resources/js');
mix.js('resources/js/app.js', 'public/js');

// mix.sass('resources/scss/app.scss', 'public/css').sourceMaps();
mix.sass('resources/scss/app.scss', 'public/css');
mix.browserSync(
    'localhost:8000'
);


