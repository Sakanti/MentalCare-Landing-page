function handleGetFormData() {
    let name = document.getElementById("name").value
    let city = document.getElementById("city").value
    let email = document.getElementById("email").value
    let zipCode = document.getElementById("zip-code").value
    let status = document.getElementById("status").checked

    return { name, city, email, zipCode, status };
}

function isNumber(str) {
    return !isNaN(str);
}

function checkboxIsChecked() {
    return document.getElementById("status").checked;
}

function validateFormData(formData) {
	if (!formData) {
			return false;
		}

	if (!isNumber(formData.zipCode) || !checkboxIsChecked()) {
			return false;
		}

	return true;
}

function submit(){ 
    warningDiv =document.getElementById("warning");

    if (!validateFormData(handleGetFormData())){
        warningDiv.innerHTML = "Periksa form anda sekali lagi";
    }
    else{
        warningDiv.innerHTML=" ";
    }
}

document.getElementById('Form').addEventListener('submit', (event)=>{
    event.preventDefault();
    submit();
})


function submit(){ 
    warningDiv =document.getElementById("warning");

    if (!validateFormData(handleGetFormData())){
        warningDiv.innerHTML = "Periksa form anda sekali lagi";
    }
    else{
        warningDiv.innerHTML=" ";
    }
}

document.getElementById('Form').addEventListener('submit', (event)=>{
    event.preventDefault();
    submit();
})
