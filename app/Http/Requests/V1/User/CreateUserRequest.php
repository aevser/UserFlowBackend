<?php

namespace App\Http\Requests\V1\User;

use Illuminate\Foundation\Http\FormRequest;

class CreateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nickname' => [
                'required',
                'string',
                'min:3',
                'max:50',
                'unique:users,nickname',
                'regex:/^[a-zA-Z0-9_-]+$/',
            ],
            'avatar' => [
                'nullable',
                'file',
                'image',
                'mimes:jpeg,jpg,png,gif,webp',
                'mimetypes:image/jpeg,image/png,image/gif,image/webp',
                'max:2048'
            ],
        ];
    }

    public function messages(): array
    {
        return [
            'nickname.required' => __('validations.users.nickname.required'),
            'nickname.string' => __('validations.users.nickname.string'),
            'nickname.min' => __('validations.users.nickname.min'),
            'nickname.max' => __('validations.users.nickname.max'),
            'nickname.unique' => __('validations.users.nickname.unique'),
            'nickname.regex' => __('validations.users.nickname.regex'),

            'avatar.file' => __('validations.users.avatar.file'),
            'avatar.image' => __('validations.users.avatar.image'),
            'avatar.mimes' => __('validations.users.avatar.mimes'),
            'avatar.mimetypes' => __('validations.users.avatar.mimetypes'),
            'avatar.max' => __('validations.users.avatar.max')
        ];
    }
}
