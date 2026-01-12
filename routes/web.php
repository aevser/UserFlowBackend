<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers;

Route::get('users', [Controllers\User\UserController::class, 'index'])->name('users.index');

