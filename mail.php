<?
$errors = array();
if(empty($_POST['phone'])){
	$errors[] = 'Номер телефона не указан';
}
if(empty($_POST['name'])){
	$errors[] = 'Имя не указано';
}
if(empty($_POST['police'])){
	$errors[] = 'Согласитесь с условиями';
}

if(count($errors)){
	$response['result'] = 'error';
	$response['data'] = implode(', ',$errors);
	die(json_encode($response));
}


$subject = iconv('utf-8','windows-1251','Сообщение с сайта Ndom54.ru.');

if($_POST['subject']){
	$subject = iconv('utf-8','windows-1251',$_POST['subject']);
}


$to = 'ndom54@bk.ru';
$msg = "Поступило новое сообщение с сайта ndom54.ru.\n\n";
$msg.="Телефон: ".$_POST['phone']."\n";
//$msg.="email: ".$_POST['mail']."\n";
$msg.="Имя: ".$_POST['name']."\n";
/* if($_POST['product']){
	$msg.="Продукт: ".$_POST['product']."\n";
} */
//$msg.="Сообщение: ".$_POST['txt']."\n";

$msg = iconv('utf-8','windows-1251',$msg);

if(!mail($to, $subject, $msg)){
	$response['result'] = 'error';
	$response['data'] = 'Ошибка при отправке заявке. Повторите попытку позже.';
	die(json_encode($response));
}

$response['result'] = 'ok';
$response['data'] = 'Ваше сообщение успешно отправлено';
die(json_encode($response));