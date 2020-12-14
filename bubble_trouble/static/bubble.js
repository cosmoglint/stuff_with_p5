function Bubble(start_x,start_y,size){
  this.start = createVector(start_x,start_y);
  this.xpos = this.start.x;
  this.ypos = this.start.y;
  this.size = size;
  this.radius = this.size/2;
  this.y_velocity = 0;
  this.direction = 1;
}

Bubble.prototype.show = function(){
  circle(this.xpos,this.ypos,this.size);
}

Bubble.prototype.collision = function(){
  if ((this.ypos + this.radius) >= bound_box.high_y){
    this.y_velocity = -this.y_velocity-gravity_value;
  }
  if ((this.xpos + this.radius) >= bound_box.high_x  || (this.xpos - this.radius) <= bound_box.low_x){
    this.direction *= -1;
  }
}

Bubble.prototype.gravity = function(){
  this.y_velocity += gravity_value;
  this.ypos += this.y_velocity;

  // console.log(this.y_velocity);

}

Bubble.prototype.move = function(){
  this.xpos += movement_value*this.direction;
}
