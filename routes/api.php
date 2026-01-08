<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1;

Route::prefix('v1')->group(function () {
    Route::middleware('throttle:60,1')->group(function () {

        Route::apiResource('users',
            V1\User\UserController::class)
            ->only(['index', 'store']);

    });

});
