function Bubble(start_x,start_y,size){
  this.start = createVector(start_x,start_y);
  this.xpos = this.start.x;
  this.ypos = this.start.y;
  this.size = size;
  this.radius = this.size/2;
  this.trajectory = createVector(0,1);
  this.velocity = 0;
}

Bubble.prototype.show = function(){
  circle(this.xpos,this.ypos,this.size);
}

Bubble.prototype.collision = function(){
  if ((this.ypos + this.radius) >= bound_box.highy){
    this.velocity = -this.velocity;
    // this.trajectory.y = -1;
  }
  else if ((this.ypos - this.radius) <= 0) {
    this.velocity = -this.velocity;
    this.trajectory.y = 1;
  }
  else{

  }
}

Bubble.prototype.gravity = function(){
  // this.ypos += (gravity_value * this.velocity * this.trajectory.y);
  // this.velocity = ((this.ypos-this.start.y)/(bound_box.highy-this.start.y));
  this.velocity += gravity_value*this.trajectory.y;
  this.ypos += this.velocity;

  console.log(this.velocity);

}
