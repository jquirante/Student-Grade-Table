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
      // refreshData();
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
      let inputValidationStatus = validateInputs();

      if (inputValidationStatus === true) {
         clearErrorFields();
         addStudent();
      }
     
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
      
      var tableRow = $('<tr>', {
            // display: 'inline-block',
            css: { 
                  display: 'table',
            },
            scope: 'row',
            class: 'col-xs-12',
      });

      // var divider = $('<hr />', {
      //       css: {
      //             margin: '10px',
      //       }
      // }
      // );

      // tableRow.append(divider);
      // console.log('datastudent', tableRow[0]);

      var tableName = $('<td>', {
            css: { 
                  display: 'inline-block',
                  position: 'relative',
                  'padding-top' : '8px',
                  'padding-left': '15px',
            },
            class: 'col-xs-3',
            text: studentObject.name,
      });

      var tableCourse = $('<td>', {
            css: { 
                  display: 'inline-block',
                  position: 'relative',
            },
            class: 'col-xs-3',
            text: studentObject.course,
      });

      var gradeContainer = $('<div>', {
            css: { 
                  display: 'inline-block',
                  position: 'relative',
                  
            },
            class: 'col-xs-2',
            text: studentObject.grade,
      });

      var tableGrade = $('<td>', {
            css: { 
                  display: 'inline-block',
                  position: 'relative',
            },
            class: 'col-xs-2',
            
            
      });

      tableGrade.append(gradeContainer);
     
      tableRow.append(tableName, tableCourse, tableGrade);
      
      var deleteContainer = $('<td>', {
            css: { 
                  display: 'inline-block',
                  position: 'relative',
                  
            },
            class: 'col-xs-4',
            id: 'deleteContainer',
      });
      
      var deleteButton = $('<button>', {
            css: { 
                  display: 'inline-block',
                  position: 'relative',
                  'margin-right': '5px'
                  
            },
            class: 'btn btn-danger',
            // 'text-align': 'center',
            text: 'Delete',
            'data-student': studentObject.ID,
            on: {
                  click: showDeleteModal,
            }
      });

      var editButton = $('<button>', {
            class: 'btn btn-info',
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

      function showDeleteModal() {
            // var studentIndex = student_array.indexOf(studentObject);
            // student_array.splice(studentIndex,1);
            // $(this).closest('tr').remove();
            // deleteStudentFromServer(studentObject.ID);
            // calculateGradeAverage(student_array);
            var parentRow = $(this).parent().parent(); //tr
            var name = parentRow.children("td:nth-child(1)");
            var course = parentRow.children("td:nth-child(2)");
            var grade = parentRow.children("td:nth-child(3)").first();

            $('.modal-title').text('Delete Student Details');
            $('.modal-body').html(`
            <form class="form-group student-update-form col-sm-8 col-sm-offset-2">
                  <h5>Student Name</h5>
                  <div class="form-group input-group">
                  <span class="input-group-addon">
                        <span class="glyphicon glyphicon-user"></span>
                  </span>
                  <input pattern="^[a-zA-Z ]{3,}$" type="text" class="updateInput form-control form-rounded" name="updateName" id="updateName" disabled="true" value="${name.html()}">
                  </div>
                  <div id="updateNameErrorContainer" class="text-danger"></div>
                  <h5>Student Course</h5>
                  <div class="form-group input-group">
                  <span class="input-group-addon">
                        <span class="glyphicon glyphicon-list-alt"></span>
                  </span>
                  <input pattern="^[a-zA-Z ]{3,}$" type="text" class="updateInput form-control form-rounded" name="updateCourse" id="updateCourse"
                  disabled="true" value="${course.html()}">
                  </div>
                  <div id="updateCourseErrorContainer" class="text-danger"></div>
                  <h5>Student Grade</h5>
                  <div class="form-group input-group">
                  <span class="input-group-addon">
                        <span class="glyphicon glyphicon-education"></span>
                  </span>
                  <input pattern="^[1-9][0-9]?$|^100$" type="text" class="updateInput form-control form-rounded" name="updateGrade" id="updateGrade"
                  disabled="true" value="${grade.text()}">
                  </div>
                  <div id="updateGradeErrorContainer" class="text-danger"></div>
            </form>`

            );
            $('#myModal').modal('show');
            console.log('Update Student!');
            var footerContainer = $('<div>',{
                  class: 'text-center'
            });

            var deleteMessage = $('<div>', {
                  css: {
                        left: '-5px',
                        position: 'relative',
                        'margin-bottom': '15px'
                        
                  },
                  text: 'Are you sure you want to delete this entry?',
                  class: 'text-center'
            })

            var confirmButton = $('<button>', {
                  class: 'btn btn-success text-center',
                  text: 'Confirm',
                  'data-student': studentObject.ID,
                  on: {
                        click: () => handleDeleteConfirmation(parentRow),
                  }
            });

            var cancelButton = $('<button>', {
                  class: 'btn btn-default text-center',
                  text: 'Cancel',
                  on: {
                        click: clearModalContents,
                  }
            });
            
            footerContainer.append(deleteMessage,confirmButton, cancelButton);
            $('.modal-footer').append(footerContainer);
            
      }

      function handleDeleteConfirmation(row) {
            
            var studentIndex = student_array.indexOf(studentObject);
            student_array.splice(studentIndex,1);
            row.remove();
            // $(this).closest('tr').remove();
            deleteStudentFromServer(studentObject.ID);
            calculateGradeAverage(student_array);
            clearModalContents();
      }
      function handleStudentUpdate() {

            var parentRow = $(this).parent().parent(); //tr
            var name = parentRow.children("td:nth-child(1)");
            var course = parentRow.children("td:nth-child(2)");
            var grade = parentRow.children("td:nth-child(3)").first();

            $('.modal-title').text('Update Student Details');
            $('.modal-body').html(`
            <form class="form-group student-update-form col-sm-8 col-sm-offset-2">
                  <h5>Student Name</h3>
                  <div class="form-group input-group">
                  <span class="input-group-addon">
                        <span class="glyphicon glyphicon-user"></span>
                  </span>
                  <input pattern="^[a-zA-Z ]{3,}$" type="text" class="updateInput form-control form-rounded" name="updateName" id="updateName" value="${name.html()}">
                  </div>
                  <div id="updateNameErrorContainer" class="text-danger"></div>
                  <h5>Student Course</h3>
                  <div class="form-group input-group">
                  <span class="input-group-addon">
                        <span class="glyphicon glyphicon-list-alt"></span>
                  </span>
                  <input pattern="^[a-zA-Z ]{3,}$" type="text" class="updateInput form-control form-rounded" name="updateCourse" id="updateCourse"
                        value="${course.html()}">
                  </div>
                  <div id="updateCourseErrorContainer" class="text-danger"></div>
                  <h5>Student Grade</h3>
                  <div class="form-group input-group">
                  <span class="input-group-addon">
                        <span class="glyphicon glyphicon-education"></span>
                  </span>
                  <input pattern="^[1-9][0-9]?$|^100$" type="text" class="updateInput form-control form-rounded" name="updateGrade" id="updateGrade"
                        value="${grade.text()}">
                  </div>
                  <div id="updateGradeErrorContainer" class="text-danger"></div>
            </form>`
            );
            $('#myModal').modal('show');
            console.log('Update Student!');

            var footerContainer = $('<div>',{
                  class: 'text-center'
            });

            var updateMessage = $('<div>', {
                  css: {
                        'margin-bottom': '15px',
                        position: 'relative',
                  },
                  text: 'Confirm these changes?'
            });

            var submitButton = $('<button>', {
                  class: 'btn btn-success',
                  text: 'Submit',
                  'data-student': studentObject.ID,
                  on: {
                        click: handleSaveUpdate,
                  }
            });

            var cancelButton = $('<button>', {
                  class: 'btn btn-default',
                  'data-dismiss': "modal",
                  text: 'Cancel',
                  on: {
                        click: clearModalContents,
                  }
            });

            footerContainer.append(updateMessage,submitButton,cancelButton);
            $('.modal-footer').append(footerContainer);

            // var parentRow = $(this).parent().parent(); //tr
            // var name = parentRow.children("td:nth-child(2)");
            // var course = parentRow.children("td:nth-child(3)");
            // var grade = parentRow.children("td:nth-child(4)").first();
            // var tdButtons = parentRow.children("td:nth-child(4)");
 
            // name.html("<input pattern='^[a-zA-Z ]{3,}$' class='updateInput form-control form-rounded' type='text' name='updateName' id='updateName' value=' "+name.html()+" '/><div id='updateNameErrorContainer' class='text-danger'></div>");
            // course.html("<input pattern='^[a-zA-Z ]{3,}$' class='updateInput form-control form-rounded' type='text' name='updateCourse' id='updateCourse' value='"+course.html()+"'/><div id='updateCourseErrorContainer' class='text-danger'></div>");
            // grade.html("<input pattern='^[1-9][0-9]?$|^100$' class='updateInput form-control form-rounded' type='text' name='updateGrade' id='updateGrade' value='"+grade.text()+"'/><div id='updateGradeErrorContainer' class='text-danger'></div>");
 
            // $(".btnSave").bind("click", Save);
            // $(".btnEdit").bind("click", Edit);
            // $(".btnDelete").bind("click", Delete);
      }
      
      function handleSaveUpdate(event) {
            console.log('Save Update');
            console.log('name: ', name);
            event.preventDefault();
            var updatedStudentInfo = {
                  id: studentObject.ID,
                  name: $('#updateName').val(),
                  course: $('#updateCourse').val(),
                  grade: $('#updateGrade').val()
            }

            let updateInputValidation = validateUpdateInputs();

            if(updateInputValidation === true) {
                  clearModalContents();
                  saveUpdateToDb(updatedStudentInfo);
            } else {
                  return;
            }
           
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
                  
                  // if (response.nameError || response.courseError || response.gradeError) {
                  //       $("#nameErrorContainer").text(response.nameError);
                  //       $("#courseErrorContainer").text(response.courseError);
                  //       $("#gradeErrorContainer").text(response.gradeError);
                  // } 
                  
                  if (response.success === true && response.errors !== undefined) {
                        
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
                  console.log('Update response: ',response)
                  console.log('yay');
                  
                  if (response.nameError) {
                        console.log($('#errorText').text());
                        $('#errorText').append(`<p>${response.nameError}</p>`);
                  }

                  if (response.courseError) {
                        $('#errorText').append(`<p>${response.courseError}</p>`);
                  }

                  if (response.gradeError) {
                        $('#errorText').append(`<p>${response.gradeError}</p>`);
                  }
                  
                  if (response.nameError || response.courseError || response.gradeError) {
                        $('#myModal').modal('show');
                  }

                  clearErrorFields();
                  $('#myModal').modal('hide');
                  handleGetData();
            },
            error: function(error) {
                  console.log('damn error', error);
            },
      }

      $.ajax(ajaxOptions);
}

function validateInputs(){
     
      console.log("VALIDATE INPUTS");
      let validatedStatus = true;
      
      const inputs = document.getElementsByClassName('addInput');
      console.log(inputs);

      for ( var inputField = 0; inputField < inputs.length; inputField++ ) {
            const pattern = new RegExp(inputs[inputField].pattern);
            console.log(pattern);
            const value = inputs[inputField].value;
            console.log(value);
            console.log(pattern.test(value));

            if (pattern.test(value) === false) {
                  validatedStatus = false;
                  if(inputs[inputField].pattern === '^[a-zA-Z ]{3,}$') {
                        let nameCourseErrorMessage = '';
                        nameCourseErrorMessage = "Please enter at least three letters";
                        $(`#${inputs[inputField].name}ErrorContainer`).text(nameCourseErrorMessage);
                  } else {
                        let gradeMessage = '';
                        gradeMessage = "Please enter a number between 0 and 100";
                        $(`#${inputs[inputField].name}ErrorContainer`).text(gradeMessage);
                  }
            }
      }

      return validatedStatus;
}

function validateUpdateInputs(){
      
      console.log("VALIDATE INPUTS");
      let validatedStatus = true;
      
      const inputs = document.getElementsByClassName('updateInput');
      console.log(inputs);

      for ( var inputField = 0; inputField < inputs.length; inputField++ ) {
            const pattern = new RegExp(inputs[inputField].pattern);
            console.log(pattern);
            const value = inputs[inputField].value;
            console.log(value);
            console.log(pattern.test(value));

            if (pattern.test(value) === false) {
                  validatedStatus = false;
                  if(inputs[inputField].pattern === '^[a-zA-Z ]{3,}$') {
                        let nameCourseErrorMessage = '';
                        nameCourseErrorMessage = "Please enter at least three letters";
                        $(`#${inputs[inputField].name}ErrorContainer`).text(nameCourseErrorMessage);
                  } else {
                        let gradeMessage = '';
                        gradeMessage = "Please enter a number between 0 and 100";
                        $(`#${inputs[inputField].name}ErrorContainer`).text(gradeMessage);
                  }
            }
      }

      return validatedStatus;
}

function clearErrorFields() {
      const inputs = document.getElementsByTagName('input');

      for ( var inputField = 0; inputField < inputs.length; inputField++ ) {
      
         $(`#${inputs[inputField].name}ErrorContainer`).text('');
                    
      }
}

function refreshData() {
     
      console.log('refresh data');
      var ajaxOptions = {
            dataType: 'json',
            url: 'http://localhost:8888/refreshStudentGrades.php',
            method: 'post',
            

      };

      $.ajax(ajaxOptions).then(function(response){
            
            console.log('get data working', response.data);
      }).fail(function(errorResponse) {
            
            console.log('errorResponse', errorResponse);
            if (errorResponse.status === 500) {
                  $('#errorText').text('There was an error connecting to the server. Please try again in a few minutes');
            }
            
            $('#myModal').modal('show');
      });
      console.log('done getting data');
}

function clearModalContents() {
      $('.modal-title').empty();
      $('.modal-body').empty();
      $('.modal-footer').empty();
      $('#myModal').modal('hide');
}