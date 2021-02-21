<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['customerName']) && empty($_POST['customerE
mail'])) die();

if ($_POST)
	{

	// set response code - 200 OK

	http_response_code(200);
	$subject = "You have mail! Somebody is contacting you!";
	$to = "contact@galacticblue.net";

	// data

	$msg = "<!DOCTYPE html>";
	$msg.= "<html>";
	$msg.= "<head><style>@import url('https://use.typekit.net/unf2oir.css');</style><title>You have mail from GalacticBlue!</title></head>";
	$msg.= "<body>";
	$msg.= "<h1 style='color:#2A378C;'>Someone is wishing to contact GalacticBlue!</h1>";
	$msg.= "<p>Name: " . $_POST['customerName'] . "</p>";
	$msg.= "<p>Email: " . $_POST['customerEmail'] . "</p>";
  $msg.= "<p>Phone: " . $_POST['customerPhone'] . "</p>";
  $msg.= "<p>They would prefer to be contacted by " . $_POST['contactMethod'] . " in the " . $_POST['contactTime'] . " time.</p>";
	$msg.= "<p>Their message: " . $_POST['message'] . "</p>";
	$msg.= "<h4><span style='color:#2A378C;'>GALACTIC|</span><span style='color:#939598;'>blue</span></h4>";
	$msg.= "</body></html>";
	// Headers

	$headers = "From: " . strip_tags($_POST['customerEmail']) . "\r\n";
  $headers.= "Reply-To: ". strip_tags($_POST['customerEmail']) . "\r\n";
  $headers.= "CC: raul@galacticblue.net\r\n";
  $headers.= "MIME-Version: 1.0\r\n";
  $headers.= "Content-Type: text/html; charset=ISO-8859-1\r\n";

	mail($to, $subject, $msg, $headers);

	// echo json_encode( $_POST );

	echo json_encode(array(
		"sent" => true,
		"modal" => true
	));
	}
  else
	{

	// tell the user about error

	echo json_encode(["sent" => false, "message" => "Something went wrong"]);
	}

?>