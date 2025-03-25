<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DocumentStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'document_name' => ['nullable', 'max:20000'],
            'document_unique_name' => ['nullable', 'mimes:jpeg,png,jpg,gif,svg,pdf,doc,docx', 'max:20000'],
        ];
    }
}
