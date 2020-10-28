function slashed(x,y,orientation){
  this.x = x;
  this.y = y;
  this.orientation = orientation;
}

slashed.prototype.show = function(){
  stroke('white');
  if (this.orientation == "backward"){
    line(this.x,this.y,this.x+mover,this.y+mover);
  }
  else {
    line(this.x,this.y+mover,this.x+mover,this.y);
  }
}

slashed.prototype.flip = function(){
  // this.orientation = (this.orientation == "backward") ? ("forward") : "backward";
  this.orientation = orientation_generator();
  fill('black');
  noStroke();
  rect(this.x - 1,this.y - 1,mover);
  // this.show();
}

slashed.prototype.hovered = function(){
  centerx = this.x + mover/2;
  centery = this.y + mover/2;
  d = dist(mouseX,mouseY,centerx,centery);
  if (d<100){
    this.flip();
  }
}
