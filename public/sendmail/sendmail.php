<?php
header('Access-Control-Allow-Origin: *');
if(isset($_POST['name'], $_POST['email'], $_POST['message'])){
    if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['message'])) {
        echo '<div class="alert alert-danger" role="alert">
        All Fields Must be Filled
      </div>';
		
    }
    else {
    //Post data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    //mail settings
    $to = "sajibcse28@gmail.com";
    $subject = 'Vimory Contact Form';
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $headers .= 'From: Vimoryapp.com' . "\r\n";
    $headers .= 'Reply-To: '.$user_Email.'';
    $body = <<<EMAIL
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Demystifying Email Design</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>
    <body style="margin: 0; padding: 0;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%">	
        <tr>
          <td style="padding: 10px 0 30px 0;">
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border: 1px solid #cccccc; border-collapse: collapse;">
              <tr>
                <td align="center" bgcolor="#70bbd9" style="padding: 40px 0 30px 0; color: #153643; font-size: 28px; font-weight: bold; font-family: Arial, sans-serif;">
                  <img src="https://vimoryapp.com/developer/static/media/mailheader.png" alt="Creating Email Magic" width="300" height="230" style="display: block;" />
                </td>
              </tr>
              <tr>
                <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                      <td style="color: #153643; font-family: Arial, sans-serif; font-size: 24px;">
                        <b>Hi There!,</b><br>
                        I am $name.
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 20px 0 30px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 30px;">
                      $message
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 20px 0 30px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 30px;">
                      Kind Regards<br>
                      <b>$name</b>
                      </td>
                    </tr>
                   
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>npm 
      </table>
    </body>
    </html>
EMAIL;
$mailsent = mail($to, $subject, $body, $headers);
    if($mailsent){
        echo '<div class="alert alert-success" role="alert">
        Message sent! You will receive a reply shortly!
      </div>';
    } 
}
}