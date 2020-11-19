<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Route;


class PagesController extends Controller
{

    public function dashboard(Request $request)
    {
        
        $data = array(
            "title" => "Dashboard"
        );
        return view('pages.dashboard', $data);
    }

    public function reportsPage(Request $request)
    {
        
        $data = [
            "title" => "Reports Page",
            "data" => [
                
                "subtitle" => "Some data from PagesController"
            ]
        ];

        // dd($data);
        return view('pages.reports', $data);
    }

    public function formAxiosPage(Request $request)
    {
        $data = [
            "title" => "Students",
            "data" => [
                "subtitle" => "Example send formData to Controller using Axios "
            ]
        ];
        return view('pages.students', $data);
    }

    public function aboutPage(Request $request)
    {
        $data = array(
            "title" => "about Page",
            "data" => [
                "subtitle" => "Long page descriptions description Lorem Ipsum"
            ]
        );
        
        return view('pages.about', $data);
    }

    public function welcomePage(Request $request)
    {
        $data = array(
            "title" => "Welcome"
        );
        
        return view('pages.welcome', $data);
    }

    // 
}
