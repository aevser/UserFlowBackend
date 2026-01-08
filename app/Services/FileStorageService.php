<?php

namespace App\Services;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Str;

class FileStorageService
{
    private const string DIRECTORY = 'avatars';
    private const string DICK = 'public';

    public function store(UploadedFile $file, string $directory = self::DIRECTORY, string $disk = self::DICK): string
    {
        $fileName = $this->generateName(file: $file);

        $path = $file->storeAs
        (
            $directory,
            $fileName,
            $disk
        );

        return $path;
    }

    private function generateName(UploadedFile $file): string
    {
        return Str::uuid() . '.' . $file->getClientOriginalExtension();
    }
}
