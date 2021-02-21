<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['customerName']) && empty($_POST['customerEmail']) && empty($_POST['customerPhone'])) die();

if ($_POST)
	{

	http_response_code(200);
	$subject = "Hello, " . $_POST['customerName'] . " wishes to contact you!";
	$to = "contact@galacticblue.net";
	$from = $_POST['customerEmail'];

	$msg = $_POST['customerPhone'] . $_POST['message'];
	$msg.= "Prefers to be contacted by " . $_POST['preferredMethod'] . " during the " . $_POST['preferredTime'];

	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $from . ">";
	mail($to, $subject, $msg, $headers);

	echojson_encode(array(
		"sent" => true
	));
	}
  else
	{

	echojson_encode(["sent" => false, "message" => "Something went wrong"]);
	}

?>