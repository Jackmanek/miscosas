<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DawController extends Controller
{
    public function daw()
    {
    
        return view('pages.daw',[]);
    }
}
