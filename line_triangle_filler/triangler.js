function lineTriangle(x,y,orientation,lines){
  this.x_pos = x;
  this.y_pos = y;
  this.center = createVector(x,y);
  this.line_ori = lines;
  this.orientation = orientation;
  this.corner_up = (this.orientation == "up") ? ( p5.Vector.sub(this.center, up_corn)) : ( p5.Vector.add(this.center, up_corn));
  this.corner_bot_left = (this.orientation == "up") ?  (p5.Vector.add(this.center, left_corn)) : ( p5.Vector.sub(this.center, left_corn));
  this.corner_bot_right = (this.orientation == "up") ?  (p5.Vector.add(this.center, right_corn)) : ( p5.Vector.sub(this.center, right_corn));

  // this.base =

}

lineTriangle.prototype.show = function(){
  // circle(this.x_pos,this.y_pos,10);
  triangle(this.corner_up.x,this.corner_up.y,this.corner_bot_left.x,this.corner_bot_left.y,this.corner_bot_right.x,this.corner_bot_right.y);
  stroke('black');
  strokeWeight(1);
  // if (this.line_ori == "usual"){
  //   line(this.corner_bot_left.x,this.corner_bot_left.y,this.corner_bot_right.x,this.corner_bot_right.y);
  // }

  for (let i = 0; i<line_count; i++){
    ldiff = map(i,0,line_count,0,triangle_side);
    rdiff = map(i,0,line_count,0,triangle_side);

    lvec = p5.Vector.add(this.corner_up,createVector(-ldiff*Math.cos(angle_top/2),-ldiff*Math.sin(angle_top/2)));
    rvec = p5.Vector.add(this.corner_up,createVector(rdiff*Math.cos(angle_top/2),-rdiff*Math.sin(angle_top/2)));
    line(lvec.x, lvec.y ,rvec.x, rvec.y );
    console.log(lvec.x, lvec.y ,rvec.x, rvec.y );
  }
  line(this.center.x+50,this.center.y,this.center.x-50,this.center.y);
}
