/* information about jsdocs: 
* param: http://usejsdoc.org/tags-param.html#examples
* returns: http://usejsdoc.org/tags-returns.html
* 
/**
 * Listen for the document to load and initialize the application
 */
$(document).ready(initializeApp);

/**
 * Define all global variables here.  
 */
/***********************
 * student_array - global array to hold student objects
 * @type {Array}
 * example of student_array after input: 
 * student_array = [
 *  { name: 'Jake', course: 'Math', grade: 85 },
 *  { name: 'Jill', course: 'Comp Sci', grade: 85 }
 * ];
 */
var student_array;

/***************************************************************************************************
* initializeApp 
* @params {undefined} none
* @returns: {undefined} none
* initializes the application, including adding click handlers and pulling in any data from the server, in later versions
*/
function initializeApp(){
      console.log('init');
      addClickHandlersToElements();
      handleGetData();
}

/***************************************************************************************************
* addClickHandlerstoElements
* @params {undefined} 
* @returns  {undefined}
*     
*/
function addClickHandlersToElements(){
      console.log('add click handlers');
      $('.btn-success').on('click', handleAddClicked);
      $('.btn-default').on('click', handleCancelClick);
      $('.btn-info').on('click', handleGetData);
}

/***************************************************************************************************
 * handleAddClicked - Event Handler when user clicks the add button
 * @param {object} event  The event object from the click
 * @return: 
       none
 */
function handleAddClicked(){
      console.log('handle add click');
      addStudent();
}
/***************************************************************************************************
 * handleCancelClicked - Event Handler when user clicks the cancel button, should clear out student form
 * @param: {undefined} none
 * @returns: {undefined} none
 * @calls: clearAddStudentFormInputs
 */
function handleCancelClick(){
      console.log('handle cancel click');
      clearAddStudentFormInputs();
}
/***************************************************************************************************
 * addStudent - creates a student objects based on input fields in the form and adds the object to global student array
 * @param {undefined} none
 * @return undefined
 * @calls clearAddStudentFormInputs, updateStudentList
 */
function addStudent(){
      console.log('add student');
      var newStudent = {};
      newStudent.name = $('#studentName').val();
      newStudent.course = $('#course').val();
      newStudent.grade = $('#studentGrade').val();
      newStudent.operation;
      student_array.push(newStudent);
      addStudentToServer(newStudent.name, newStudent.course, newStudent.grade);
      updateStudentList(student_array);
      clearAddStudentFormInputs();
      
}
/***************************************************************************************************
 * clearAddStudentForm - clears out the form values based on inputIds variable
 */
function clearAddStudentFormInputs(){
      console.log('clear add student');
      $('input').val('');

}
/***************************************************************************************************
 * renderStudentOnDom - take in a student object, create html elements from the values and then append the elements
 * into the .student_list tbody
 * @param {object} studentObj a single student object with course, name, and grade inside
 */
function renderStudentOnDom(studentObject){
      debugger;
      var tableRow = $('<tr>', {
            // display: 'inline-block',
            class: 'col-xs-12',
      });

      var divider = $('<hr />');

      tableRow.append(divider);
      // console.log('datastudent', tableRow[0]);

      var tableName = $('<td>', {
            class: 'col-xs-3',
            text: studentObject.name,
      });

      var tableCourse = $('<td>', {
            class: 'col-xs-6',
            text: studentObject.course,
      });

      var gradeContainer = $('<div>', {
            css: { 
                  display: 'inline-block',
                  position: 'relative',
                  'text-align': 'center',
                  width: '60%',
            },
            text: studentObject.grade,
      });

      var tableGrade = $('<td>', {
            class: 'col-xs-3',
            
      });

      tableGrade.append(gradeContainer);
     
      tableRow.append(tableName, tableCourse, tableGrade);
      
      var deleteContainer = $('<td>', {
            class: 'col-xs-3', 
      });
      
      var deleteButton = $('<button>', {
            class: 'btn btn-danger',
            // 'text-align': 'center',
            text: 'Delete',
            'data-student': studentObject.ID,
            on: {
                  click: handleDeleteButton,
            }
      });

      var editButton = $('<button>', {
            class: 'btn btn-danger',
            // 'text-align': 'center',
            text: 'Edit',
            'data-student': studentObject.ID,
            on: {
                  click: handleStudentUpdate,
            }
      });
     

      console.log('STUDENT ID: ', studentObject.ID);
      deleteContainer.append( deleteButton, editButton);
      tableRow.append(deleteContainer);
      $('.student-list tbody').append(tableRow);

      function handleDeleteButton() {
            var studentIndex = student_array.indexOf(studentObject);
            student_array.splice(studentIndex,1);
            $(this).closest('tr').remove();
            deleteStudentFromServer(studentObject.ID);
            calculateGradeAverage(student_array);
            
      }

      function handleStudentUpdate() {
            debugger;
            console.log('Update Student!');
            var saveButton = $('<button>', {
                  class: 'btn btn-danger',
                  text: 'Save',
                  'data-student': studentObject.ID,
                  on: {
                        click: handleSaveUpdate,
                  }
            });

            deleteContainer.append(saveButton);

            var parentRow = $(this).parent().parent(); //tr
            var name = parentRow.children("td:nth-child(2)");
            var course = parentRow.children("td:nth-child(3)");
            var grade = parentRow.children("td:nth-child(4)").first();
            // var tdButtons = parentRow.children("td:nth-child(4)");
 
            name.html("<input class='form-control form-rounded' type='text' id='updateName' value='"+name.html()+"'/>");
            course.html("<input class='form-control form-rounded' type='text' id='updateCourse' value='"+course.html()+"'/>");
            grade.html("<input class='form-control form-rounded' type='text' id='updateGrade' value='"+grade.text()+"'/>");
 
            // $(".btnSave").bind("click", Save);
            // $(".btnEdit").bind("click", Edit);
            // $(".btnDelete").bind("click", Delete);
      }
      
      function handleSaveUpdate() {
            console.log('Save Update');
            console.log('name: ', name);
            var updatedStudentInfo = {
                  id: studentObject.ID,
                  name: $('#updateName').val(),
                  course: $('#updateCourse').val(),
                  grade: $('#updateGrade').val()
            }

            saveUpdateToDb(updatedStudentInfo);
      }
      
}

/***************************************************************************************************
 * updateStudentList - centralized function to update the average and call student list update
 * @param students {array} the array of student objects
 * @returns {undefined} none
 * @calls renderStudentOnDom, calculateGradeAverage, renderGradeAverage
 */
function updateStudentList(studentArray){
      $('.student-list tbody tr').remove();
      console.log('updateStudentList');
      for ( var student = 0; student < studentArray.length; student++ ) {
            renderStudentOnDom(studentArray[student]); 
      }
      calculateGradeAverage(studentArray);
  
}
/***************************************************************************************************
 * calculateGradeAverage - loop through the global student array and calculate average grade and return that value
 * @param: {array} students  the array of student objects
 * @returns {number}
 */
function calculateGradeAverage(studentArray){
      console.log('calculateGradeAverage');
      var gradeTotal=null;
      for ( var student = 0; student < studentArray.length; student++ ) {
            gradeTotal+=parseInt(studentArray[student].grade); 
      }
      renderGradeAverage(Math.floor(gradeTotal/studentArray.length));
      
}
/***************************************************************************************************
 * renderGradeAverage - updates the on-page grade average
 * @param: {number} average    the grade average
 * @returns {undefined} none
 */
function renderGradeAverage(numberAverage){
      
      if(student_array.length > 0) {
            $('.avgGrade').text(numberAverage);
      } else {
            $('.avgGrade').text(0);
      }

      
      console.log('renderGradeAvg');
}



/**** */


function handleGetData() {
      debugger;
      console.log('get data');
      var ajaxOptions = {
            dataType: 'json',
            url: 'http://localhost:8888/getStudentGrades.php',
            method: 'post',
            

      };

      $.ajax(ajaxOptions).then(function(response){
            console.log('get data working', response.data);
            student_array = response.data;
            updateStudentList(student_array);
      }).fail(function(errorResponse) {
            console.log('errorResponse', errorResponse);
            if (errorResponse.status === 500) {
                  $('#errorText').text('There was an error connecting to the server. Please try again in a few minutes');
            }
            
            $('#myModal').modal('show');
      });
      console.log('done getting data');
}

function addStudentToServer(name, course, grade) {
      debugger;
      var ajaxOptions = {
            url: 'http://localhost:8888/addStudentGrades.php',
            method: 'post',
            dataType: 'json',
            data : {
                  name: name,
                  course: course,
                  grade: grade,
                  // 'force-failure': 'server'
            },
            success: function(response){
                  console.log('response error',response.errors)
                  debugger;
                  if (response.success === true && response.errors !== undefined) {
                        debugger;
                        $('#errorText').text('There can only be one!');
                        $('#myModal').modal('show');
                  }

                  console.log('addStudentToServer', response);

            },
            error: function(errorResponse) {
                  if (errorResponse.status === 500) {
                        $('#errorText').text('There was an error connecting to the server. Please try again in a few minutes');
                  } 
                  
                  $('#myModal').modal('show');
            },
            
      }

      $.ajax(ajaxOptions);
}

function deleteStudentFromServer(studentId) {

      console.log(studentId);
      var ajaxOptions = {
            url: 'http://localhost:8888/deleteStudentGrades.php',
            method: 'post',
            dataType: 'json',
            data : {
                  student_id: studentId,
                  // 'force-failure': 'server'
            },
            
            success: function(response){
                  if (response.success === true) {
                        console.log('yaay');
                  } else if (response.success === false & response.errors !== undefined){
                        $('#errorText').text('Unable to perform action. Please check your permissions and try again.');
                        $('#myModal').modal('show');
                  }
                  console.log('deleteFromServer', response);

            },

            error: function(errorResponse) {
                  if (errorResponse.status === 500) {
                        $('#errorText').text('There was an error connecting to the server. Please try again in a few minutes');
                  } 
                  
                  $('#myModal').modal('show');
            },
            
      }

      $.ajax(ajaxOptions);
}

function saveUpdateToDb(studentInfo) {
      var ajaxOptions = {
            url: 'http://localhost:8888/updateStudentGrades.php',
            method: 'post',
            dataType: 'json',
            data: studentInfo,
            success: function(response) {
                  debugger;
                  console.log('yay');
                  handleGetData();
            },
            error: function(error) {
                  console.log('damn error', error);
            },
      }

      $.ajax(ajaxOptions);
}