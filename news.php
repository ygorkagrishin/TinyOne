<?php

$email = $_POST[ 'user-email' ];

$message = '

<html>
<head>
<meta charset="UTF-8">
<title>News</title>
</head>

    <h1>News</h1>

        <p>
            ' . $email . '
        </p>

</html>

';

$headers = "From : Администратор сайта <admin@665.com>\r\n".
"MIME-Version: 1.0" . "\r\n" .
"Content-type : text/html; charset=UTF-8" . "\r\n";

$mail = mail( 'sir.ygorkagrishin@yandex.ru', 'Заказать', $massage, $headers );

if ($mail) { 
    echo "сообщение успешно отправлено"; 
 } else { 
    echo "при отправке сообщения возникли ошибки"; 
 }

?>