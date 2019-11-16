/* javscript form stuff */
var title = document.getElementById("TitleChange");
var welcomeText = document.getElementById("WelcomeText");
var paymentText = document.getElementById("PaymentText");
var nameButton = document.getElementById("Next2");
var Submit = document.getElementById("submit");

var plan1 = document.getElementById("Plan1");
var plan2 = document.getElementById("Plan2");
var plan3 = document.getElementById("Plan3");

var radio1 = document.getElementsByClassName('radio')[0];
var radio2 = document.getElementsByClassName('radio')[1];
var radio3 = document.getElementsByClassName('radio')[2];

plan1.addEventListener("click", Plan1Chosen);
plan2.addEventListener("click", Plan2Chosen);
plan3.addEventListener("click", Plan3Chosen);

// Make the plan chosing from radio buttons to semi accual buttons with javascript

function Plan1Chosen() {
    radio1.checked;
    console.log("checked1");
    plan1.style.color = "#282D2D";
    plan1.style.backgroundColor = "white";
    radio2.checked = false;
    radio3.checked = false;
    plan2.style.color = "white";
    plan3.style.color = "white";
    plan2.style.backgroundColor = "transparent";
    plan3.style.backgroundColor = "transparent";
}

function Plan2Chosen() {
    radio2.checked;
    console.log("checked2");
    plan2.style.color = "#282D2D";
    plan2.style.backgroundColor = "white";
    radio1.checked = false;
    radio3.checked = false;
    plan1.style.color = "white";
    plan3.style.color = "white";
    plan1.style.backgroundColor = "transparent";
    plan3.style.backgroundColor = "transparent";
}

function Plan3Chosen() {
    radio3.checked;
    console.log("checked3");
    plan3.style.color = "#282D2D";
    plan3.style.backgroundColor = "white";
    radio1.checked = false;
    radio2.checked = false;
    plan1.style.color = "white";
    plan2.style.color = "white";
    plan1.style.backgroundColor = "transparent";
    plan2.style.backgroundColor = "transparent";
}
var pButton = document.getElementById("Next1");
var conButton = document.getElementById("Next3");
var planChosen = pButton.addEventListener("click", savePlan);
var UserName = nameButton.addEventListener("click", getFirstName);
var LastName = nameButton.addEventListener("click", getlastName);
// turns off other buttons if one is chosen
function savePlan() {
    if (radio1.checked == true) {
        console.log(radio1.value);
        changeWelcomeText(radio1.value)
        return radio1.value;
    } else if (radio2.checked == true) {
        console.log(radio2.value);
        changeWelcomeText(radio2.value)
        return radio2.value;
    } else if (radio3.checked == true) {
        console.log(radio3.value);
        changeWelcomeText(radio3.value)
        return radio3.value;
    } else {
        changeWelcomeText('subscription')
    }
}
// Changes the welcome text with the user's input
function changeWelcomeText(planChosen) {
    welcomeText.innerHTML = "Welcome to the Zooli Family, a new aged streaming service with over 60,000 titles globally. \
	 You will recieve an email in your mailbox shortly containing all you need to get set up as part of your " + planChosen + " . Happy Streaming!";
}
// Changes the welcome text with the user's input
function getFirstName() {
    UserName = document.getElementById("Fname").value;
    title.innerHTML = "Welcome to Zooli, " + UserName;
    console.log(UserName)
    return UserName;

}
