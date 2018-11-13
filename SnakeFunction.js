function Snake(){
this.x = 20;
this.y = 20;
this.speedx = 30;
this.speedy = 30;

this.move(){
  this.x = this.x+this.speedx;
  this.y = this.y+this.speedy;
}
this.draw(){
  fill(0,0,255);
  rect(this.x,this.y);
}

}
