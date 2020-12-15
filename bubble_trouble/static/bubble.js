function Bubble(start_x,start_y,depth,direction){
  this.start = createVector(start_x,start_y);
  this.xpos = this.start.x;
  this.ypos = this.start.y;
  this.depth = depth;
  this.decval = wh/(max_limit_val**this.depth);
  this.std_velocity = (-1+Math.sqrt(1+(8*this.decval/gravity_value)))/2;
  this.max_limit = (wh)-(this.decval);
  this.size = max_bubble_size/(2**depth);
  this.radius = this.size/2;
  this.y_velocity = -10;
  this.direction = direction;
  this.genesis = true;

  this.alive = true;
}

Bubble.prototype.show = function(){
  this.genesis = false;
  circle(this.xpos,this.ypos,this.size);
}

Bubble.prototype.collision = function(){
  // if (this.genesis == false && this.ypos <= this.max_limit && this.y_velocity != 0){
  //   this.y_velocity = gravity_value;
  // }
  if ((this.ypos + this.radius) >= bound_box.high_y){

    // this.y_velocity = -this.y_velocity-gravity_value;
    this.y_velocity = -this.std_velocity * gravity_value;
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
  if (d<=this.size/2 && this.genesis==false){
    this.alive = false;
    this.destroy();
  }
}

Bubble.prototype.destroy = function(){
  if (this.depth<=max_depth){
    l_bub = new Bubble(this.xpos,this.ypos,this.depth+1,-1);
    r_bub = new Bubble(this.xpos,this.ypos,this.depth+1,1);
    bub_array.push(l_bub,r_bub);
  }
}
