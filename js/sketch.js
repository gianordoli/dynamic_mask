var p5Canvas;	// canvas

var img;		// original image
var pg;			// mask

var button;		// apply mask
var isDrawing;	// toggle mask/drawing display

function preload() {
	img = loadImage('img/animation_00.png');	
}

function setup() {
	p5Canvas = createCanvas(640, 360);

	pg = createGraphics(640, 360);
	pg.noStroke();

	isDrawing = true;

	button = createButton('Apply Mask');
	button.mousePressed(applyMask);
}

function draw() {
	background(255, 0, 0);
	image(img, 0, 0);

	if(isDrawing){
		image(pg, 0, 0, pg.width, pg.height);
	}
}

function mouseDragged(){
	pg.ellipse(mouseX, mouseY, 10, 10);
}

function applyMask(){
	img.mask(pg);	
	isDrawing = false;
}