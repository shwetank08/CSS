const names = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const gender = document.getElementById('gender');
const dob = document.getElementById('date');
const age = document.getElementById('age');
const color = document.getElementById('color');


function handleSubmit (event){
    event.preventDefault();
    if(!names.value || !email.value || !password.value|| !gender.value || !dob.value || !color.value || !age.value){
        console.log("All fields are mandatory!");
        alert("All fields are mandatory!");
    }else{
        names.value = "";
        email.value = "";
        password.value = "";
        gender.value = "";
        dob.value = "";
        age.value = "";
        color.value = "";
        console.log("Form Validation Success");
        alert("Form Validation Success")
    }
}
