<?php

$postdata = file_get_contents("php://input");
$postdata = json_decode($postdata);

$email = $postdata->email;
$terms_accepted = $postdata->terms_accepted;
$name = $postdata->name;
$phone = $postdata->phone;
$branch = $postdata->branch;

if ($email && $terms_accepted && $name && $phone && $branch) {
    $to      = 'shubhamjytech@gmail.com';
    $subject = 'H1TAG Query';
    $message = ' Name: ' . $name;
    $message .= ' Email: ' . $email;
    $message .= ' Phone: ' . $phone;
    $message .= ' Branch: ' . $branch;
    $message .= ' Terms Accepted: ' . $terms_accepted;

    $headers = array(
        'From' => 't@jycyberhub.com',
        'Reply-To' => $email,
        'X-Mailer' => 'PHP/' . phpversion()
    );

    if (mail($to, $subject, $message, $headers)) {
        $message = "Mail Sent";
    } else {
        $message = "Server Error";
    }
} else {
    $message = "Require params missing";
}
echo $message;