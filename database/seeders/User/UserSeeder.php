<?php

namespace Database\Seeders\User;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Storage;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        $file = public_path('img/avatars/6.png');
        $directory = 'img/avatars';
        $storageFile = '6.png';

        if (!Storage::disk('public')->exists("$directory/$storageFile"))
        {
            Storage::disk('public')->putFileAs($directory, $file, $storageFile);
        }

        for ($i = 1; $i <= 11; $i++) {
            User::query()->create
            (
                [
                    'nickname' => 'User' . $i,
                    'avatar' => "$directory/$storageFile"
                ]
            );
        }
    }
}
