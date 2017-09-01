if (typeof window.postMessage === "undefined") {
    console.log("postMessage not supported in this browser");
} else {
    console.log("postMessage supported");
}

var xhr = new XMLHttpRequest()
if (typeof xhr.withCredentials === undefined) {
    console.log("Your browser does NOT support cross-origin XMLHttpRequest");
} else {
    console.log("Your browser does support cross-origin XMLHttpRequest");
}