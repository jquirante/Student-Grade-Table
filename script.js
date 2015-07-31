/**
 * Define all global variables here
 */
var student_array = [];

/**
 * addStudent - creates a student objects based on input fields in the form and adds the object to global student array
 *
 * @return undefined
 */
function addStudent(){
    //create new empty object
    var obj = {};
    var inputIds = ['studentName', 'course', 'studentGrade'];

    //retrieve values from each input field
    for(var i=0; i<inputIds.length; i++){
        var id = inputIds[i];
        var input = $("#"+id);
        var val = input.val();
        obj[id] = val;

        input.val("");
    }

    //add newly created object to the global student array
    student_array.push(obj);

    //call function to update the visual data
    updateData();
}

/**
 * calculateAverage - loop through the global student array and calculate average grade and return that value
 * @returns {number}
 */
function calculateAverage(){
    var avg = 0;
    var total = 0;

    //loop through student array to get the student grades
    for(var i=0; i<student_array.length; i++){
        total += parseFloat(student_array[i]["studentGrade"]);
    }

    //divide the total student grades by the length of the student array
    avg = Math.round(total/student_array.length);

    return avg;
}

/**
 * updateData - centralized function to update the average and call student list update
 */
function updateData(){

    //calculate value and update the DOM
    var average = calculateAverage();
    $('#avgGrade').html(average);

    //update student list
    updateStudentList();
}

/**
 * updateStudentList - loops through global student array and appends each objects data into the student-list-container > list-body
 */
function updateStudentList(){

    //empty out the current student list
    $('.student-list tbody').html('');

    //when the student array is empty, update the student table with a message of User Info Unavailable
    if(student_array.length == 0){
        var userUnavailableRow = $('<td>').attr("colspan", 5).append($('<h3>').html("User Info Unavailable"));
        $('.student-list tbody').html(userUnavailableRow);
    }

    //loop throufh student list and call addStudentToDom with each student object in the array
    for(var i=0; i<student_array.length; i++){
        var studentObj = student_array[i];
        addStudentToDom(studentObj);
    }
}

/**
 * addStudentToDom - take in a student object, create html elements from the values and then append the elements
 * into the .student_list tbody
 * @param studentObj
 */
function addStudentToDom(studentObj){

    //create new row and all columns within the row with the studentObj values
    var newTableRow = $('<tr>');
    var nameColumn = $('<td>').html(studentObj['studentName']);
    var courseColumn = $('<td>').html(studentObj['course']);
    var gradeColumn = $('<td>').html(studentObj['studentGrade']);
    var deleteBtn = $('<button>').html("Delete").addClass("btn btn-danger");
    var operationsColumn = $('<td>').html(deleteBtn);

    //append all newly created elements to the new table row
    newTableRow.append(nameColumn, courseColumn, gradeColumn, operationsColumn);

    //append the new row to the .student-list body
    $('.student-list tbody').append(newTableRow);
}

/**
 * reset - resets the application to initial state. Global variables reset, DOM get reset to initial load state
 */
function reset(){

    //empty student array
    student_array = [];

    //update the data now that student array is empty
    updateData();
}


/**
 * Listen for the document to load and reset the data to the initial state
 */
$(document).ready(function(){
    reset();
});