
function keyPressed(){
  if(keyCode === 79){//up ARROW
    s.dir(0,-1)
  }
  if(keyCode === 76){//down
    s.dir(0,1)
  }
  if(keyCode=== 186){//right
    s.dir(1,0)
  }
  if(keyCode === 75){//left
    s.dir(-1,0)
  }
  if(keyCode === 80){
    f.newFood();
  }
  if(keyCode === 87){
    p.dir(0,-1)
  }
  if(keyCode === 65){
    p.dir(-1,0)
  }
  if(keyCode === 68){
    p.dir(1,0)
  }
  if(keyCode === 83){
    p.dir(0,1)
  }
}
