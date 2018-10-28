var timer;
var bottomLine = 500;
var yScale = 20;

var arr = [5,8,2,1,15,2,3,5,9,11,10,4,3,14,1,7,10,3,2,13];
var i = 0;

drawSin();

function drawSin(){
	var color = 'red';
	if (arr[i] <= 5)
		color = 'green';
	else if (arr[i] <= 10)
		color = 'yellow';
	
	document.body.innerHTML += "<div style='float: left; width: 20px; "+
	" height: " + arr[i] * yScale + "px; margin-top: " + (bottomLine - arr[i] * yScale) + "px;"+
	" background-color: " + color + "; margin-left: 2px; text-align: center;'>" + arr[i] + "</div>";
	i++;
	if (i < arr.length)
		timer = setTimeout(drawSin, 100);
}