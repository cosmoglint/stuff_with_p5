function block(x,y,text){
  this.x_pos = x;
  this.y_pos = y;
  this.text = text;
}

block.prototype.draw = function(){
  rectangle(this.x_pos,this.y_pos,50);
}
