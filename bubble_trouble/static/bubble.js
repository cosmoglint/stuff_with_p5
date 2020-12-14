function Bubble(x,y,size){
  this.xpos = x;
  this.ypos = y;
  this.size = size;
  this.radius = this.size/2;
  this.velocity = createVector(0,1);
}

Bubble.prototype.show = function(){
  circle(this.xpos,this.ypos,this.size);
}

Bubble.prototype.collision = function(){
  if ((this.ypos + this.radius) >= groundy){
    this.velocity.y = -1;
  }
  else if ((this.ypos - this.radius) <= 0) {
    this.velocity.y = 1;
  }
  else{

  }
}

Bubble.prototype.gravity = function(){
  this.ypos += (gravity_value * this.velocity.y);
}
