<?php
$to = "manish@solulab.co";
$subject = "My subject";
$txt = "Hello world!";
$headers = "From: webmaster@example.com" . "\r\n" .
"CC: somebodyelse@example.com";

// mail($to,$subject,$txt,$headers);

$mailSend = wp_mail($to,$subject,$txt,$headers);
if(!$mailSend){
        echo "not sent";
    }
    else{
      echo "sent";
  
    }
	// $to = $_POST['sessemail'];
 //    $status = $_POST['stat'];
 //    $description = $_POST['desc'];
 //    $clipartprice = $_POST['clipartprice'];
 //    $url = $_POST['image'];    
    // $sessemail = $_POST['sessemail'];
    // echo $user_info = get_userdata(); 

    // $to = ;
            // $subject = 'Clipart Status';

            // $message = "
            // <html>
            // <head>
            // <title>Clipart Status</title>
            // </head>
            // <body>
            // <h3>Clipart Status</h3>
            // <img src='".$url."' width='150' height='150' />
            // <p>Status:&nbsp;&nbsp;'".$status."'<br>Price:&nbsp;&nbsp; '".$clipartprice."'</p>
            // <p>Description:&nbsp;&nbsp;'".$description."'</p>
            // </body>
            // </html>
            // ";

// Always set content-type when sending HTML email
// $headers = "MIME-Version: 1.0" . "\r\n";
// $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
// $headers .= 'From: <webmaster@example.com>' . "\r\n";
// $headers .= 'Cc: myboss@example.com' . "\r\n";

// $mailSend = mail($to,$subject,$message,$headers);
// if(!$mailSend){
//         echo "not sent";
//     }


    // $subject = 'Clipart Status';
    // $message = "<html><head></head>"
    //         . "<body><h1>Clipart Status</h1>"
    //         . "<img src='".$url."' width='150' height='150' />"
    //         . "<p>Status:&nbsp;&nbsp;".$status."<br>Price:&nbsp;&nbsp; ".$clipartprice."</p>"
    //         . "<p>Description:&nbsp;&nbsp;".$description."</p></body></html>";
    // $headers = array('Content-Type: text/html; charset=UTF-8');
    // $mailSend = mail($to, $subject, $message,$headers);
    // if(!$mailSend){
    //     echo "not sent";
    // }
    // $message = "<html><head><img src='http://192.168.1.157/Shop/wp-content/uploads/2016/07/image_nmae.png'/></head>"
    //         . "<body><h1>Visitor Information</h1>"
    //         . "<p>Visitor Information: Fist Name:&nbsp;&nbsp;".$firstName."&nbsp;&nbsp; Last Name:&nbsp;&nbsp; ".$lastName."</p>"
    //         . "<p>Email:&nbsp;&nbsp;".$email."</p><p>Question:&nbsp;&nbsp;".$question."</p></body></html>";
    // $headers = array('Content-Type: text/html; charset=UTF-8');
    // $mailSend = wp_mail($to, $subject, $message,$headers);
?>