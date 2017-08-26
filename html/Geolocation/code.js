function loadDemo() {
    if(navigator.geolocation) {
        console.log("Geolocation supported.");
        /*
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback,
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 10000
            }
        );
        */

        var watchId = navigator.geolocation.watchPosition(successCallback, errorCallback);

        navigator.geolocation.clearWatch(watchId);
    } else {
        console.log("Geolocation is not supported in your browser.");
    }
}

loadDemo();

//fetching data may take a while
function successCallback(position)
{
    console.log(position);
}

function errorCallback(error) {
    console.log(error);
    switch(error.code){
        case 0:
            updateStatus("There was an error while retrieving your location: " + error.message);
            break;
        case 1:
            updateStatus("The user prevented this page from retrieving a location.");
            break;
        case 2:
            updateStatus("The browser was unable to determine your location: " + error.message);
            break;
        case 3:
            updateStatus("The browser timed out before retrieving the location.");
            break;
    }
}

function updateStatus(status) {
    console.log(status);
}