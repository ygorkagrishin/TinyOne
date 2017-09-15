<?php

$name = $_POST[ 'user-name' ];
$mail = $_POST[ 'user-email' ];
$comment = $_POST[ 'user-comm' ];

$mail_massage = '

<html>
<head>
    <meta charser="UTF-8">
    <title>Document</title>
</head>
<body>

    <h2>Заказ</h2>
        <ul>
            <li>Имя : ' . $name . ' </li>
            <li>Номер телефона : ' . $mail . ' </li>
            <li>Улица : ' . $comment . ' </li>
        </ul>

</body>
</html>

';

$headers = "From : Администратор сайта <admin@665.com>\r\n".
"MIME-Version: 1.0" . "\r\n" .
"Content-type : text/html; charset=UTF-8" . "\r\n";

$mail = mail( 'sir.ygorkagrishin@yandex.ru', 'Заказать', $mail_massage, $headers );

if ($mail) { 
   echo "сообщение успешно отправлено"; 
} else { 
   echo "при отправке сообщения возникли ошибки"; 
}

?>