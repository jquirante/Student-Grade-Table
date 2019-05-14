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
        $user = mysqli_fetch_assoc($result);
        
        $output = $user;
        // if ( password_verify( hash("sha256",$_POST["loginPass"]), $user->password ) ) {
        //     $_SESSION['user_id'] = $user->ID;
        //     $output = true;
    	// }
    }
}

$json_output = json_encode($output);

print($json_output);
?>