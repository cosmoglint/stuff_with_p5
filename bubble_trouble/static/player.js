function Player(wid,hei){
  this.width = wid;
  this.height = hei;
  this.xpos = ww/2;
  this.ypos = wh-this.height/2;
}

Player.prototype.show = function(){
  rect(this.xpos,this.ypos,this.width,this.height);
}

Player.prototype.move = function(direction){
  this.xpos += player_speed*direction;
}


function Wire(x){
  this.xpos = x;
  this.height = wh;
  this.width = wire_width;
  this.top = wh;
  this.ypos = this.top + this.height/2;
  this.live = true;
}

Wire.prototype.collide = function(){
  if (this.top<=0){
    this.live = false;
  }
}

Wire.prototype.travel = function(){
  if (this.top<=0){
    this.live = false;
  }
  else{
    this.top -= wire_speed;
    this.ypos -= wire_speed;
  }
}

Wire.prototype.show = function(){
  rect(this.xpos,this.ypos,this.width,this.height);
}
