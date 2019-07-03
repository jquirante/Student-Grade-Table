<?php

require_once('mysql_creds.php');

$output = null;


    $email = $_POST["loginEmail"];
    $password = $_POST["loginPass"];

    if (empty($email) || empty($password)) {
        // print("EMPTY PASSWORD OR EMAIL");
        exit();
    }
    else {
        $sql = "SELECT * FROM studentGradeTableAccounts WHERE email=?;";
        $stmt = mysqli_stmt_init($creds);

        if (!mysqli_stmt_prepare($stmt, $sql)) {
            // print("SQL ERROR");
            exit();

        } else {

            mysqli_stmt_bind_param($stmt, "s", $email);
            mysqli_stmt_execute($stmt);
            $result = mysqli_stmt_get_result($stmt);

            if ($row = mysqli_fetch_assoc($result)) {

                $hashedInputPwd = hash("sha256", $password);
                $pwdCheck = $hashedInputPwd == $row["password"];

                if ($pwdCheck == false) {
                    // print("WRONG PASSWORD");
                    // print($hashedInputPwd);
                    // print($row["password"]);
                    exit();
                } else if ($pwdCheck == true) {
                    session_start();
                    $_SESSION['loggedin'] = true;
                    $_SESSION["userId"] = $row["ID"];
                    $_SESSION["email"] = $row["email"];

                    // header('Location: http://'.$_SERVER['HTTP_HOST'].'/table.php?Message=Success');
                    $output = 'success';
                }
                else {
                    // print("WRONG PASSWORD");
                    exit();
                }
            } else {
                // print("NO USER IN DB");
                exit();
            }
 

        }

    }

        

$json_output = json_encode($output);

print($json_output);
?>