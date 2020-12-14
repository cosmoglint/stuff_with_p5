function Bubble(start_x,start_y,size){
  this.start = createVector(start_x,start_y);
  this.xpos = this.start.x;
  this.ypos = this.start.y;
  this.size = size;
  this.radius = this.size/2;
  this.velocity = 0;
}

Bubble.prototype.show = function(){
  circle(this.xpos,this.ypos,this.size);
}

Bubble.prototype.collision = function(){
  if ((this.ypos + this.radius) >= bound_box.highy){
    this.velocity = -this.velocity-gravity_value;
  }
  // else if (this.)
  else{

  }
}

Bubble.prototype.gravity = function(){
  this.velocity += gravity_value;
  this.ypos += this.velocity;

  console.log(this.velocity);

}
