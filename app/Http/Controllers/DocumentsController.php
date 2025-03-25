<?php

namespace App\Http\Controllers;

use App\Http\Requests\DocumentStoreRequest;
use App\Http\Requests\DocumentUpdateRequest;
use App\Http\Resources\DocumentCollection;
use App\Http\Resources\DocumentResource;
use App\Models\Document;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;
use Inertia\Response;


use Illuminate\Contracts\Filesystem\Filesystem;
use Illuminate\Http\Request as HttpRequest;
use League\Glide\Responses\SymfonyResponseFactory;
use League\Glide\ServerFactory;

class DocumentsController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Documents/Index', [
            'filters' => Request::all('search', 'trashed'),
            'documents' => new DocumentCollection(
                Auth::user()->account->documents()
                    ->orderBy('created_at')
                    ->filter(Request::only('search', 'trashed'))
                    ->paginate()
                    ->appends(Request::all())
            ),
            'user' => Auth::user(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Documents/Create');
    }

    public function store(DocumentStoreRequest $request): RedirectResponse
    {
        $user = Auth::user()->account->documents()->create(
            $request->validated()
        );
        if ($request->hasFile('document_unique_name')) {
            $user->update([
                'document_unique_name' => $request->file('document_unique_name')->store('documents'),
                'updated_at' => null,
            ]);
        }

        return Redirect::route('documents')->with('success', 'Document created.');
    }

    public function edit(Document $document): Response
    {
        return Inertia::render('Documents/Edit', [
            'document' => new DocumentResource($document),
        ]);
    }

    public function update(Document $document, DocumentUpdateRequest $request): RedirectResponse
    {
        //Check is all value needed to update is validated
        

        
        $document->update(
            $request->validated()
        );
         
        if ($request->hasFile('document_unique_name')) { 
            $document->update([
                'document_unique_name' => $request->file('document_unique_name')->store('documents'),
            ]);
        }

        //Add update
        $update = $document->updates()->create([
            'account_id' => Auth::user()->account->id,
            'document_id' => $document->id,
            'status' => 'notarized',
            'message' => 'Your document have been notarized.',
        ]);

        return Redirect::back()->with('success', 'Document updated.');
    }

    public function destroy(Document $document): RedirectResponse
    {
        $document->delete();

        return Redirect::back()->with('success', 'Document deleted.');
    }

    public function restore(Document $document): RedirectResponse
    {
        $document->restore();

        return Redirect::back()->with('success', 'Document restored.');
    }

    public function show(Filesystem $filesystem, HttpRequest $request, $path)
    {
        $server = ServerFactory::create([
            'response' => new SymfonyResponseFactory($request),
            'source' => $filesystem->getDriver(),
            'cache' => $filesystem->getDriver(),
            'cache_path_prefix' => '.glide-cache',
        ]);

        $extension = pathinfo($path, PATHINFO_EXTENSION);

        if (in_array(strtolower($extension), ['jpg', 'jpeg', 'png', 'gif'])) {
            return $server->getImageResponse($path, $request->all());
        }

        if (in_array(strtolower($extension), ['pdf', 'doc', 'docx'])) {
            $stream = $filesystem->readStream($path);

            return response()->stream(function () use ($stream) {
            fpassthru($stream);
            }, 200, [
            'Content-Type' => $filesystem->mimeType($path),
            'Content-Disposition' => 'inline; filename="' . basename($path) . '"',
            ]);
        }

        abort(404, 'File type not supported.');
    }
}
