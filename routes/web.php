<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\ContactsController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ImagesController;
use App\Http\Controllers\OrganizationsController;
use App\Http\Controllers\ReportsController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\DocumentsController;
use App\Http\Controllers\GetStartedController;
use App\Http\Controllers\UpdatesController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Landing
Route::get('home', [LandingController::class, 'home'])
    ->name('home');
Route::get('how-it-works', [LandingController::class, 'howItWorks'])
    ->name('how-it-works');
Route::get('pricing', [LandingController::class, 'pricing'])
    ->name('pricing');
Route::get('contact', [LandingController::class, 'contact'])
    ->name('contact');
Route::get('faqs', [LandingController::class, 'faqs'])
    ->name('faqs');
Route::get('about-us', [LandingController::class, 'aboutUs'])
    ->name('about-us');
Route::get('privacy-policy', [LandingController::class, 'privacyPolicy'])
    ->name('privacy-policy');
Route::get('terms-of-service', [LandingController::class, 'termsOfService'])
    ->name('terms-of-service');
Route::get('book-appointment', [LandingController::class, 'bookAppointment'])
    ->name('book-appointment');
Route::post('send-appointment', [LandingController::class, 'sendAppointToEmail'])
    ->name('appointment.send');



// Auth

Route::get('login', [LoginController::class, 'create'])
    ->name('login')
    ->middleware('guest');

Route::post('login', [LoginController::class, 'store'])
    ->name('login.store')
    ->middleware('guest');

Route::get('signup', [LoginController::class, 'signup'])
    ->name('signup')
    ->middleware('guest');
Route::post('signup', [LoginController::class, 'register'])
    ->name('signup.register')
    ->middleware('guest');


Route::delete('logout', [LoginController::class, 'destroy'])
    ->name('logout');

// Dashboard

Route::get('/', fn() => redirect(Auth::check() ? route('dashboard') : route('home')))
    ->name('dashboard.redirect');
Route::get('/dashboard', [DashboardController::class, 'index'])
    ->name('dashboard')
    ->middleware('auth');

//Get started
Route::get('get-started', [GetStartedController::class, 'index'])
    ->name('get-started')
    ->middleware('auth');

// Users

Route::get('users', [UsersController::class, 'index'])
    ->name('users')
    ->middleware('auth');

Route::get('users/create', [UsersController::class, 'create'])
    ->name('users.create')
    ->middleware('auth');

Route::post('users', [UsersController::class, 'store'])
    ->name('users.store')
    ->middleware('auth');

Route::get('users/{user}/edit', [UsersController::class, 'edit'])
    ->name('users.edit')
    ->middleware('auth');

Route::put('users/{user}', [UsersController::class, 'update'])
    ->name('users.update')
    ->middleware('auth');

Route::delete('users/{user}', [UsersController::class, 'destroy'])
    ->name('users.destroy')
    ->middleware('auth');

Route::put('users/{user}/restore', [UsersController::class, 'restore'])
    ->name('users.restore')
    ->middleware('auth');

// Organizations

// Route::get('organizations', [OrganizationsController::class, 'index'])
//     ->name('organizations')
//     ->middleware('auth');

Route::get('organizations/create', [OrganizationsController::class, 'create'])
    ->name('organizations.create')
    ->middleware('auth');

Route::post('organizations', [OrganizationsController::class, 'store'])
    ->name('organizations.store')
    ->middleware('auth');

Route::get('organizations/{organization}/edit', [OrganizationsController::class, 'edit'])
    ->name('organizations.edit')
    ->middleware('auth');

Route::put('organizations/{organization}', [OrganizationsController::class, 'update'])
    ->name('organizations.update')
    ->middleware('auth');

Route::delete('organizations/{organization}', [OrganizationsController::class, 'destroy'])
    ->name('organizations.destroy')
    ->middleware('auth');

Route::put('organizations/{organization}/restore', [OrganizationsController::class, 'restore'])
    ->name('organizations.restore')
    ->middleware('auth');

// Contacts

// Route::get('contacts', [ContactsController::class, 'index'])
//     ->name('contacts')
//     ->middleware('auth');

Route::get('contacts/create', [ContactsController::class, 'create'])
    ->name('contacts.create')
    ->middleware('auth');

Route::post('contacts', [ContactsController::class, 'store'])
    ->name('contacts.store')
    ->middleware('auth');

Route::get('contacts/{contact}/edit', [ContactsController::class, 'edit'])
    ->name('contacts.edit')
    ->middleware('auth');

Route::put('contacts/{contact}', [ContactsController::class, 'update'])
    ->name('contacts.update')
    ->middleware('auth');

Route::delete('contacts/{contact}', [ContactsController::class, 'destroy'])
    ->name('contacts.destroy')
    ->middleware('auth');

Route::put('contacts/{contact}/restore', [ContactsController::class, 'restore'])
    ->name('contacts.restore')
    ->middleware('auth');

// Documents
Route::get('documents', [DocumentsController::class, 'index'])
    ->name('documents')
    ->middleware('auth');

Route::get('documents/create', [DocumentsController::class, 'create'])
    ->name('documents.create')
    ->middleware('auth');

Route::put('documents', [DocumentsController::class, 'store'])
    ->name('documents.store')
    ->middleware('auth');

Route::get('documents/{document}/edit', [DocumentsController::class, 'edit'])
    ->name('documents.edit')
    ->middleware('auth');

Route::put('documents/{document}', [DocumentsController::class, 'update'])
    ->name('documents.update')
    ->middleware('auth');

Route::delete('documents/{document}', [DocumentsController::class, 'destroy'])
    ->name('documents.destroy')
    ->middleware('auth');

Route::put('documents/{document}/restore', [DocumentsController::class, 'restore'])
    ->name('documents.restore')
    ->middleware('auth');

// Updates
Route::get('updates', [UpdatesController::class, 'index'])
    ->name('updates')
    ->middleware('auth');

Route::get('updates/create', [UpdatesController::class, 'create'])
    ->name('updates.create')
    ->middleware('auth');

Route::post('updates', [UpdatesController::class, 'store'])
    ->name('updates.store')
    ->middleware('auth');

Route::get('updates/{update}/edit', [UpdatesController::class, 'edit'])
    ->name('updates.edit')
    ->middleware('auth');

Route::put('updates/{update}', [UpdatesController::class, 'update'])
    ->name('updates.update')
    ->middleware('auth');

Route::delete('updates/{update}', [UpdatesController::class, 'destroy'])
    ->name('updates.destroy')
    ->middleware('auth');

Route::put('updates/{update}/restore', [UpdatesController::class, 'restore'])
    ->name('updates.restore')
    ->middleware('auth');


// Reports

Route::get('reports', [ReportsController::class, 'index'])
    ->name('reports')
    ->middleware('auth');

// Images

Route::get('/img/{path}', [ImagesController::class, 'show'])
    ->where('path', '.*')
    ->name('image');

//Documents
Route::get('/doc/{path}', [DocumentsController::class, 'show'])
    ->where('path', '.*')
    ->name('document')
    ->middleware('auth');
