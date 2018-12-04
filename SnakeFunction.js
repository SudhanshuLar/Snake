function Snakes(xStart,yStart){


this.x = xStart;
this.y = yStart;
this.speedx = 0;
this.speedy = 0;
this.total = 1;
this.tailx = [];
this.taily = [];
this.current = 0;


this.dir = function(x,y){
  if(this.speedx === (-x) && this.speedy ===(-y)){
}else{
  this.speedx = x;
  this.speedy = y;
}
}

this.death = function(){
  //for(var i = 0; i < this.total-1;i++){
  //if(abs(this.x- this.tailx[i])<1 && abs(this.y - this.taily[i])<1){

  //if(this.total>1){
  if(Crash(this.x,this.y) === true){
  this.total = 1;
  this.tailx = [];
  this.taily = [];
  this.x = xStart;
  this.y = yStart;
  this.speedx = 0;
  this.speedy = 0;
}
//}}
}

this.move= function(){
  if(this.total === this.current){
    for(var i = 0;i < this.total-1;i++){
      this.tailx[i] = this.tailx[i+1];
      this.taily[i] = this.taily[i+1];
    }
  }
  else
    {
    this.current = this.total;
    }

  this.tailx[this.total-1] = this.x;
  this.taily[this.total-1] = this.y;

  this.x = this.x+this.speedx*scl;
  this.y = this.y+this.speedy*scl;
  this.x = constrain(this.x, 0, width-scl);
  this.y = constrain(this.y ,0, height-scl);

}

this.draw = function(r,g,b){
  fill(r,g,b);
  for(var i = 0;i <= this.total-1;i++){
  rect(this.tailx[i],this.taily[i],scl,scl);
}
}

this.munch = function(x,y){
if (abs(this.x-x) < 2){
  if(abs(this.y-y)<2){
    f.newFood();
    this.total++;
  }
}
}


}
