function lineTriangle(x,y,orientation,lines){
  this.x_pos = x;
  this.y_pos = y;
  this.center = createVector(x,y);
  this.line_or = lines;
  this.orientation = orientation;
  this.corner_up = (this.orientation == "up") ? ( p5.Vector.sub(this.center, up_corn)) : ( p5.Vector.add(this.center, up_corn));
  this.corner_bot_left = (this.orientation == "up") ?  (p5.Vector.add(this.center, left_corn)) : ( p5.Vector.sub(this.center, left_corn));
  this.corner_bot_right = (this.orientation == "up") ?  (p5.Vector.add(this.center, right_corn)) : ( p5.Vector.sub(this.center, right_corn));
  this.orientation = orientation;
  console.log(up_corn);
}

lineTriangle.prototype.show = function(){
  // circle(this.x_pos,this.y_pos,10);
  triangle(this.corner_up.x,this.corner_up.y,this.corner_bot_left.x,this.corner_bot_left.y,this.corner_bot_right.x,this.corner_bot_right.y);
  triangle(30, 75, 58, 20, 86, 75);

  // console.log(this.corner_up.x,this.corner_up.y,this.corner_bot_left.x,this.corner_bot_left.y,this.corner_bot_right.x,this.corner_bot_right.y);
  triangle(3300, 700, 3300, 700, 3300, 700);
}
