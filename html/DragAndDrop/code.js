// these arrays hold the names of the members who are
// chosen to be racers and volunteers, respectively
var racers = [];
var volunteers = [];

// these variables store references to the visible
// elements for displaying who is a racer or volunteer
var racersList;
var volunteersList;

function loadDemo() {
    racersList = document.getElementById("racers");
    volunteersList = document.getElementById("volunteers");
    
    // our target lists get handlers for drag enter, leave, and drop
    var lists = [racersList, volunteersList];
    
    [].forEach.call(lists, function(list) {
        list.addEventListener("dragenter", handleDragEnter, false);
        list.addEventListener("dragleave", handleDragLeave, false);
        list.addEventListener("drop", handleDrop, false);
    });
    
    // each target list gets a particular dragover handler
    racersList.addEventListener("dragover", handleDragOverRacers, false);
    volunteersList.addEventListener("dragover", handleDragOverVolunteers, false);
    
    // the fieldsets around our lists serve as buffers for resetting
    // the style during drag over
    var fieldsets = document.querySelectorAll("#racersField, #volunteersField");
    [].forEach.call(fieldsets, function(fieldset) {
        fieldset.addEventListener("dragover", handleDragOverOuter, false);
    });

    // each draggable member gets a handler for drag start and end
    var members = document.querySelectorAll("#members li");
    [].forEach.call(members, function(member) {
        member.addEventListener("dragstart", handleDragStart, false);
        member.addEventListener("dragend", handleDragEnd, false);
    });
}
window.addEventListener("load", loadDemo, false);

// make sure to clean up any drag operation
function handleDragEnd(evt) {
    // restore the potential drop target styles
    racersList.className = null;
    volunteersList.className = null;
    return false;
}

// when the user drops on a target list, transfer the data
function handleDrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    
    var dropTarget = evt.target;
    
    // use the text flavor to get the name of the dragged item
    var text = evt.dataTransfer.getData("text/plain");
    var group = volunteers;
    var list = volunteersList;
    
    // if the drop target list was the racer list, grab an extra
    // flavor of data representing the member age and prepend it
    if ((dropTarget.id != "volunteers") && (dropTarget.parentNode.id != "volunteers")) {
        text = evt.dataTransfer.getData("text/html") + ": " + text;
        group = racers;
        list = racersList;
    }

    // for simplicity, fully clear the old list and reset it
    if (group.indexOf(text) == -1) {
        group.push(text);
        group.sort();
        // remove all old children
        while (list.hasChildNodes()) {
            list.removeChild(list.lastChild);
        }

        // push in all new children
        [].forEach.call(group, function(person) {
            var newChild = document.createElement("li");
            newChild.textContent = person;
            list.appendChild(newChild);
        });
    }
    return false;
}

// if the user drags over our list, show
// that it allows copy and highlight for better feedback
function handleDragOverRacers(evt) {
    //dataTransfer object is accessible on every drag and drop event
    evt.dataTransfer.dropEffect = "copy";
    evt.stopPropagation();
    evt.preventDefault();
    racersList.className = "highlighted";
    return false;
}
function handleDragOverVolunteers(evt) {
    evt.dataTransfer.dropEffect = "copy";
    evt.stopPropagation();
    evt.preventDefault();
    volunteersList.className = "highlighted";
    return false;
}

// for better drop feedback, we use an event for dragging
// over the surrounding control as a flag to turn off
// drop highlighting
function handleDragOverOuter(evt) {
    // due to Mozilla firing drag over events to
    // parents from nested children, we check the id
    // before handling
    if (evt.target.id == "racersField")
        racersList.className = "validtarget";
    else if (evt.target.id == "volunteersField")
        volunteersList.className = "validtarget";
    
    evt.stopPropagation();
    return false;
}

// called at the beginning of any drag
function handleDragStart(evt) {
    // our drag only allows copy operations
    evt.effectAllowed = "copy";
    
    // the target of a drag start is one of our members
    // the data for a member is either their name or age
    evt.dataTransfer.setData("text/plain", evt.target.textContent);
    evt.dataTransfer.setData("text/html", evt.target.dataset.age);
    
    // highlight the potential drop targets
    racersList.className = "validtarget";
    volunteersList.className = "validtarget";
    
    return true;
}

// stop propagation and prevent default drag behavior
// to show that our target lists are valid drop targets
function handleDragEnter(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    return false;
}

function handleDragLeave(evt) {
    return false;
}



