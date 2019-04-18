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
        print_r ($_SERVER);
        $user = $result->fetch_object();
        print_r ($user);
    }
}

json_encode($output);

print($output);
?>