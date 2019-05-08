<?php

session_start();

require_once('mysql_creds.php');

$output = null;

if ( ! empty($_POST) ) {
    if ( isset($POST["email"]) && isset($POST["password"])) {

        $email = $POST["email"];
        $password = $POST["password"];
        $stmt = $creds->prepare("SELECT * WHERE email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();
        $output = $result;
        $user = $result->fetch_object();
        
        $output = $user;
        // if ( password_verify( hash("sha256",$_POST['password']), $user->password ) ) {
        //     $_SESSION['user_id'] = $user->ID;
        //     $output = true;
    	// }
    }
}

$json_output = json_encode($output);

print($json_output);
?>