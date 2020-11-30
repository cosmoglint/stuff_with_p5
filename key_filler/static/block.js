function block(x,y,text){
  this.x_pos = x;
  this.y_pos = y;
  this.text = text;
}

block.prototype.show = function(){
  fill('white');
  rect(this.x_pos,this.y_pos,block_size);
}

block.prototype.gravity_mover = function(val){
  if (this.y_pos < wh){
    for (let i=0; i<block_lst.length; i++){
      if (i != val){
        if (Math.abs(block_lst[i].y_pos-this.y_pos)>block_size && Math.abs(block_lst[i].x_pos-this.x_pos)>block_size){
          continue;
        }
        else{
          break;
        }
      }
      this.y_pos += g_force;
    }
  }

}
