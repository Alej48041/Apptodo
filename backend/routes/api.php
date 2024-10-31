<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\TaskController;

// Definir las rutas API
Route::apiResource('categories', CategoryController::class);
Route::apiResource('tasks', TaskController::class);
