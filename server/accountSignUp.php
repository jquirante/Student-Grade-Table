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

$stmt = $creds->prepare("INSERT INTO `studentGradeTableAccounts` (`email`, `password`) VALUES (?,?)");
$stmt->bind_param("ss", $email, $passwordEnc);
$result = $stmt->execute();

if ($result) {
        
    $output['success'] = true;
    
} else {
    
    $output['error'] = 'query failed';
    
}

$json_output = json_encode($output);

print($json_output);
?>