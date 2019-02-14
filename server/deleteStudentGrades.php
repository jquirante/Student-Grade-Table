<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

require_once('mysql_creds.php');

$student_id = $_POST["student_id"];
$idError = '';
$output = [
    "success" => false
];

if (empty($_POST["student_id"])) {
    $idError = 'Student ID -- Please enter a valid student Id';
    $output["idError"] = $idError;
} else {
    if (!preg_match("/^[0-9]*$/", $_POST["student_id"])) {
        $idError = "Student ID -- Only numbers allowed";
        $output["idError"] = $idError;
    }
}

if ($idError === '') {
    // $query = "DELETE FROM `studentGradeTable` WHERE id=$student_id";

    // $result = mysqli_query($creds, $query);

    // if ($result) {
    //     $output['success'] = true;
    // } else {
    //     $output['error'] = 'query failed';
    // }
    $stmt = $creds->prepare("DELETE FROM `studentGradeTable` WHERE id=(?)");
    $stmt->bind_param("i", $student_id);
    $result = $stmt->execute();

    if ($result) {
        $output['success'] = true;
    } else {
        $output['error'] = 'query failed';
    }
    

}

$json_output = json_encode($output);

print_r($json_output);
?>