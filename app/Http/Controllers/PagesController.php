<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\MenuController;

class PagesController extends Controller
{
    //
    protected function AsideMenu($request)
    {
        $aside = new MenuController;
        return $aside->aside($request);
    }

    public function dashboard(Request $request)
    {
        
        $data = array(
            "aside" =>  $this->AsideMenu($request),
            "navbar" => $this->navbar(),
            "title" => "Dashboard"
        );
        return view('pages.dashboard', $data);
    }

    public function reportsPage(Request $request)
    {
        
        $data = [
            "aside" =>  $this->AsideMenu($request),
            "navbar" => $this->navbar(),
            "data" => [
                "title" => "Reports Page",
                "subtitle" => "Some data from PagesController"
            ]
        ];

        // dd($data);
        return view('pages.reports', $data);
    }

    public function formAxiosPage(Request $request)
    {
        
        $data = [
            "aside" =>  $this->AsideMenu($request),
            "navbar" => $this->navbar(),
            "data" => [
                "title" => "Form Axios",
                "subtitle" => "Example send formData to Controller using Axios "
            ]
        ];

        // dd($data);
        return view('pages.axios-example', $data);
    }

    public function aboutPage(Request $request)
    {
        $data = array(
            "aside" =>  $this->AsideMenu($request),
            "navbar" => $this->navbar(),
            "data" => [
                "title" => "about Page",
                "subtitle" => "Long page descriptions description Lorem Ipsum"
            ]
        );
        
        return view('pages.about', $data);
    }

    public function welcomePage(Request $request)
    {
        $data = array(
            "aside" =>  $this->AsideMenu($request),
            "navbar" => $this->navbar(),
            "title" => "Welcome"
        );
        
        return view('pages.welcome', $data);
    }

    // 

    protected function navbar(){
        return array(
            "brandName" => "brandName"
        );
    }
}
