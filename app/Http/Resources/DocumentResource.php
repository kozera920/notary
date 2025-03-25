<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class DocumentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'document_name' => $this->document_name,
            'document_unique_name' => $this->document_unique_name ? url()->route('document', ['path' => $this->document_unique_name]) : null,
            'created_at' => $this->created_at,
            'updates' => $this->updates()->orderBy('created_at', 'desc')->get()->map->only('id', 'status', 'message', 'created_at'),
            'deleted_at' => $this->deleted_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
