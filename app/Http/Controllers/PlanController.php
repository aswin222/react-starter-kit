<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Plan;
use Inertia\Inertia;

class PlanController extends Controller
{
    public function index()
    {
        $plans = Plan::select('id', 'name', 'description', 'current_amount')->get();

        return Inertia::render('plans', [
            'plans' => $plans
        ]);
    }
}
