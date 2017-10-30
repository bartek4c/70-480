
document.write("5 + 5 = ", 5 + 5, "<br />");
document.write("5 + 5 = ", 10, "<br />");
document.write("5 + 5 = " + 10, "<br />");

document.write("Max Num = ", Number.MAX_VALUE, "<br />");
document.write("Min Num = ", Number.MIN_VALUE, "<br />");

var balance = 1563.87;
document.write("Monthly payment : ", (balance / 12).toFixed(2 ), "<br />");

document.write("math random : ", Math.ceil(Math.random() * 10), "<br />");

var randStr = "A long string that goes and goes"
document.write(randStr.substr(19, 4), "<br />");
document.write(randStr.slice(19, 23), "<br />");

var customer = {name: "Bob", address: "123 Martin", age: 37}
for (c in customer) {
    document.write(customer[c] + "<br />")
}

var numbers = [4,6,7,1,20,13];
numbers.sort(function(x,y){return x -y});

document.write("Num array : ", numbers.toString(), "<br />");

var paragraph = document.createElement("p");

paragraph.setAttribute("id", "paragraph1");