function changeColor(){
	var redColor = document.getElementById("red").value;
	var greenColor = document.getElementById("green").value;
	var blueColor = document.getElementById("blue").value;
	
	var newColor = "rgb("+redColor+","+greenColor+","+blueColor+")";

	document.body.style.backgroundColor = newColor;
	document.getElementById("colorfultext").innerHTML = newColor;
}

document.getElementById("colorbutton").onclick = changeColor;