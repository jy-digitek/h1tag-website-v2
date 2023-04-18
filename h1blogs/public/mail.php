<?php

$email = $_POST['email'];
$employed = $_POST['employed'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$branch = $_POST['branch'];

if ($email && $employed && $name && $phone && $branch) {
    $response = $this->sendMail($email && $employed && $name && $phone && $branch);
    if ($response) {
        $message = "Mail Sent";
    } else {
        $message = "Server Error";
    }
} else {
    $message = "Require params missing";
}
return $message;

function sendMail($email, $employed, $name, $phone, $branch)
{
    $to      = 'shubhamjytech@gmail.com';
    $subject = 'H1TAG Query';
    $message = 'Name: ' . $name;
    $message .= 'Email: ' . $email;
    $message .= 'Phone: ' . $phone;
    $message .= 'Branch: ' . $branch;
    $message .= 'Employment Status: ' . $employed;

    $headers = array(
        'From' => 't@jycyberhub.com',
        'Reply-To' => $email,
        'X-Mailer' => 'PHP/' . phpversion()
    );

    if (mail($to, $subject, $message, $headers)) {
        return true;
    } else {
        return false;
    }
}
