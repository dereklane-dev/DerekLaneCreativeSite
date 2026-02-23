<?php
// Optional: show errors for debugging
ini_set('display_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL);
    $subject = htmlspecialchars(trim($_POST['subject']));
    $message = htmlspecialchars(trim($_POST['message']));

    if (!$email) {
        echo '<p class="error-message">Invalid email address.</p>';
        exit;
    }

    $to = "contact@dereklanecreative.com"; // must be your domain email
    $headers = "From: contact@dereklanecreative.com\r\n"; // domain email
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message\n";

    if (mail($to, $subject, $body, $headers)) {
        echo '<p class="success-message">Message sent successfully!</p>';
    } else {
        echo '<p class="error-message">Failed to send message. Please try again.</p>';
    }
} else {
    echo '<p class="error-message">Invalid request.</p>';
}
?>


