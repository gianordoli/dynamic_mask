var img;
var p5Canvas;
var pg;

function preload() {
	img = loadImage('img/animation_00.png');	
}

function setup() {
	p5Canvas = createCanvas(640, 360);
	pg = createGraphics(640, 360);
	pg.noStroke();
	// pg.fill(0);
	pg.rect(250, 50, 300, 300);
	img.mask(pg);	
}

function draw() {
	background(255, 0, 0);
	image(img, 0, 0);
	// image(pg, 0, 0);
}

function mouseDragged(){

}