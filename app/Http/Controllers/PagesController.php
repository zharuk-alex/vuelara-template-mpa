<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Route;

class PagesController extends Controller
{
    //
    public function dashboard(Request $request){
        $data = array(
            "aside" => $this->aside($request),
            "navbar" => $this->navbar(),
            "title" => "Dashboard"
        );
        // dd($data);
        return view('pages.dashboard', $data);
    }

    public function reportsPage(Request $request)
    {
        
        $data = [
            "aside" => $this->aside($request),
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
            "aside" => $this->aside($request),
            "navbar" => $this->navbar(),
            "data" => [
                "title" => "Form Axios",
                "subtitle" => "Example send formData to Controller using Axios "
            ]
        ];

        // dd($data);
        return view('pages.axios-example', $data);
    }

    public function aboutPage(Request $request){
        $data = array(
            "aside" => $this->aside($request),
            "navbar" => $this->navbar(),
            "data" => [
                "title" => "about Page",
                "subtitle" => "Long page descriptions description Lorem Ipsum"
            ]
        );
        
        return view('pages.about', $data);
    }

    public function login(){
        $data = array(
            "title" => "Welcome"
        );
        
        return view('pages.auth.login', $data);
    }

    public function welcomePage(Request $request){
        $data = array(
            "aside" => $this->aside($request),
            "navbar" => $this->navbar(),
            "title" => "Welcome"
        );
        
        return view('pages.welcome', $data);
    }

    // 
    protected function aside($request){
        $aside = [
            ["title"=>"Dashboard", "url"=>"/", "icon" => "mdi-view-dashboard"], 
            ["title"=>"Welcome", "url"=>"/welcome", "icon" => "mdi-list"], 
            ["title"=>"About", "url"=>"/about", "icon" => "mdi-help-box"], 
            ["title"=>"Reports", "url"=>"/reports", "icon" => ""],
            ["title"=>"Axios formData", "url"=>"/axios", "icon" => ""],
        ];
        foreach ($aside as $key => $link) {
            if($link['url'] == '/'.$request->path()){
                $aside[$key]['active'] = true;
                // dd($link);
            }
        } 

        return $aside;
    }

    protected function navbar(){
        return array(
            "brandName" => "brandName"
        );
    }
}
