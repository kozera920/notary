<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateStoreRequest;
use App\Http\Requests\UpdateUpdateRequest;
use App\Http\Resources\UpdateCollection;
use App\Http\Resources\UpdateResource;
use App\Http\Resources\DocumentUpdateCollection;
use App\Models\Update;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;
use Inertia\Response;

class UpdatesController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Updates/Index', [
            'filters' => Request::all('search', 'trashed'),
            'updates' => new UpdateCollection(
                Auth::user()->account->updates()
                    ->with('document')
                    ->orderByName()
                    ->filter(Request::only('search', 'trashed'))
                    ->paginate()
                    ->appends(Request::all()),
            )
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Updates/Create', [
            'documents' => new DocumentUpdateCollection(
                Auth::user()->account->documents()
                    ->orderBy('document_name')
                    ->get()
            ),
        ]);
    }

    public function store(UpdateStoreRequest $request): RedirectResponse
    {
        Auth::user()->account->updates()->create(
            $request->validated()
        );

        return Redirect::route('updates')->with('success', 'Update created.');
    }

    public function edit(Update $update): Response
    {
        return Inertia::render('Updates/Edit', [
            'update' => new UpdateResource($update),
            'documents' => new DocumentUpdateCollection(
                Auth::user()->account->documents()
                    ->orderBy('document_name')
                    ->get()
            ),
        ]);
    }

    public function update(Update $update, UpdateUpdateRequest $request): RedirectResponse
    {
        $update->update(
            $request->validated()
        );

        return Redirect::back()->with('success', 'Update updated.');
    }

    public function destroy(Update $update): RedirectResponse
    {
        $update->delete();

        return Redirect::back()->with('success', 'Update deleted.');
    }

    public function restore(Update $update): RedirectResponse
    {
        $update->restore();

        return Redirect::back()->with('success', 'Update restored.');
    }
}
