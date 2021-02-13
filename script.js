// let today = new Date();
// let hoursNow = today.getHours();
// let greeting = "";

// if (hoursNow > 18) {
//   greeting += "Good Evening!";
// } else if (hoursNow > 12) {
//   greeting += "Good Afternoon!";
// } else if (hoursNow > 0) {
//   greeting += "Good Morning!"
// } else {
//   greeting += "Welcome!";
// }


// document.open();
// document.write("<h3>" + greeting + "</h3>")
// document.close();


// let price;
// let quantity;
// let total;
// price = 5;
// quantity = 14;
// total = price * quantity;
// let el = document.querySelector("#cost");
// el.textContent = "$" + total;



// let title;
// let greeting;

// title = "Molly's Special Offers";
// message = '<a href=\"sale.html\">25% off!</a>';

// let user = document.querySelector("#title");
// user.innerHTML = title;
// let allDisplays = document.querySelector("#note");
// allDisplays.innerHTML = message;


// let inStock;
// let shipping;

// inStock = true;
// shipping = false;

// let el = document.querySelector("#stock");
// el.className = inStock;
// let elShip = document.querySelector("#shipping");
// elShip.className = shipping;

// let colors;
// colors = ['white', 'black', 'custom'];

// colors[2] = "biege";

// let el = document.querySelector("#colors");
// el.textContent = colors[2];


// let subtotal = ((13 + 1) * 5);
// let shipping = (0.5 * (13 + 1));
// let sumTotal = subtotal + shipping;

// let elSub = document.querySelector("#sub-total");
// elSub.textContent = subtotal;

// let elShip = document.querySelector("#shipping-p");
// elShip.textContent = shipping;

// let elTotal = document.querySelector("#total-x");
// elTotal.textContent = sumTotal;


// let greeting = "Akwaaba", name = "Walker";

// let welcomeMessage = greeting + " " + name + "!";

// let el = document.querySelector("#greeting");
// el.textContent = welcomeMessage;


let firstName = "Samed", lastName = "Walker", 
orderMessage = "please check your order";

let welcomeGreeting = firstName + " " + lastName + ", " + orderMessage + ":";

let sign = " Montague House";
sign.length;
let cost = 10;
let costTiles = sign.length * cost;
let shipping = 7;

let allTotals = costTiles + shipping;

let welcomeMsg = document.querySelector("#greeting");
welcomeMsg.textContent = welcomeGreeting;


let signMsg = document.querySelector("#customSign");
signMsg.textContent = sign;

let signLength = document.querySelector("#totaltiles");
signLength.textContent = sign.length;

let costTotal = document.querySelector("#subtotal");
costTotal.textContent = "$" + costTiles;

let shippingCost = document.querySelector("#shipping");
shippingCost.textContent = "$" + shipping;

let allDisplays = document.querySelector("#grandTotal");
allDisplays.textContent = "$" + allTotals;



















