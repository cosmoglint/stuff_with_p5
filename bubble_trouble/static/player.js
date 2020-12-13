function Player(wid,hei){
  this.width = wid;
  this.height = hei;
  this.x;
  this.y;
}

Player.prototype.show = function(){
  rect(this.x,this.y,this.width,this.height);
}
