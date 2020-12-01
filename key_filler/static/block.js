function block(x,y,txt){
  this.x_pos = x;
  this.y_pos = y;
  this.txt = txt;
  this.width = textWidth(this.txt);
  this.height = block_size;
}

block.prototype.show = function(){
  fill('white');
  rect(this.x_pos,this.y_pos,block_size);
  fill(0);
  text(this.txt,this.x_pos,this.y_pos);
}

block.prototype.gravity_mover = function(val){
  flag = 'move';
  if (this.y_pos < (wh-block_size/2)){
    for (let i=0; i<block_lst.length; i++){
      if (i != val){
        if ((block_lst[i].y_pos-this.y_pos)<block_size && (block_lst[i].y_pos-this.y_pos)>0 && Math.abs(block_lst[i].x_pos-this.x_pos)<block_size){
          flag = 'dont';
          break;
        }
        else{
          continue;
        }
      }
    }

    (flag == 'move') ? (this.y_pos += g_force) : (this.y_pos = this.y_pos);
  }

}
