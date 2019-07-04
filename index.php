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
    <div class="login-wrapper">
        <div class="vertical-center forms">
            <ul class="col-xs-4 col-xs-offset-4 tab-group">
                <li class="tab active"><a href="#signIn">SIGN IN</a></li>
                <li class="tab"><a href="#signUp">SIGN UP</a></li>
            </ul>
            <div class="form-container">
                <form class="col-xs-4 col-xs-offset-4 container" id="signUp">
                    <div class="form-group col-xs-10 col-xs-offset-1">
                        <label>Email</label>
                        <input id="signUpEmail" class="form-control" type="email">
                        <div id="signUpEmailError" class="error"></div>
                    </div>
                    <div class="form-group col-xs-10 col-xs-offset-1">
                        <label>Password</label>
                        <input id="signUpPassword" class="form-control" type="password">
                        <div id="signUpPasswordError" class="error"></div>
                    </div>
                    <div class="form-group col-xs-10 col-xs-offset-1">
                        <label>Confirm Password</label>
                        <input id="confirmedPass" class="form-control" type="password">
                        <div id="signUpConfirmPassError" class="error"></div>
                    </div>
                    <div class="button-container form-group col-xs-10 col-xs-offset-1">
                        <button class="btn btn-primary " type="button" onclick="validateSignUpForm()">Sign Up</button>
                    </div>
                    <div class="button-container form-group col-xs-10 col-xs-offset-1">
                            <hr>
                            <a class="col-xs-6 col-xs-offset-4">Already a Member</a>
                        </div>
                    
                </form>
                <form class="col-xs-4 col-xs-offset-4 container" id="signIn">
                        <div class="form-group col-xs-10 col-xs-offset-1">
                            <div id="signInError" class="error"></div>      
                        </div>
                    <div class="form-group col-xs-10 col-xs-offset-1">
                        <label>Email</label>
                        <input id="login-email" class="form-control" name="email" type="email">
                    </div>
                    <div class="form-group col-xs-10 col-xs-offset-1">
                        <label>Password</label>
                        <input id="login-password" type="password" name="password" class="form-control">
                        <div></div>
                    </div>
                    <div class="button-container form-group col-xs-10 col-xs-offset-1">
                        <button type="button" class="btn btn-primary" onclick="handleSignIn()">Sign In</button>
                    </div>
                    <div class="button-container form-group col-xs-10 col-xs-offset-1">
                        <hr>
                        <a class="col-xs-6 col-xs-offset-4">Forgot Password</a>
                    </div>
                    
                </form>
    
            </div>
            
    
        </div>

    </div>
    

</body>

</html>
