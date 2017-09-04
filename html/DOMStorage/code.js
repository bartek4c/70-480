if (window.sessionStorage)
    console.log("Session storage supported");
if (window.localStorage)
    console.log("Local storage supported");

var number = 0;

function loadDemo() {
    console.log(sessionStorage.length);
    console.log(sessionStorage.getItem("myFirstKey"));
    console.log(sessionStorage.mySecondKey);
    console.log(sessionStorage["myThirdKey"]);
}

document.getElementById("setStorage").onclick = function() {
    //will be preserved between the sessions
    sessionStorage.setItem("myFirstKey", "myFirstValue");
    sessionStorage.mySecondKey = "mySecondValue";
    sessionStorage["myThirdKey"] = "myThirdValue";
}

document.getElementById("addToStorage").onclick = function() {
    localStorage.setItem(number, "value" + number);
    number += 1;
}

document.getElementById("clearStorage").onclick = function() {
    localStorage.clear();
    number = 0;
}

window.addEventListener("load", loadDemo, false);
