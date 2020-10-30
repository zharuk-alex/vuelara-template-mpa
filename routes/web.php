<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/welcome', function () {
//     return view('welcome');
// });

Route::get('/', 'App\Http\Controllers\PagesController@dashboard');
Route::get('/welcome', 'App\Http\Controllers\PagesController@welcomePage');
Route::get('/reports', 'App\Http\Controllers\PagesController@reportsPage');
Route::get('/about', 'App\Http\Controllers\PagesController@aboutPage');
