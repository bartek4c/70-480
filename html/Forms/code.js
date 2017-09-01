var counter = 0;    
var interval;


function runProgressBar() {
    var interval = setInterval(function() { growBar() }, 1000)
}

function growBar() {
    counter += 1;
    document.getElementById("bar").setAttribute("value", counter);
    if (counter == 100) {
        growStop();
    }

    
}

function growStop() {
    clearInterval(interval);
}

runProgressBar();

//validate form
document.getElementById("mrButton").onclick = function () {
    var valCheck = document.myForm.myInput.validity;
    console.log(valCheck.valid);
}

function invalidHandler2(evt) {
    var validity = evt.srcElement.validity;

    if (validity.valueMissing) {
        console.log("value missing")
    }
    if (validity.typeMismatch) {
        console.log("type mismatch")
    }

    evt.stopPropagation();
    evt.preventDefault();
}

function invalidHandler(evt) {
    // find the label for this form control
    var label = evt.srcElement.parentElement.getElementsByTagName("label")[0];
    // set the label's text color to red
    label.style.color = 'red';
    // stop the event from propagating higher
    evt.stopPropagation();
    // stop the browser's default handling of the validation error
    evt.preventDefault();
}

function loadDemo() {
    document.myForm.emailField.addEventListener("change", (evt) => {
        console.log(evt);
        document.myForm.emailField.checkValidity();
    });
    document.myForm.emailField.addEventListener("invalid", invalidHandler2, false);

    // register an event handler on the form to
    // handle all invalid control notifications
    document.register.addEventListener("invalid", invalidHandler, true);
}

window.addEventListener("load", loadDemo, false);


