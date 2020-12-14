function Bubble(start_x,start_y,size,direction){
  this.start = createVector(start_x,start_y);
  this.xpos = this.start.x;
  this.ypos = this.start.y;
  this.size = size;
  this.radius = this.size/2;
  this.y_velocity = 0;
  this.direction = direction;

  this.alive = true;
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
  this.xpos += bubble_speed*this.direction;
}

Bubble.prototype.clicked = function(){
  d = dist(mouseX,mouseY,this.xpos,this.ypos);
  if (d<=this.size/2){
    this.alive = false;
    this.destroy();
  }
}

Bubble.prototype.destroy = function(){
  l_bub = new Bubble(this.xpos,this.ypos,this.size/2,-1);
  r_bub = new Bubble(this.xpos,this.ypos,this.size/2,1);
  bub_array.push(l_bub,r_bub);
}
