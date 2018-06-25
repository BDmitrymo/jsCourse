<?php 

/*

	https://api.telegram.org/bot603187902:AAGjpUne4F0sTuHp7YhbLIo3ivHIWzSkViQ/getUpdates

 */
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$token = '603187902:AAGjpUne4F0sTuHp7YhbLIo3ivHIWzSkViQ';
$chat_id = '-247443144';
$arr = array(
	'Имя пользователя: ' => $name,
	'Телефон: ' => $phone,
	'Email: ' => $email
);

foreach ($arr as $key => $value) {
	$txt .= "<b>".$key."</b>".$value."%0A";
}

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
	header('location: thankyou.html');

} else {
	echo 'Error';
}

?>