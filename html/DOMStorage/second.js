function displayStorageEvent(e) {
    console.log(localStorage.length);   
    console.log(e.storageArea);

    var list = document.getElementById("storageItems");

    var newChild = document.createElement("li");
    newChild.textContent = "key:" + e.key + ", newValue:" + e.newValue + ", oldValue:" + e.oldValue +", url:" + e.url + ", storageArea:" + e.storageArea;
    list.appendChild(newChild);
}

window.addEventListener("storage", displayStorageEvent, true);