<?php

namespace Database\Seeders\User;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 0; $i <= 11; $i++)
        {
            for ($i = 0; $i <= 11; $i++) {
                User::query()->create([
                    'nickname' => 'User' . $i,
                    'avatar' => 'avatars/6.png'
                ]);
            }
        }
    }
}
