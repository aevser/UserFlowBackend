<?php

namespace App\Repositories\User;

use App\Constants\SortAndPaginate;
use App\Models\User;
use Illuminate\Pagination\LengthAwarePaginator;

class UserRepository
{
    public function __construct(private User $user){}

    public function getAll(array $filters): LengthAwarePaginator
    {
        return $this->user->query()
            ->orderBy(SortAndPaginate::SORT_ID_COLUMN, SortAndPaginate::SORT_DESC)
            ->paginate($filters['perPage'] ?? SortAndPaginate::PER_PAGE);
    }

    public function create(string $nickname, ?string $avatar): User
    {
        return $this->user->query()->create
        (
            [
                'nickname' => $nickname,
                'avatar' => $avatar
            ]
        );
    }
}
