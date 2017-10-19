var posX = 400;
var posY = 300;

var radius = 20;

function setup() {
	createCanvas(800, 600);	
}

function draw() {
	clear();
	background("#DDDDDD");

	ellipse(posX, posY, radius, radius);

	posX -= 2;
}