<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1;

Route::prefix('v1')->group(function () {

    Route::get('users', [V1\User\UserController::class, 'index']);

    Route::post('registration', [V1\User\UserController::class, 'registration']);
});
