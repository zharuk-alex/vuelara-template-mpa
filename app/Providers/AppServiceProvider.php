<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\View;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\Navbar;
use Illuminate\Http\Request;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(Request $request)
    {
        //
        Schema::defaultStringLength(191);
        // 
        $aside = new MenuController;
        View::share('aside', $aside->aside($request));
        // 
        $navbar = new Navbar;
        View::share('navbar', $navbar->index());
    }
}
