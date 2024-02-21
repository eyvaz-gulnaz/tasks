
// Phone number validation
function validateNum(phoneNumber){
    let regex1 = /\+994(\s*|\-*)\(50|51|55|70|77\)(\s*|\-*)\d{3}(\s*|\-*)\d{2}(\s*|\-*)\d{2}/
    if (regex1.test(phoneNumber)) {
        return "Your phone number is available for Azerbaijan"
    } else {
        return "The number is invalid"
    }
}
console.log(validateName(+994554808424));  

// Email address validation

 function validateEmail(email){
    let regex2 = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    if (regex2.test(email)) {
        return "Valid email address"
    } else {
        return "Invalid email address"
    }
} 
    console.log(validateEmail("gul.bax@mail.ru"));


// Password validation 

    function validatePassword(password){
    let regex3 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ 
    if (regex3.test(password)) {
        return "Correct Password"
    } else {
        return "Incorrect Password"
    }
} 
    console.log(validatePassword("$gulnaZ1994"));

// Age validation

    function validateAge(age){
    let regex4 = /^(1[89]|[2-9]\d)$/gm
    if (regex4.test(age)) {
        return "Correct"
    } else {
        return "That is not your age"
    }
} 
    console.log(validateAge("200"));

// Name validation

    function validateName(userName){
    let regex5 = /([a-zA-Z0-9_\s]+)/g
    if (regex5.test(userName)) {
        return "Correct name"
    } else {
        return "Wrong name"
    }
} 
    console.log(validateName("Gulnaz"));

    // All together
    function validateData(userData, regex){
    if (regex.test(userData)) {
        return "Valid"
    } else {
        return "Invalid"
    }
} 
    console.log("phoneNumber: ", validateData(+994554808424, /\+994(\s*|\-*)\(50|51|55|70|77\)(\s*|\-*)\d{3}(\s*|\-*)\d{2}(\s*|\-*)\d{2}/));
    console.log("Email address: ", validateData("gul.bax@mail.ru", /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g));
    console.log("Password: " ,validateData("$gulnaZ1994", /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ ));
    console.log("Age: ", validateData(200, /^(1[89]|[2-9]\d)$/gm));
    console.log("Name: ", validateData("Gulnaz", /([a-zA-Z0-9_\s]+)/g));

