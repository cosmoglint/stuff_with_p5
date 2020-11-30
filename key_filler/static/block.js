function block(x,y,text){
  this.x_pos = x;
  this.y_pos = y;
  this.text = text;
}

block.prototype.show = function(){
  fill('white');
  rect(this.x_pos,this.y_pos,50);
}

block.prototype.gravity_mover = function(){
  if (this.y_pos < wh){
      this.y_pos += g_force;
  }

}
