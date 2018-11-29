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
var student_array = [];

/***************************************************************************************************
* initializeApp 
* @params {undefined} none
* @returns: {undefined} none
* initializes the application, including adding click handlers and pulling in any data from the server, in later versions
*/
function initializeApp(){
      console.log('init');
      addClickHandlersToElements();
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
      
      var tableRow = $('<tr>');

      for (var property in studentObject) {
            var tableHead = $('<td>', {
               class: 'col-xs-3',
               text: studentObject[property],
            });
            tableRow.append(tableHead);
      }
      
      var deleteContainer = $('<td>', {
            class: 'col-xs-3', 
      });
      
      var deleteButton = $('<button>', {
            class: 'btn btn-danger',
            'text-align': 'center',
            text: 'Delete',
            on: {
                  click: handleDeleteButton,
            }
      });

      deleteContainer.append(deleteButton);
      tableRow.append(deleteContainer);
      $('.student-list tbody').append(tableRow);

      function handleDeleteButton() {
            var studentIndex = student_array.indexOf(studentObject);
            student_array.splice(studentIndex,1);
            $(this).closest('tr').remove();

            calculateGradeAverage(student_array);
            
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
      debugger;
      console.log('calculateGradeAverage');
      var gradeTotal=null;
      for ( var student = 0; student < studentArray.length; student++ ) {
            gradeTotal+=parseInt(studentArray[student].grade); 
      }
      renderGradeAverage(gradeTotal/studentArray.length);
      
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
            url: 'http://s-apis.learningfuze.com/sgt/get',
            method: 'post',
            data: {
                  api_key: 'in0MdAd42k',
            }

      };

      $.ajax(ajaxOptions).then(function(response){
            console.log(response);
      });
}