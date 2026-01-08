<?php

namespace App\Http\Requests\V1\User;

use Illuminate\Foundation\Http\FormRequest;

class IndexUserRequest extends FormRequest
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
            'perPage' => ['nullable', 'integer', 'min:1', 'max:100'],
            'page' => ['nullable', 'integer', 'min:1']
        ];
    }

    public function messages(): array
    {
        return [
            'perPage.integer' => __('validations.perPage.integer'),
            'perPage.min' => __('validations.perPage.min'),
            'perPage.max' => __('validations.perPage.max'),

            'page.integer' => __('validations.page.integer'),
            'page.min' => __('validations.page.min')
        ];
    }
}
