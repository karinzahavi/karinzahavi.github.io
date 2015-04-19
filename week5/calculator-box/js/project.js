var total = 0;

document.getElementById("a10").onclick = addTen;

function addTen () {
	total = total + 10;

	document.getElementById("out").innerHTML = total;
}

document.getElementById("a20").onclick = addTwenty;

function addTwenty () {
	total = total + 20;

	document.getElementById("out").innerHTML = total;
}

document.getElementById("a30").onclick = addThirty;

function addThirty () {
	total = total + 30;

	document.getElementById("out").innerHTML = total;
}

document.getElementById("n10").onclick = subtractTen;

function subtractTen () {
	total = total - 10;

	document.getElementById("out").innerHTML = total;
}

document.getElementById("n20").onclick = subtractTwenty;

function subtractTwenty () {
	total = total - 20;

	document.getElementById("out").innerHTML = total;
}

document.getElementById("n30").onclick = subtractThirty;

function subtractThirty () {
	total = total - 30;

	document.getElementById("out").innerHTML = total;
}

document.getElementById("red").onclick = redColor;

function redColor () {
	document.getElementById("out").style.backgroundColor = "red";
}

document.getElementById("blue").onclick = blueColor;

function blueColor () {
	document.getElementById("out").style.backgroundColor = "blue";
}

document.getElementById("out").onclick = outColor;

function outColor () {
	document.getElementById("out").style.backgroundColor = "white";
}


// BELOW IS SCRATCH CODE THAT I TRIED BEFORE I LANDED ON THE RIGHT SOULTION
// var amount = 0;
// var color = "";

// document.getElementById("app").onclick = amountCalculator

// function amountCalculator () {
// 	amount = document.getElementById("out").value;
// 	document.getElementById("a10") = amount + 10;
// 	document.getElementById("a20") = amount + 20;
// 	document.getElementById("a30") = amount + 30;
// 	document.getElementById("a10") = amount - 10;
// 	document.getElementById("a20") = amount - 20;
// 	document.getElementById("a30") = amount - 30;

// 	document.getElementById("out").innerHTML = amount;
// }

// function colorCalculator () {

// 	document.getElementById("out").style.backgroundColor = color;

// ________________

// var amount;

// document.getElementById("a10").onclick = a10Calculator

// function a10Calculator () {
// 	amount = document.getElementById("out").value;
// 	document.getElementById("a10") = amount + 10;

// 	document.getElementById("out").innerHTML = amount;
// }
// ________________

// document.getElementById("red").onclick = redColor;

// function redColor () {
// 	document.getElementById("out").style.backgroundColor = "red";
// }

// document.getElementById("blue").onclick = blueColor;

// function blueColor () {
// 	document.getElementById("out").style.backgroundColor = "blue";
// }

// document.getElementById("out").onclick = outColor;

// function outColor () {
// 	document.getElementById("out").style.backgroundColor = "white";
// }

// ________________

// var count = 0;

// document.getElementById("a10").onclick = a10;

// function a10 () {
// 	var total = count + 10;

// 	document.getElementById("out").innerHTML = total;
// }

// document.getElementById("a20").onclick = a20;

// function a20 () {
// 	var total = count + 20;

// 	document.getElementById("out").innerHTML = total;
// }

