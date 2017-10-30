function Person(name, street) {
    this.name = name;
    this.street = street;

    this.xPos = 0;
    this.yPos = 0;

    this.info = function () {
        return "My name is " + this.name;
    }
};

var me = new Person("Bartosz Malinowski", "Logan Gd");

document.write(me.info() + "<br />");
document.write((me instanceof Person) + "<br />");

function changeName(person, newName) {
    person.name = newName;
}

changeName(me, "Anna Malinowska");

document.write(me.info() + "<br />");

//prototypes
function getSum(num1, num2) {
    return num1 + num2;
}

document.write("Num of arguments " + getSum.length + '<br />');

Person.prototype.sound = "Hello";
Person.prototype.makeSound = function() {
    return this.name + " says " + this.sound;
};

document.write(me.makeSound() + '<br />')

for (var prop in me) {
    document.write(prop + " : " + me[prop] + '<br />')
}

//must be a prototype !!!
Object.defineProperty(Person.prototype, "pointPos", {
    get: function() {
        return "X : " + this.xPos + " Y : " + this.yPos;
    },
    set: function(thePoint) { 
        var parts = thePoint.toString().split(", ");
        this.xPos = parts[0] || "";
        this.yPos = parts[1] || "";
    }
});

me.pointPos = "100, 200";

document.write("The position is: " + me.pointPos + '<br />')