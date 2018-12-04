var scl = 10;
var s;
function setup() {
  createCanvas(500, 500);
  frameRate(20);
  s = new Snakes(100,100);
  p = new Snakes(300,300);
  f = new Food();
  f.newFood();
}



function draw() {
	background(0)
  s.move();
  s.draw(0,255,0);
  s.death();
  p.move();
  p.draw(0,0,255);
  p.death();
  f.drawFood();
  //Crash();
}
