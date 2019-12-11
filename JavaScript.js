function validateRegister() {
    var name        = document.getElementById("name").value;
    var username    = document.getElementById("usname").value;
    var email       = document.getElementById("email").value;
    var password    = document.getElementById("pass").value;

    if (name != "" && username != "" && email != "" && password != "") {
        return true;
    }
    else {
        alert('Anda harus mengisi form dengan lengkap!');
    }        
}
function validateLogin() {
    var email       = document.getElementById("Email").value;
    var password    = document.getElementById("Pass").value;

    if (email != "" && password != "") {
        return true;
    }
    else if (form.email.value == "admin" && form.password.value == "admin") {
        // return true;
        window.open('admin_Wisata.html')
    }
    else {
        alert('Form login harus diisi dengan benar !');
    }
}