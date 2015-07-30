# SGT
Student Grade Table



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
     

