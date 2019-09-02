<?php
/*
 * Initialize phpmailer class
 */
global $phpmailer;

// (Re)create it, if it's gone missing
if ( ! ( $phpmailer instanceof PHPMailer ) ) {
    require_once ABSPATH . WPINC . '/class-phpmailer.php';
    require_once ABSPATH . WPINC . '/class-smtp.php';
}
$phpmailer = new PHPMailer;

	// SMTP configuration
$phpmailer->isSMTP();                    
$phpmailer->Host = 'smtp.gmail.com';
$phpmailer->SMTPAuth = true;
$phpmailer->Username = 'mantale0125@gmail.com';
$phpmailer->Password = 'pinki25dadu';
$phpmailer->SMTPSecure = 'tls';
$phpmailer->Port = 587;

$phpmailer->setFrom('info@example.com', 'CodexWorld');

// Add a recipient
$phpmailer->addAddress('manish@solulab.co');

// Add cc or bcc 
$phpmailer->addCC('cc@example.com');
$phpmailer->addBCC('bcc@example.com');

// Set email format to HTML
$phpmailer->isHTML(true);

// Email subject
$phpmailer->Subject = 'Send Email via SMTP from WordPress';

// Email body content
$mailContent = "<h1>Send HTML Email using SMTP in WordPress</h1>
    <p>This is a test email has sent using SMTP mail server with PHPMailer from WOrdPress.</p>";
$phpmailer->Body    = $mailContent;

if(!$phpmailer->send()){
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $phpmailer->ErrorInfo;
}else{
    echo 'Message has been sent';
}

?>