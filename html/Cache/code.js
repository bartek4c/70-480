// When the page loads, set the status to online or offline
function loadDemo() {

    if (window.applicationCache) {
        console.log("This browser supports offline applications");
        console.log(window.applicationCache.status);
    }

    if (navigator.onLine) {
        console.log("Online");
    } else {
        console.log("Offline");
    }
}

// Now add event listeners to notify a change in online status
window.addEventListener("online", function(e) {
    console.log("Online");
}, true);

window.addEventListener("offline", function(e) {
    console.log("Offline");
}, true);

loadDemo();