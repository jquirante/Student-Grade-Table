# Version 0.1

Version 0.1 is the starting point of the Student Grade Table Project. LearningFuze has provided a base structure that
includes HTML structure that will need to be updated with boostrap classes. For this version we are looking to see that you
understand how to style an application with bootstrap, take input values and apply them to objects, and update the DOM
with a visual of those objects stored.

- <a href="https://github.com/Learning-Fuze/SGT/tree/v.1lf#getting-started">Getting Started</a>
- <a href="https://github.com/Learning-Fuze/SGT/tree/v.1lf#scope">View Scope</a>
- <a href="https://github.com/Learning-Fuze/SGT/tree/v.1lf#design">View Design</a>
- <a href="https://github.com/Learning-Fuze/SGT/tree/v.1lf#assignments---aka-criteria-for-success-on-this-version-of-the-project">View Assignments</a>

## Version 0.5
#### Description
Version 0.5 starts where v.1 left off with adding in the delete functionality. When clicking on the delete button we need
to add an event handler that will remove the current row from the DOM only after we have successfully removed the object
from the array.

- <a href="https://github.com/Learning-Fuze/SGT/tree/v.5lf#getting-started">Getting Started</a>
- <a href="https://github.com/Learning-Fuze/SGT/tree/v.5lf#scope">View Scope</a>

## Version 1.0
#### Description
Version 1.0 picks up where 0.5 left off. You will now be populating records from a database via the LearningFuze SGT API. This version will only be pulling entries, you will not be adding anything to the database for this version. You should still be able to add entries locally as you did before.

- <a href="https://github.com/Learning-Fuze/SGT/tree/v1.0lf#getting-started" target="_blank">Getting Started</a>
- <a href="https://github.com/Learning-Fuze/SGT/tree/v1.0lf#scope" target="_blank">View Scope</a>

## Version 2.0
#### Description
Version 2.0 adds more CRUD functionality.  Previously you added R (Read), and now you will be adding Create and Delete functionality. You will now be adding records to a database via the LearningFuze SGT API.



## Getting Started
> - Are you on your master branch?
    - **Yes** - continue to "Pull Latest Changes"
    - **I dont know** Run the command below
        - `git branch` - this will highlight the branch you are currently on
    - **No** - Make sure you `git add .` and `git commit` to your current branch before you switch to your master branch
> - Pull Latest Changes
        - `git checkout master`
        - `git pull origin master` - **Now continue with the next steps**
> - Create a feature branch
    - `git checkout -b v0.1`
> - Work on the scope defined <a href="https://github.com/Learning-Fuze/SGT/tree/v.1#scope">Below</a>
> - Add files to git
    - `git add .`
> - Commit files (Group files together)
    - `git commit -m "SGT v0.1 - Your Name"`
    - **Replace "Your Name" with your first and last name**
> - Send to gitHub (Push)
    - `git push origin v0.1`
> - Create pull request
    - Pull request should be made from v0.1 to **your repository's/teams** master branch


## Scope
> - Styling
    - Apply bootstrap styling to all <a href="http://getbootstrap.com/css/#buttons">buttons</a> & <a href="http://getbootstrap.com/css/#forms" target="_blank">form elements</a>
    - Apply bootstrap <a href="http://getbootstrap.com/css/#tables" target="_blank">table styling</a>
    - Apply look using boostrap only based on the designs <a href="https://github.com/ej020586/SGT/tree/v.1#design">below</a>. <b>Please note that no additional style sheets have been added</b>
- JS Functionality
    - Build out all functions & variables based on jsDoc (<a href="https://en.wikipedia.org/wiki/JSDoc" target="_blank">What is this?</a>) comments inside the script.js file
    - Form
        - On click of add button
            - call appropriate function in on click attribute
            - Add values inside the form into an object and store that object in the student_array global variable
            - Display all student data stored in the student_array inside the bootstrap table structure
            - Clear values inside the form elements
        - On click of cancel button
            - Clear values inside the form elements
    - on Dom Load
        - Reset application to its default state
        - Display all student data stored in the student_array inside the bootstrap table structure
    - on update of student_array data, calculate and show average student grade rounded to the nearest whole number and display inside .avgGrade element

## Design
> #### Mobile appearance
<img src="https://cloud.githubusercontent.com/assets/10343746/9148427/0384d076-3d30-11e5-83ff-4d10ae2daf70.png" width="200"/>
#### No Data available appearance
<img src="https://cloud.githubusercontent.com/assets/10343746/9148435/1d8f2bc4-3d30-11e5-926d-72a2a086fd8b.png" width="500"/>
#### Data available appearance
<img src="https://cloud.githubusercontent.com/assets/10343746/9148437/22e2566e-3d30-11e5-9401-ba2cb8309d65.png" width="500"/>

- <a href="https://github.com/Learning-Fuze/SGT/tree/v2.0lf#getting-started" target="_blank">Getting Started</a>
- <a href="https://github.com/Learning-Fuze/SGT/tree/v2.0lf#scope" target="_blank">View Scope</a>
