/* Defining a function to display error message
function alert(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}*/

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var firstname = document.getElementById("firstname").value;
    console.log(firstname);
    var lastname = document.getElementById("lastname").value;
    console.log(lastname);
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("number").value;
    var subject = document.getElementById("subject").value;
    var gender = document.getElementById("gender").value;
    var hobbies = [];
    var checkboxes = document.getElementsByName("checkbox[]");
    for(var i=0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            // Populate hobbies array with selected values
            hobbies.push(checkboxes[i].value);
        }
    }
    
	/* // Defining error variables with a default value
    var nameErr = emailErr = mobileErr = countryErr = genderErr = true; */
    
    // Validate name
    if(firstname == "") {
        document.getElementById("err1").innerHTML = "please fill out this feild";
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(firstname) === false) {
            document.getElementById("err1").innerHTML = "please fill out this feild";
            document.getElementById("err1").innerHTML.style.display = "block";
        } else {
            document.getElementById("err1").innerHTML.style.display = "none";
            nameErr = false;
        }
    }
    if(lastname == "") {
        document.getElementById("err2").innerHTML = "please fill out this feild";
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(lastname) === false) {
            document.getElementById("err2").innerHTML = "please fill out this feild";
        } else {
            document.getElementById("err2").innerHTML = "please fill out this feild";
            nameErr = false;
        }
    }
    
    // Validate email address
    if(email == "") {
        document.getElementById("err3").innerHTML = "please fill out this feild";
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            document.getElementById("err3").innerHTML = "please fill out this feild";
        } else{
            document.getElementById("err3").innerHTML = "please fill out this feild";
            emailErr = false;
        }
    }
    
    // Validate mobile number
    if(mobile == "") {
        document.getElementById("err4").innerHTML = "please fill out this feild";
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            document.getElementById("err4").innerHTML = "please fill out this feild";
        } else{
            document.getElementById("err4").innerHTML = "please fill out this feild";
            mobileErr = false;
        }
    }
    
    // Validate country
    if(subject == "Select") {
        document.getElementById("err5").innerHTML = "please fill out this feild";
    } else {
        document.getElementById("err5").innerHTML = "please fill out this feild";
        countryErr = false;
    }
    
    // Validate gender
    if(gender == "") {
        document.getElementById("err6").innerHTML = "please fill out this feild";
    } else {
        document.getElementById("err6").innerHTML = "please fill out this feild";
        genderErr = false;
    }
    
   // Prevent the form from being submitted if there are any errors
    if((nameErr || emailErr || mobileErr || countryErr || genderErr) == true) {
       return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + firstname + "\n" +
                          "Last Name: " + lastname + "\n" +
                          "Email Address: " + email + "\n" +
                          "Mobile Number: " + mobile + "\n" +
                          "Country: " + country + "\n" +
                          "Gender: " + gender + "\n";
        if(hobbies.length) {
            dataPreview += "Hobbies: " + hobbies.join(", ");
        }
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    }
};