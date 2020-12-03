function Block(x,y){
  this.x_pos = x;
  this.y_pos = y;
  this.state = 'default';
  this.color = 'black';
}

Block.prototype = {
  show: function(start){
    fill(this.color);
    rect(start.x + this.x_pos*(block_size+block_padding), start.y + this.y_pos*(block_size+block_padding),block_size,block_size,block_size/5);
  },

  clicker: function(){
    this.color = 'white'
  }
}
