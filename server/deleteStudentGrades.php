<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

require_once('mysql_creds.php');

$student_id = $_POST["student_id"];

$query = "DELETE FROM `studentGradeTable` WHERE id=$student_id";

$result = mysqli_query($creds, $query);

$output = [
    "success" => false
];

if ($result) {
    $output['success'] = true;
} else {
    $output['error'] = 'query failed';
}

$json_output = json_encode($output);

print_r($json_output);
?>