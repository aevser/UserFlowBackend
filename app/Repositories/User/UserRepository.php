<?php

namespace App\Repositories\User;

use App\Constants\SortAndPaginate;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Carbon;

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

    public function deleteOlderThanMinutes(int $minutes): bool
    {
        $time = Carbon::now()->subMinutes($minutes);

        return $this->user->query()
            ->where('created_at', '<=', $time)
            ->delete();
    }
}
