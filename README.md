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
    - Emulate below visual pixel perfect. <b>Please note that no additional style sheets have been added</b>
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

### Assignments - A.K.A criteria for success on this version of the project
- Choose a Lead developer among your paired programming team
    - Lead developer should fork <a href="https://github.com/Learning-Fuze/SGT">SGT</a> repo
    - <b>Both developers will be working off the same forked repo of the Lead Developers</b>
- Clone forked repo to each persons local computer
- On the repo of the Lead developers, create issues for line items listed under the scope heading above.
    - Can you not see the issues tab on the Lead Developer Repo?
        - Lead Developer go to settings tab
        - Under features header click the checkbox next to Issues
    - Issues should be created without being assigned to a specific user
    - <b>Start working on issues</b>
        - User goes through open issue list and assigns themselves an issue
        - Create new branch for current issue
            - start from master branch `git checkout master`
            - Create branch with this command `git checkout -b [relevent_issue_name]` <b>Replace [relevent_issue_name] with descriptive branch name</b>
        - Start coding
        - Test Code
        - Add, Commit, Push
        - Create Pull request in Github to [forked_repo]/master branch
            - Assign to another developer working on the project
            - Review Pull request
                - Collaborate on PR - Comment on any issues or questions
            - Assigned User merges PR into [forked_repo] - master
    - If More issues
        - Goto above - Start working on issues
    - Else
        - Create Pull request from [forked_repo] - master to LearningFuze/SGT - [team_name_branch]
    - Ready for Peer Review
     

