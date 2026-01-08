<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Repositories\User\UserRepository;
use Illuminate\View\View;

class UserController extends Controller
{
    public function __construct(private UserRepository $userRepository){}

    public function index(): View
    {
        $users = $this->userRepository->getAll();

        return view('users.index', compact('users'));
    }
}
