export function SignInUser(user) {
    validateUsername(user.email)
    return true;//token 
}

export function SignUpUser(params) {
    return {firstname:"Test 1", Lastname: "Test2"}
}

export function validateUsername(username) {
    const regex = RegExp('');
    return RegExp('foo*', 'g');
}

function ValidateEmail(email)
{
var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
if(email.value.match(mailformat))
{
alert("You have entered a valid email address!");   
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
}
 