function Block(x,y,corner){
  this.x_pos = x;
  this.y_pos = y;
  this.location = createVector(corner.x + this.x_pos*(block_size+block_padding) , corner.y + this.y_pos*(block_size+block_padding));
  this.bomb = false;
  this.value = 0;
  this.state = 'default';
  this.color = 'black';
}

Block.prototype = {
  show: function(start){
    fill(this.color);
    rect(this.location.x,this.location.y,block_size,block_size,block_size/5);
  },

  clicker: function(){
    this.color = 'red';
  },

  changer: function(){
    this.color = (this.color == 'white') ? 'black' : 'white';
  },

  color_flipper: function(){
    this.color = (this.color == 'white') ? 'black' : 'white';
  }
}
