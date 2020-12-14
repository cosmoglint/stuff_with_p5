function Bubble(start_x,start_y,size){
  this.start = createVector(start_x,start_y);
  this.xpos = this.start.x+1;
  this.ypos = this.start.y+1;
  this.size = size;
  this.radius = this.size/2;
  this.trajectory = createVector(0,1);
  this.velocity = (gravity_value * ((this.ypos-this.start.y)/(bound_box.highy-this.start.y)) * this.trajectory.y);
}

Bubble.prototype.show = function(){
  circle(this.xpos,this.ypos,this.size);
}

Bubble.prototype.collision = function(){
  if ((this.ypos + this.radius) >= bound_box.highy){
    this.trajectory.y = -1;
  }
  else if ((this.ypos) <= this.start.y) {
    this.trajectory.y = 1;
    // this.ypos = this.start.y+1;
  }
  else{

  }
}

Bubble.prototype.gravity = function(){
  this.velocity = (gravity_value * ((this.ypos-this.start.y)/(bound_box.highy-this.start.y)) * this.trajectory.y);
  this.ypos += this.velocity;
}
