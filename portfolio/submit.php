<?php
/**
 * @filesource : submit.php
 * @author : Shabeeb  <mail@shabeeb.com>
 * @abstract : simple submission php form
 * @package sample file 
 * @copyright (c) 2014, Shabeeb
 * 
 * 
 *  */

$post_date = file_get_contents("php://input");
$data = json_decode($post_date);

$to  = 'jamesritter15@gmail.com' ; 


// subject
$subject = 'James Ritter Web Site Contact Form';

// message
$message = '
<html>
<head>
  <title>Birthday Reminders for August</title>
</head>
<body>
  <p>"Message : "'$data->msg'"n";</p>
</body>
</html>
';

// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// Additional headers
$headers .= 'To: James <jamesritter15@gmail.com>' . "\r\n";
$headers .= 'From: '$data->name' <'$data->email'>' . "\r\n";

// Mail it
mail($to, $subject, $message, $headers);

//now i am just printing the values
echo "Name : "$data->name"\n";
echo "Email : "$data->email"\n";
echo "Message : "$data->msg"/n";



?>