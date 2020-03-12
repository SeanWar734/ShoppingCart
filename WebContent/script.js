let list = [];

let button1 = document.getElementById("add1");
let button2 = document.getElementById("add2");
let button3 = document.getElementById("add3");
let cartButton = document.getElementById("cartButton");

let orange = {
		name: "orange",
		price: 1}

let banana = {
		name: "banana",
		price: 2}

let apple = {
		name: "apple",
		price: 100}

/////////////////////////////////////////////////////////////////////////////////////////////

function addOrange() {
	oranges = parseInt(document.getElementById("numOranges").textContent);
	theTotal = parseInt(document.getElementById("total").textContent);
	
	oranges += 1;
	theTotal += 1;
	
	numOranges.innerText = oranges;
	total.innerText = theTotal;
}

function addBanana() {
	bananas = parseInt(document.getElementById("numBananas").textContent);
	theTotal = parseInt(document.getElementById("total").textContent);
	
	bananas += 1;
	theTotal += 2;
	
	numBananas.innerText = bananas;
	total.innerText = theTotal;
}

function addApple() {
	apples = parseInt(document.getElementById("numApples").textContent);
	theTotal = parseInt(document.getElementById("total").textContent);
	
	apples += 1;
	theTotal += 100;
	
	numApples.innerText = apples;
	total.innerText = theTotal;
}

/////////////////////////////////////////////////////////////////////////////////////////////

button1.addEventListener("click", (event) => {
	let window1 = document.getElementById("cart");
	list.push(orange);
	addOrange();
	window1.innerHTML = "<p>ADDED Orange $1<p>";
});

button2.addEventListener("click", (event) => {
	let window1 = document.getElementById("cart");
	list.push(banana);
	addBanana();
	window1.innerHTML = "<p>ADDED Banana $2<p>";
});

button3.addEventListener("click", (event) => {
	let window1 = document.getElementById("cart");
	list.push(apple);
	addApple();
	window1.innerHTML = "<p>ADDED Apple $100<p>";
});

/////////////////////////////////////////////////////////////////////////////////////////////

cartButton.addEventListener("click", (event) => {
	theTotal = parseInt(document.getElementById("total").textContent);
	list.unshift(theTotal);
	alert(JSON.stringify(list));
});