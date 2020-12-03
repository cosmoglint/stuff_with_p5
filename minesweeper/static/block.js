function Block(x,y){
  this.x_pos = x;
  this.y_pos = y;
  this.state = 'default';
}

Block.prototype = {
  show: function(start){
    rect(start.x + this.x_pos*(block_size+block_padding), start.y + this.y_pos*(block_size+block_padding),block_size);
  },

  clicker: function(){
    
  }
}
