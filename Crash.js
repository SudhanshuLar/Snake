function Crash(x,y){
  this.sx = s.x;
  this.sy = s.y;
  this.px = p.x;
  this.py = p.y;
  this.blocks = s.total+p.total;
//  this.xlength = [s.tailx, p.tailx];
//  this.ylength = [s.taily, p.taily];
  this.xlength = new Array(this.blocks);
  this.ylength = new Array(this.blocks);



  for(var i = 0;i<s.total;i++){
    this.xlength[i] = s.tailx[i];
    this.ylength[i] = s.taily[i];
  }

  for(var j = s.total;j<this.blocks;j++){
    this.xlength[j] = p.tailx[j-s.total];
    this.ylength[j] = p.taily[j-s.total];
  }

  console.log(this.xlength);

  for(i = 0;i<this.blocks;i++){

    if(abs(this.ylength[i] - y)<2 && abs(this.xlength[i] - x)<2){
      return true;

  }
}


}
