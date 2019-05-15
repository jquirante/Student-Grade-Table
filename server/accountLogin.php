<?php

session_start();

require_once('mysql_creds.php');

$output = null;

if ( ! empty($_POST) ) {
    if ( isset($_POST["loginEmail"]) && isset($_POST["loginPass"])) {

        $email = $_POST["loginEmail"];
        $password = $_POST["loginPass"];
        $stmt = $creds->prepare("SELECT * FROM `studentGradeTableAccounts` WHERE email = ?");
        $stmt->bind_param("s", $email);
        
        $stmt->execute();
        
        $result = $stmt->get_result();
        $user = $result->fetch_object();
        // $result = $stmt->get_result();
        // $user = $result->fetch_object();
        // $output = $user->password;

        $output = $result;
        // $inputPass = $_POST["loginPass"];
        // $dbPass = $user->password;

        // $test = password_verify( $_POST["loginPass"], $user->password);
        // $test2 = $inputPass == $dbPass;

        // $output = [
        //     "inputPass"=>$inputPass,
        //     "dbPass"=>$dbPass,
        //     "test"=>$test,
        //     "test2"=>$test2
        // ];
        // if ( password_verify( $_POST["loginPass"], $user->password) ) {
        //     $_SESSION['user_id'] = $user->ID;
        //     $output = true;
    	// }
    }
}

$json_output = json_encode($output);

print($json_output);
?>