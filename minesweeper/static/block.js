function Block(x,y){
  this.x_pos = x;
  this.y_pos = y;
  this.state = 'default';
}

Block.prototype = {
  show: function(start_x,start_y){
    rect(start_x + this.x_pos*(block_size+block_padding), start_y + this.y_pos*(block_size+block_padding),block_size);
  },
}
