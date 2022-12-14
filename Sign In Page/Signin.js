let arrData=JSON.parse(localStorage.getItem("signup")) || [];
let email=document.getElementById("email");
let password=document.getElementById("password");
arrData.forEach((element) => {
    console.log(element.email)
});