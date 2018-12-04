function Food(){
  this.x;
  this.y;
  this.r;
  this.g;
  this.b;

this.drawFood = function(){
  fill(this.r,this.g,this.b);
  rect(this.x,this.y,scl,scl);
  s.munch(this.x,this.y);
  p.munch(this.x,this.y);
}
  this.newFood = function(){
this.x = floor(random(width/scl))*scl;
this.y = floor(random(height/scl))*scl;
this.r = random(155)+100;
this.g = random(155)+100;
this.b = random(155)+100;
}
}
