<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

require_once('mysql_creds.php');

$output = [
    'success' => false
];

$deleteStmt = $creds->prepare("TRUNCATE TABLE studentGradeTable");
$deleteResult = $deleteStmt->execute();

if ($deleteResult) {
    $insertStmt = $creds->prepare("
    INSERT INTO studentGradeTable 
        (name, course, grade, accountID)
    VALUES
        ('Justen','Computer Science', 100, 15),
        ('Jake','Photography', 87, 15),
        ('Melissa','History', 95, 15),
        ('Jennifer','Data Structures and Algorithms', 77, 15),
        ('Alyssa','Strength and Conditiong', 93, 15),
        ('John','Psychology', 63, 15),
        ('Nicole','Introduction to Piano', 88, 15),
        ('Sasha','Graphic Design', 73, 15),
        ('Brian','Public Speaking', 91, 15),
        ('Dan','World Religion', 75, 15)
    ");

    $insertResult = $insertStmt->execute();

    if ($insertResult) {
        $output = [
            'success' => true,
        ];
    } else {
        $output['error'] = 'Error with Insert';
    }
    
} else {
    $output['error'] = 'Error with Truncate';
}

$json_output = json_encode($output);
print($json_output);

?>