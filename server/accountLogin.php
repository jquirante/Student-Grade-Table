<?php

session_start();

require_once('mysql_creds.php');



if ( ! empty($_POST) ) {
    if ( isset($POST["email"]) && isset($POST["password"])) {

        $email = $POST["email"];
        $password = $POST["password"];
        $stmt = $creds->prepare("SELECT * WHERE email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        
    }
}
?>