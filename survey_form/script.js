const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const dob = document.querySelector('#dob');
const country = document.querySelector('#country');
const male = document.querySelector('#male');
const female = document.querySelector('#female');
const profession = document.querySelector('#profession');
const email = document.querySelector('#email');
const mobile = document.querySelector('#mobile');
const submit = document.querySelector('#submit');
const reset = document.querySelector('#reset');




function isFormValid() {
    return (
        fname.value !== '' &&
        lname.value !== '' &&
        dob.value !== '' &&
        country.value !== '' &&
        (male.checked || female.checked) &&
        profession.value !== '' &&
        email.value !== '' &&
        mobile.value !== ''
    );
}


function resetForm(){
        fname.value = '';
        lname.value = '';
        dob.value = '';
        country.value = '';
        male.checked = false;
        female.checked = false;
        profession.value = '';
        email.value = '';
        mobile.value = '';
}



submit.addEventListener('click', (e) => {
    e.preventDefault(); 

    if (isFormValid()) {
        const confirmationMessage = `
            Confirm your details:

            First Name:   ${fname.value}
            Last Name:    ${lname.value}
            Date of Birth: ${dob.value}
            Country:       ${country.value}
            Gender:        ${male.checked ? 'Male' : 'Female'}
            Profession:    ${profession.value}
            Email:         ${email.value}
            Mobile:        ${mobile.value}
        `;
        

        resetForm();

        if (confirm(confirmationMessage)) {
            document.querySelector('form').submit(); 
        }
    } else {
        window.alert("Please fill in all the required fields before submitting.");
    }

});



reset.addEventListener('click', (e) => {

    e.preventDefault();
    const confirmReset = confirm("Are you sure you want to reset the form? Your data will be lost.");
    

    if (confirmReset) {
        resetForm();
    }
});
