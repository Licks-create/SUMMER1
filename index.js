
const nameLabel = document.querySelector('label[for="name"]');
const passwordLabel = document.querySelector('label[for="password"]');
const name = document.getElementById("name");
const password = document.getElementById("password");
nameLabel.onmouseenter = displace;
passwordLabel.onmouseenter = displace;
name.onmouseout = authetincate;
password.onmouseout = authetincate;

function displace(e) {
  this.style.top = "0px";
  document.getElementById(this.getAttribute("for")).style.width = "100%";
  console.log(document.getElementById(this.getAttribute("for")));
}
function authetincate(e) {
  if (name.value.length === 0) {
    nameLabel.style.top = "25px";
    name.style.width = "0%";
}
if (password.value.length === 0) {
    passwordLabel.style.top = "25px";
    password.style.width = "0px";
}
}