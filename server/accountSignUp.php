<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

require_once('mysql_creds.php');

$email = $_POST["signUpEmail"];
$password = $_POST["signUpPass"];
$passwordEnc = hash("sha256", $password);

$output = [
    'success' => false
];

$stmt = $creds->prepare("SELECT * FROM `studentGradeTableAccounts` WHERE `email` = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if (mysqli_num_rows($result) > 0) {

    $output['error'] = 'An account with this email is already registered. Please signup with a different account';
    $json_output = json_encode($output);

    print($json_output);
} else {

    $stmt = $creds->prepare("INSERT INTO `studentGradeTableAccounts` (`email`, `password`) VALUES (?,?)");
    $stmt->bind_param("ss", $email, $passwordEnc);
    $result = $stmt->execute();

    if ($result) {

        $last_id = $creds->insert_id;
        session_start();
        $_SESSION['loggedin'] = true;
        $_SESSION["userId"] = $last_id;
        // $_SESSION["email"] = $row["email"];
        $output['success'] = true;
        $output['lastId'] = $last_id;
        
    } else {
        
        $output['error'] = 'query failed';
        
    }
    
}



$json_output = json_encode($output);

print($json_output);
?>