// When the page loads, set the status to online or offline
function loadDemo() {

    if (window.applicationCache) {
        console.log("This browser supports offline applications");
    }

    if (navigator.onLine) {
        log("Online");
    } else {
        log("Offline");
    }
}

// Now add event listeners to notify a change in online status
window.addEventListener("online", function(e) {
    log("Online");
}, true);

window.addEventListener("offline", function(e) {
    log("Offline");
}, true);