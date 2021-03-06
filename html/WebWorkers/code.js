//IMPORTANT
//Works only in Firefox = doesn't work in Chrome for local files
function loadDemo() {
    if (typeof(Worker) !== "undefined") {
        console.log("Excellent! Your browser supports Web Workers");
        
        worker = new Worker("echoWorker.js");
        
        worker.addEventListener("message", messageHandler, true);
        worker.addEventListener("error", errorHandler, true);
    }    
}

function messageHandler(e) {
    console.log("Got message from web worker: " + e.data);
}

function errorHandler(e) {
    console.log(e.message, e);
}

document.getElementById("helloButton").onclick = function() {
    worker.postMessage("Here's a message for you");
}

window.addEventListener("load", loadDemo, false);