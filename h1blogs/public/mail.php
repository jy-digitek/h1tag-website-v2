<?php

$postdata = file_get_contents("php://input");
$postdata = json_decode($postdata);

$email = $postdata->email;
$terms_accepted = $postdata->terms_accepted;
$name = $postdata->name;
$phone = $postdata->phone;
$branch = $postdata->branch;
$title = "You have received new enquiry!";
if ($email && $terms_accepted && $name && $phone && $branch) {
    $to      = 'shubhamjytech@gmail.com';
    $subject = 'H1TAG Query';
    // $message = ' Name: ' . $name;
    // $message .= ' Email: ' . $email;
    // $message .= ' Phone: ' . $phone;
    // $message .= ' Branch: ' . $branch;
    // $message .= ' Terms Accepted: ' . $terms_accepted;
    $message .= '<div style="width: 600px; margin: auto; padding: 10px; background: #ddd">
    <table style="background: #fff; border: 1px solid #ddd; width: 100%;" cellspacing="0">
        <tr>
            <td style="padding: 3px 6px; border: 1px solid #ddd; text-align: center; " colspan="2"><div><img src="https://h1tags.com/h1logo.png" style="width: 180px; margin: auto" /></div><h1 style="font-size: 20px">' . $title . '</h1></td>
        </tr>
        <tr>
            <td style="padding: 3px 6px; border: 1px solid #ddd; width :100px">Name</td>
            <td style="padding: 3px 6px; border: 1px solid #ddd">' . $name . '</td>
        </tr>
        <tr>
            <td style="padding: 3px 6px; border: 1px solid #ddd; width :100px">Contact</td>
            <td style="padding: 3px 6px; border: 1px solid #ddd">' . $phone . '</td>
        </tr>

        <tr>
            <td style="padding: 3px 6px; border: 1px solid #ddd; width :100px">Email</td>
            <td style="padding: 3px 6px; border: 1px solid #ddd">' . $email . '</td>
        </tr>
        <tr>
            <td style="padding: 3px 6px; border: 1px solid #ddd; width :100px">Branch</td>
            <td style="padding: 3px 6px; border: 1px solid #ddd">' . $branch . '</td>
        </tr>
        <tr>
            <td style="padding: 3px 6px; border: 1px solid #ddd; width :100px">Message</td>
            <td style="padding: 3px 6px; border: 1px solid #ddd">' . $msg . '</td>
        </tr>
    </table></div>';

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