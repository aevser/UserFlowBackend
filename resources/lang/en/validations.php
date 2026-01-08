<?php

return [
    'users' => [
        'nickname' => [
            'required' => 'The nickname field is required.',
            'string' => 'The nickname must be a string.',
            'min' => 'The nickname must contain at least :min characters.',
            'max' => 'The nickname may not be greater than :max characters.',
            'unique' => 'A user with this nickname already exists.',
            'regex' => 'The nickname may contain only Latin letters, numbers, hyphens, and underscores.',
        ],
        'avatar' => [
            'file' => 'The avatar must be a file.',
            'image' => 'The avatar must be an image.',
            'mimes' => 'The avatar must be a file of type: JPEG, PNG, GIF, or WebP.',
            'mimetypes' => 'Invalid MIME type. Only image files are allowed.',
            'max' => 'The avatar size must not exceed 2 MB.'
        ]
    ],

    'perPage.integer' => 'The number of items per page must be an integer.',
    'perPage.min' => 'The minimum number of items per page is 1.',
    'perPage.max' => 'The maximum number of items per page is 100.',

    'page.integer' => 'The page number must be an integer.',
    'page.min' => 'The page number must be greater than 0.'
];
