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

Route::get('menus','App\Http\Controllers\MenuController@index');
Route::post('menus', 'App\Http\Controllers\MenuController@store')->name('menus.store');
Route::post('menus/update/{id}', 'App\Http\Controllers\MenuController@update');
Route::post('menus/destroy/{id}', 'App\Http\Controllers\MenuController@destroy');
Route::post('menus/orderupdate', 'App\Http\Controllers\MenuController@orderupdate');
// Route::resource('menus', 'App\Http\Controllers\MenuController');

// pages
Route::get('/', 'App\Http\Controllers\PagesController@dashboard');
Route::get('login', 'App\Http\Controllers\PagesController@login');
Route::get('welcome', 'App\Http\Controllers\PagesController@welcomePage');
Route::get('reports', 'App\Http\Controllers\PagesController@reportsPage');
Route::get('about', 'App\Http\Controllers\PagesController@aboutPage');
Route::get('axios', 'App\Http\Controllers\PagesController@formAxiosPage');
Route::resource('students', 'App\Http\Controllers\StudentController');
