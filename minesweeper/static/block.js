function Block(x,y,corner){
  this.x_pos = x;
  this.y_pos = y;
  this.location = createVector(corner.x + this.x_pos*(block_size+block_padding) , corner.y + this.y_pos*(block_size+block_padding));
  this.mine = false;
  this.value = -1;
  this.state = 'default';
  this.color = 'black';
}

Block.prototype = {
  show: function(start){
    fill(this.color);
    rect(this.location.x,this.location.y,block_size,block_size,block_size/5);
    if (this.state == 'open'){
      fill('white');
      text(this.value,this.location.x,this.location.y);
    }
  },

  clicker: function(){
    if (this.mine){
      this.color = 'red';
    }
    else{
      this.state = 'open';
      this.color = 'green';
    }
  },

  changer: function(){
    this.color = (this.color == 'white') ? 'black' : 'white';
  },

  color_flipper: function(){
    this.color = (this.color == 'white') ? 'black' : 'white';
  }
}
