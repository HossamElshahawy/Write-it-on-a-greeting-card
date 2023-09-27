<?php
// Create a new image with a fixed background
$image = imagecreatefromjpeg("images/بطاقات-تهنئة-العيد-الوطني-السعودي-92.jpg");

// Define the text color
$textColor = imagecolorallocate($image, 0, 0, 0);

// Set the font size and position of the text
$fontSize = 24;
$textX = 200;
$textY = 200;

// Get the user's name from the query string
if (isset($_GET['name'])) {
    $name = $_GET['name'];

    // Add the user's name to the image
    imagettftext($image, $fontSize, 0, $textX, $textY, $textColor, "arial.ttf", $name);
}

// Set the content type and output the image
header('Content-Type: image/jpeg');
imagejpeg($image);

// Clean up
imagedestroy($image);
?>
