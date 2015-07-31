# SGT - Student Grade Table

## Version 0.1
#### Description
Version 0.1 is the starting point of the Student Grade Table Project. LearningFuze has provided a base structure that
includes HTML structure that will need to be updated with boostrap classes. For this version we are looking to see that you
understand how to style an application with bootstrap, take input values and apply them to objects, and update the DOM
with a visual of those objects stored.
### Scope
- Styling
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
    - on update of student data, calculate and show average student grade rounded to the nearest whole number and display inside .avgGrade element

### Design
#### Mobile appearance
<img src="https://raw.githubusercontent.com/ej020586/SGT/v.1/assets/mobile.jpg?token=AI9hkBSFYFAUeQolU9eKe92fT3jzgYQxks5VxSTOwA%3D%3D" width="200"/>
#### No Data available appearance
<img src="https://raw.githubusercontent.com/ej020586/SGT/v.1/assets/reset.jpg?token=AI9hkE81Jx5IyQa12mLVf9YLC64Sr13Cks5VxSTgwA%3D%3D" width="500"/>
#### Data available appearance
<img src="https://raw.githubusercontent.com/ej020586/SGT/v.1/assets/students.jpg?token=AI9hkMqK2ANPDfmIzwAzrobpMW6sC7ajks5VxSTswA%3D%3D" width="500"/>

### Assignments - A.K.A criteria for success on this version of the project
1. Choose a Lead developer among your paired programming team
    1. Lead developer should fork <a href="https://github.com/Learning-Fuze/SGT">SGT</a> repo
    1. <b>Both developers will be working off the same forked repo of the Lead Developers</b>
1. Clone forked repo to each persons local computer
1. On the repo of the Lead developers, create issues for line items listed under the scope heading above.
    1. Can you not see the issues tab on the Lead Developer Repo?
        1. Lead Developer go to settings tab
        1. Under features header click the checkbox next to Issues
    1. Issues should be created without being assigned to a specific user
    1. <b>Start working on issues</b>
        1. User goes through open issue list and assigns themselves an issue
        1. Create new branch for current issue
            1. start from master branch `git checkout master`
            1. Create branch with this command `git checkout -b [relevent_issue_name]` <b>Replace [relevent_issue_name] with descriptive branch name</b>
        1. Start coding
        1. Test Code
        1. Add, Commit, Push
        1. Create Pull request in Github to [forked_repo]/master branch
            1. Assign to another developer working on the project
            1. Review Pull request
                1. Collaborate on PR - Comment on any issues or questions
            1. Assigned User merges PR into [forked_repo] - master
    1. If More issues
        1. Goto above - Start working on issues
    1. Else
        1. Create Pull request from [forked_repo] - master to LearningFuze/SGT - [team_name_branch]
    1. Ready for Peer Review
     

