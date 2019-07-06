<?php
session_start();

if (isset($_SESSION['userId']))
{
?>

<!doctype html>
<html>
<head>
    <title>Student Grade Table</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
    <script src="script.js"></script>
    <meta name="viewport" content="initial-scale=1, user-scalable=no">
</head>
<body>
    <div id="myModal" class="container modal fade col-xs-12">
        <div class="modal-dialog row">
        
            <div class="modal-content">
                <div class="modal-header d-block">
                    <button type="button" onclick="clearModalContents" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title text-center"></h4>
                </div>
                <div class="modal-body row errorText">
                    <!-- <p>Please fix the following errors:</p>
                    <div id="errorText" class="text-danger"></div> -->
                </div>
                <div class="d-block modal-footer">
                    <!-- <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> -->
                </div>
            </div>
        
        </div>
    </div>
    <div class="col-xs-12">
        <div class="row col-sm-11 col-sm-offset-1">
            <!-- only show this element when the isnt on mobile -->
            <h1 class="col-xs-pull-1 hidden-xs col-sm-12 page-header">Student Grade Table
                <div class="avgGradeContainer ">
                        <small >Grade Average : <span class="avgGrade label label-default">0</span></small>
                </div>
                <button id="signout"><a href="/logout.php">Logout</a></button>
            </h1>
            <!-- only show this element when the user gets to a mobile version -->
            <h3 class="hidden-lg hidden-md hidden-sm col-xs-12 page-header">Student Grade Table
                <div class="avgGradeContainer">
                    <small>Grade Average :  <span class="avgGrade label label-default">0</span></small>
                </div>
                <button><a href="/logout.php">Logout</a></button>
            </h3>
        </div>
        <form class="student-add-form col-sm-3 col-sm-push-8 media-heading">
            <h4>Add Student</h4>
            <div class="form-group input-group">
                <span class="input-group-addon">
                    <span class="glyphicon glyphicon-user"></span>
                </span>
                <input pattern="^[a-zA-Z ]{3,}$" type="text" class="addInput form-control form-rounded" name="studentName" id="studentName" placeholder="Student Name">
            </div>
            <div id="studentNameErrorContainer" class="text-danger"></div>
            <div class="form-group input-group">
                <span class="input-group-addon">
                    <span class="glyphicon glyphicon-list-alt"></span>
                </span>
                <input pattern="^[a-zA-Z ]{3,}$" type="text" class="addInput form-control form-rounded" name="course" id="course"
                    placeholder="Student Course">
            </div>
            <div id="courseErrorContainer" class="text-danger"></div>
            <div class="form-group input-group">
                <span class="input-group-addon">
                    <span class="glyphicon glyphicon-education"></span>
                </span>
                <input pattern="^[1-9][0-9]?$|^100$" type="text" class="addInput form-control form-rounded" name="studentGrade" id="studentGrade"
                    placeholder="Student Grade">
            </div>
            <div id="studentGradeErrorContainer" class="text-danger"></div>
            <button type="button" class="form-group btn btn-success" onclick="">Add</button>
            <button type="button" class="form-group btn btn-default" onclick="">Cancel</button>
            <!-- <button type="button" class="form-group btn btn-info">Get Data</button> -->
        </form>
        <div id="tableContainer" class="col-xs-12 col-sm-7 col-sm-pull-3">
            <table class="student-list table table-striped table-hover table-sm  col-xs-12 col-sm-12 col-sm-push-1">
                <thead>
                    <th class="col-xs-3">Student Name</th>
                    <th class="col-xs-3" id="courseTableHeader">Student Course</th>
                    <th class="col-xs-2" id="gradeTableHeader">Student Grade</th>
                    <th class="col-xs-4" id="operationsTableHeader">Operations</th>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
        
    </div>
</body>

</html>

<?php
}
else
{
    header("Location: index.php");//also a redirect can be made here instead.
}

?>
