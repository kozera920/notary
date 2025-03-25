<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
class LandingController extends Controller
{
    /**
     * Display the home view.
     */
    public function home(): Response
    {
        return Inertia::render('Landing/Home');
    }

    public function howItWorks(): Response
    {
        return Inertia::render('Landing/HowItWorks');
    }

    public function Pricing(): Response
    {
        return Inertia::render('Landing/Pricing');
    }
    public function Contact(): Response
    {
        return Inertia::render('Landing/ContactUs');
    }
    public function Faqs(): Response
    {
        return Inertia::render('Landing/FAQs');
    }
    public function AboutUs(): Response
    {
        return Inertia::render('Landing/AboutUs');
    }
    public function PrivacyPolicy(): Response
    {
        return Inertia::render('Landing/PrivacyPolicy');
    }
    public function TermsOfService(): Response
    {
        return Inertia::render('Landing/TermsOfService');
    }
    public function BookAppointment(): Response
    {
        return Inertia::render('Landing/BookAppointment');
    }
    public function SendAppointToEmail():RedirectResponse
    {
        // Example usage
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            // Collect form data
            // $formData = [
            //     'fullName' => $_POST['fullName'],
            //     'email' => $_POST['email'],
            //     'phone' => $_POST['phone'],
            //     'dateTime' => $_POST['dateTime'],
            //     'timeZone' => $_POST['timeZone'],
            //     'docType' => $_POST['docType'],
            //     'docCount' => $_POST['docCount'],
            //     'notes' => $_POST['notes']
            // ];

            // Send the email
            // if ($this->sendAppointmentEmail($formData)) { 
            //     return Redirect::route('documents')->with('success', 'Appointment booked successfully! An email has been sent to the admin.');
            // } else {
            //     echo "Failed to send the email. Please try again.";
            //     return Redirect::route('documents')->with('fail', 'Failed to send the email. Please try again.');
            // }
            
        }
        return Redirect::route('documents')->with('success', 'Appointment booked successfully! An email has been sent to the admin.');
    }
    function sendAppointmentEmail($formData)
    {
        // Extract form data
        $fullName = htmlspecialchars($formData['fullName']);
        $email = htmlspecialchars($formData['email']);
        $phone = htmlspecialchars($formData['phone']);
        $dateTime = htmlspecialchars($formData['dateTime']);
        $timeZone = htmlspecialchars($formData['timeZone']);
        $docType = htmlspecialchars($formData['docType']);
        $docCount = htmlspecialchars($formData['docCount']);
        $notes = htmlspecialchars($formData['notes']);

        // Format the email subject
        $subject = "New Appointment Booking - $fullName";

        // Format the email body
        $message = "
    <html>
    <head>
        <title>New Appointment Booking</title>
    </head>
    <body>
        <h2>New Appointment Booking</h2>
        <p><strong>Name:</strong> $fullName</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Phone:</strong> $phone</p>
        <p><strong>Preferred Date & Time:</strong> $dateTime ($timeZone)</p>
        <p><strong>Document Type:</strong> $docType</p>
        <p><strong>Number of Documents:</strong> $docCount</p>
        <p><strong>Additional Notes:</strong> $notes</p>
    </body>
    </html>
    ";

        // Email headers
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= "From: no-reply@koxera.com" . "\r\n";
        $headers .= "Reply-To: $email" . "\r\n";

        // Send the email
        $adminEmail = "admin@koxera.com"; // Replace with the admin's email
        $mailSent = mail($adminEmail, $subject, $message, $headers);

        // Return true if the email was sent successfully
        return $mailSent;
    }
}
