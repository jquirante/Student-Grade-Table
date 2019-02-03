<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-ALlow-Headers: *");

require_once('mysql_creds.php');

$student_id = $_POST["id"];
$name = $_POST["name"];
$course = $_POST["course"];
$grade = $_POST["grade"];

$output = [
    'success' => false
];
$query = "UPDATE `studentGradeTable` AS s SET s.name='$name', s.course='$course', s.grade=$grade WHERE s.ID=$student_id";

$result = mysqli_query($creds, $query);

if ($result) {
    $output["success"] = true;
} else {
    $output["error"] = 'Query Failed';
}

$json_output = json_encode($output);
print_r($json_output);
?>
