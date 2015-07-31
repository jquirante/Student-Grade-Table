# SGT
Student Grade Table

## Version 0.1

### Description
Version 0.1 is the starting point of the Student Grade Table Project. LearningFuze has provided a base structure that
includes HTML structure that will need to be updated with boostrap classes. For this version we are looking to see that you
understand how to style an application with bootstrap, take input values and apply them to objects, and update the DOM
with a visual of those objects stored.
## Scope
- Styling
    - Apply bootstrap button style to all <a href="http://getbootstrap.com/css/#buttons">buttons</a> & <a href="http://getbootstrap.com/css/#forms" target="_blank">form elements</a>
    - Apply bootstrap structure and <a href="http://getbootstrap.com/css/#tables" target="_blank">table styling</a>
    - Emulate below visual pixel perfect. Please note that no additional style sheets have been added
- JS Functionality
    - Save form elements data into an object on click of add student button
    - Display all added student data into the table structure in the DOM
    - Reset application to default state


- Assignments will be given out by dev#, where one dev is dev1, and the other is dev2
- See instructor for dev# designation

# SCOPE

- dev1:
   - create function to 
      - add input information into #student_info.  
      - Style inputs, displays and the header above with bootstrap buttons, forms, grids, etc, when possible.  
      - Should also add a delete button.  This button will have no function until later.  Delete button should be to the far right side of each student listed
      - Should add the student into an object, and add that object into a global array: student_array
- dev2:
   - create a function that
       - calculates the average grade of all available students
       - display the average grade in #grade_average
   - create a function that
       - highlights the highest and lowest grades.

  

## Version 0.5
- Scope
  - Fork your paired programming repo to your own account
  - Complete any remaining functionality from v0.1 scope
  - Incorporate the delete functionality developed in your <a href='https://github.com/Learning-Fuze/prototypes/tree/master/js-deletion' target='_blank'>JS deletion prototype, and incorpoate</a>
    - Delete button should delete the element
    - Delete button should delete the linked student object from the array

## Version 1.0
- Scope
  - Call student data from the url 
    - http://s-apis.learningfuze.com/sgt/get
  - Display all students retrieved from the server data
  - EXTRA - Allow locally added students and server added students to both be displayed
  - EXTRA - If a student's ID already exists, do not add the student to the local information

## Version 2.0
- Scope
  - Send student data to the following url
    - http://s-apis.learningfuze.com/sgt/create
    - Input: POST data:
      - name: string- the student's name
      - grade: number- the student's grade
      - course: string- the student's course name
    - Output: JSON encoded string
      - success:
        - true: the operation was successful
        - false: the operation was not successful
      - errors:
        - an array of errors that occurred
      - new_id: (on success): a number representing the new student ID for the added student
  - Read all data from server on student addition
  - EXTRA: periodically check the server for new information
  - EXTRA: Allow data to be sorted by name, grade, or course in reverse or forward order

## Version 2.5
- Scope
  - Add auto-complete functionality to the course field
    - When any letter is pressed
      - use the keyup event
    - check the server for a list of courses that match the current text
      - request address http://s-apis.learningfuze.com/sgt/courses
      - inputs:
        - course: a string used for a partial text match
        - (optional) search_type: whether to do full or partial searches
          - full: search full text of course
          - partial (or nothing): search course text from beginning only
      - outputs:
        - success: boolean value - whether the request completed successfully
        - errors: array of strings, each representing an error
        - data: array of objects
          - course: string containing matching course name
    - below the input, 
      - display a ul with lis 
      - one li for each option returned in data above
      - clicking on an li will input that value into the course input field directly

## Version 3.0
- Scope
  - Add functionality to the delete button:
    - User should be able to select a single student to be deleted.
    - Either a single button for each student
    - Or some way to select a user and press a single delete button
  - Send delete request to server 
    - request address http://s-apis.learningfuze.com/sgt/delete
    - inputs:
      - student_id: id of the student to be deleted
    - outputs:
      - success: boolean value - whether the request completed successfully
      - errors: array of strings, each representing an error
  - Make the row unclickable / undeletable while waiting for the server response
  - Display some visual indication that the row is busy
    - for example, a spinning wait symbol in place of the delete button's normal text / graphic 
  - Upon confirmation of success of deletion of the current student
    - delete the current student
      - add a visual effect to the row to show it is being deleted
         - for example, the row shrinks away or collapses
      - delete the student from the student object list
    - do not refresh the student list after deletion
     

