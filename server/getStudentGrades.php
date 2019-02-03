<?php
    header("Access-Control-Allow-Origin: *");  
    header("Access-Control-Allow-Headers: *"); 

    require_once('mysql_creds.php');

    $output = [
        'success' => false
    ];

    $query = "SELECT * from `studentGradeTable`";

    $result = mysqli_query($creds, $query);

    $data = [];

    if ($result) {

        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                $data[] = $row;
            };
    
            $output['success'] = true;
            $output['data'] = $data;

        } else {
            // No data
            $output['error'] = 'No data';
        }
    
    } else {
        $output['error'] = 'Query Failed';
    }
    
    $json_output = json_encode($output);
    print($json_output);
     

?>