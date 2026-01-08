<?php

namespace App\Services;

use Illuminate\Http\JsonResponse;

class JsonResponseService
{
    public function success(int $code, mixed $data, ?string $message = null, mixed $meta = []): JsonResponse
    {
        $response = ['code' => $code];

        if ($data !== null)
        {
            $response['data'] = $data;
        }

        if ($message !== null)
        {
            $response['message'] = $message;
        }

        if (!empty($meta))
        {
            $response['meta'] = $this->prepareMeta(data: $meta);
        }

        return response()->json
        (
            $response,
            $code
        );
    }

    private function prepareMeta(mixed $data): array
    {
        return [
            'total' => $data->total(),
            'per_page' => $data->perPage(),
            'current_page' => $data->currentPage()
        ];
    }
}
