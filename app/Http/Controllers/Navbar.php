<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Navbar extends Controller
{
    public function index(){
        return [
            "navbarProp" => "someValue"
        ];
    }
}
