<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AIController extends Controller
{
    public function index(){


        return Inertia::render('ai-analysis', [
            'data' => null,
        ]);
    }
}
