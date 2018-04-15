<?php
if(isset($_POST['email'])) {
    $email_to = "uariseorders@uaschools.org";
    $email_subject = "Email subject";
    $name = $_POST['name']; // required
    $email_from = $_POST['email']; // required
    $size = $_POST['size']; // required
    $time = $_POST['time']; // required

    function clean_string($string) {
    $bad = array("content-type","bcc:","to:","cc:","href");
    return str_replace($bad,"",$string);
    }

    $email_message = "Form details below.\n\n";
    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Size: ".clean_string($size)."\n";
    $email_message .= "Time: ".clean_string($time)."\n";

// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
mail($email_to, $email_subject, $email_message, $headers);
?>
  <!-- include your own success html here -->

  <div class="feedback">Rise and shine! Your order has been placed.</div>
  <?php
}
?>


<!-- need bracket and ? before php, very basic version without authentication
php
$to      = 'nobody@whateverdomain.com';
$subject = 'the subject';
$message = 'hello';
$headers = 'From: webmaster@whateverdomain.com' . "\r\n" .
    'Reply-To: webmaster@whateverdomain.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
?>-->






