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
        (name, course, grade)
    VALUES
        ('Justen','Computer Science', 100),
        ('Jake','Photography', 87),
        ('Melissa','History', 95),
        ('Jennifer','Data Structures and Algorithms', 77),
        ('Alyssa','Strength and Conditiong', 93),
        ('John','Psychology', 63),
        ('Nicole','Introduction to Piano', 88),
        ('Sasha','Graphic Design', 73),
        ('Brian','Public Speaking', 91),
        ('Dan','World Religion', 75)
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