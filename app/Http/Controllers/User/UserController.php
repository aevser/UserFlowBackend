<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\V1\User\IndexUserRequest;
use App\Repositories\User\UserRepository;
use Illuminate\View\View;

class UserController extends Controller
{
    public function __construct(private UserRepository $userRepository){}

    public function index(IndexUserRequest $request): View
    {
        $users = $this->userRepository->getAll(filters: $request->validated());

        return view('users.index', compact('users'));
    }
}
