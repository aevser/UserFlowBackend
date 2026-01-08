<?php

namespace App\Services\User;

use App\Models\User;
use App\Repositories\User\UserRepository;
use App\Services\FileStorageService;
use Illuminate\Http\UploadedFile;

class UserService
{
    public function __construct
    (
        private UserRepository $userRepository,
        private FileStorageService $fileStorageService
    ){}

    public function create(string $nickname, ?UploadedFile $avatar): User
    {
        $path = null;

        if ($avatar !== null)
        {
            $path = $this->fileStorageService->store(file: $avatar);
        }

        return $this->userRepository->create
        (
            nickname: $nickname,
            avatar: $path
        );
    }
}
