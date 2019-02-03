<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

require_once('mysql_creds.php');

$name = $_POST["name"];
$course = $_POST["course"];
$grade = $_POST["grade"];

$output = [
    'success' => false
];


$query = "INSERT INTO `studentGradeTable` SET name='$name', course='$course', grade=$grade";

$result = mysqli_query($creds, $query);


if ($result) {
    
    $output['success'] = true;
    
} else {
    
    $output['error'] = 'query failed';
    
}

$json_output = json_encode($output);

print($json_output);
?>