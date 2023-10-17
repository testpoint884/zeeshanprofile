<?php
header("Content-Type: application/json");

// Get the POST data containing geolocation information
$postData = file_get_contents("php://input");
$data = json_decode($postData);

if ($data !== null) {
    // Extract the geolocation data
    $geolocationData = $data->geolocation;

    // Replace with your email address
    $to = "your-email@example.com";

    // Subject for the email
    $subject = "Geolocation Data";

    // Compose the email message
    $message = "Geolocation data received:\n" . $geolocationData;

    // Additional email headers
    $headers = "From: your-email@example.com"; // Replace with your email address

    // Send the email
    $success = mail($to, $subject, $message, $headers);

    if ($success) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false]);
    }
} else {
    echo json_encode(["success" => false, "error" => "Invalid data received"]);
}
?>
