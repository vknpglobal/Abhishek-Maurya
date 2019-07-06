let fname = document.getElementById('fname');
let mname = document.getElementById('mname');
let lname = document.getElementById('lname');
let gender = document.getElementById("gender");
let dob = document.getElementById('dob');

let email = document.getElementById('email');
let phnumber = document.getElementById('phnumber');
let fatname = document.getElementById('fatname');
let motname = document.getElementById("motname");
let state = document.getElementById('state');
let city = document.getElementById('city');

// let mainclass = document.querySelectorAll("")

var regFormId = document.getElementById('regform');

function regform(){
    var msg = "Please fill this field.";
    var msg1= "Please select right one."
    if(fname.value == null || fname.value == ""){
        borderColor('fname');
        setErrorMessage('errfname', msg);
        fname.focus();
        return false;
    }else if(lname.value == null || lname.value == ""){
        borderColor('lname');
        setErrorMessage('errlname', msg);
        return false;
    }else if(gender.value == null || gender.value == ""){
        borderColor('gender');
        setErrorMessage('errgender', msg1);
        return false;
    }else if(dob.value == null || dob.value == ""){
        borderColor('dob');
        setErrorMessage('errdob', msg);
        return false;
    }else if(email.value == null || email.value == ""){
        borderColor('email');
        setErrorMessage('erremail', msg);
        return false;
    }else if(phnumber.value == null || phnumber.value == ""){
        borderColor('phnumber');
        setErrorMessage('errphnumber', msg);
        return false;
    }else if(phnumber.value.length() <10  || phnumber.value.length() > 10){
        borderColor('phnumber');
        setErrorMessage('errphnumber', "Please enter correct Phone number.");
        return false;
    }else if(fatname.value == null || fatname.value == ""){
        borderColor('fatname');
        setErrorMessage('errfatname', msg);
        return false;
    }else if(motname.value == null || motname.value == ""){
        borderColor('motname');
        setErrorMessage('errmotname', msg);
        return false;
    }else if(state.value == null || state.value == ""){
        borderColor('state');
        setErrorMessage('errstate', msg1);
        return false;
    }else if(city.value == null || city.value == ""){
        borderColor('city');
        setErrorMessage('errcity', msg1);
        return false;
    }
    
}
fname.addEventListener('blur', function(){
    if(fname.value != null && fname.value != ""){
        if(fname.value.length() < 3){
            borderColor('fname');
            setErrorMessage('errfname', "First name should be at list 3 cheracter.");
            fname.focus();
            return false;
        }
    }
})

function borderColor(id){
    document.getElementById(id).style.borderColor = "#ff0000";
}
function setErrorMessage(id, msg){
    document.getElementById(id).innerHTML = msg;
    document.getElementById(id).style.color = "#ff0000";
}
