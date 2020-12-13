function Bubble(x,y,size){
  this.xpos = x;
  this.ypos = y;
  this.size = size;
}

Bubble.prototype.show = function(){
  circle(this.xpos,this.ypos,this.size);
}
