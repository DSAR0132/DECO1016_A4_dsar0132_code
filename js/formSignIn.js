var btn = document.getElementById("signIn");
var btn2 = document.getElementById("SignOut");
var navbtn = document.getElementById("navLog");
var x = document.getElementsByClassName("signInPart");
var start = true;
// Ensures that Login in is displayed when first clicked
if (start == true) {
    x[1].style.display = "none";
    x[0].style.display = "block";
    console.log("true");
    start = false;
}
// Form Valiation to ensure that when the sign in button is pressed everything is filled in 
window.onload = function() {
    var form = document.getElementsByClassName('signInPart')[0];
    btn.onclick = function() {
        for (var i = 0; i < form.elements.length; i++) {
            if (form.elements[i].value === '' && form.elements[i].hasAttribute('required')) {
                form.elements[i].classList.add("invaild");
                alert('Please fill out all Fields!');
                return false;
            }
        }
        Next();
    };
};
// Goes to next part of form
function Next() {
    x[0].style.display = "none";
    x[1].style.display = "block";
    console.log("1");
    navbtn.value = "Sign Out";
    start = false;
}