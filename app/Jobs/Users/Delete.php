<?php

namespace App\Jobs\Users;

use App\Repositories\User\UserRepository;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;

class Delete implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    public function __construct(private int $minutes){}

    /**
     * Execute the job.
     */
    public function handle(UserRepository $userRepository): void
    {
        $userRepository->deleteOlderThanMinutes($this->minutes);
    }
}
