function Bubble(start_x,start_y,size){
  this.start = createVector(start_x,start_y);
  this.xpos = this.start.x;
  this.ypos = this.start.x;
  this.size = size;
  this.radius = this.size/2;
  this.velocity = createVector(0,1);
}

Bubble.prototype.show = function(){
  circle(this.xpos,this.ypos,this.size);
}

Bubble.prototype.collision = function(){
  if ((this.ypos + this.radius) >= bound_box.highy){
    this.velocity.y = -1;
  }
  else if ((this.ypos - this.start) <= 0) {
    this.velocity.y = 1;
  }
  else{

  }
}

Bubble.prototype.gravity = function(){
  this.ypos += (gravity_value * (this.ypos/bound_box.highy) * this.velocity.y);
}
