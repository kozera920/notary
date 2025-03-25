<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class GetStartedController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('GetStart/Index');
    }
}
