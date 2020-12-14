function Bubble(x,y,size){
  this.xpos = x;
  this.ypos = y;
  this.size = size;
  this.radius = this.size;
  this.velocity = createVector(0,1);
}

Bubble.prototype.show = function(){
  circle(this.xpos,this.ypos,this.size);
}

Bubble.prototype.collision = function(){
  if (this.ypos + this.radius >= ground){
    this.velocity.y == -1
  }
}

Bubble.prototype.gravity = function(){
  this.ypos += gravity_value * this.velocity;
}
