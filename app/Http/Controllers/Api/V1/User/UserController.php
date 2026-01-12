<?php

namespace App\Http\Controllers\Api\V1\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\V1\User\CreateUserRequest;
use App\Http\Requests\V1\User\IndexUserRequest;
use App\Http\Resources\IndexUserResource;
use App\Http\Resources\ShowUserResource;
use App\Repositories\User\UserRepository;
use App\Services\JsonResponseService;
use App\Services\User\UserService;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Redis;

class UserController extends Controller
{
    public function __construct
    (
        private UserRepository $userRepository,
        private UserService $userService,
        private JsonResponseService $jsonResponseService
    ){}

    public function index(IndexUserRequest $request): JsonResponse
    {
        $users = $this->userRepository->getAll(filters: $request->validated());

        return $this->jsonResponseService->success
        (
            code: JsonResponse::HTTP_OK,
            data: IndexUserResource::collection($users),
            meta: $users
        );
    }

    public function store(CreateUserRequest $request): JsonResponse
    {
        $user = $this->userService->create
        (
            nickname: $request->validated('nickname'),
            avatar: $request->file('avatar')
        );

        Redis::setex('User: ' . $user->id, 3600, json_encode($user->toArray()));

        return $this->jsonResponseService->success
        (
            code: JsonResponse::HTTP_CREATED,
            data: ShowUserResource::make($user),
            message: __('messages.user_created')
        );
    }
}
