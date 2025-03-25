<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class DocumentUpdateCollection extends ResourceCollection
{
    public function toArray($request)
    {
        return $this->collection->map->only('id', 'document_name');
    }
}
