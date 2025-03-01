<?php

use App\Http\Controllers\AIController;
use App\Http\Controllers\MarketPulseController;
use App\Http\Controllers\PlanController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('/plans', [PlanController::class, 'index'])->name('plans');

    Route::get('/market-pulse', [MarketPulseController::class, 'index'])->name('market.pulse');

    Route::get('/ai-analysis', [AIController::class, 'index'])->name('ai.analysis');
    
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
