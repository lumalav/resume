<html>
<head>
<title>Sending email using PHP</title>
</head>
<body>
<?php
   $to = "mgossai@mail.valenciacollege.edu";
   $subject = "My PHP Email";
   $message = "I sent a message using PHP";
   $header = "From:luis@luislavieri.com \r\n";
   $retval = mail ($to,$subject,$message,$header);
   if( $retval == true )  
   {
      echo "Message sent successfully...";
   }
   else
   {
      echo "Message could not be sent...";
   }
?>
</body>
</html>