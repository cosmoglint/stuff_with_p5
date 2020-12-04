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
  show: function(){
    if (game_state == 'end' || game_state == 'win'){
      if (this.mine){
        fill('red');
      }
      else if (this.value == 0){
        fill('grey');
      }
      else {
          fill('green');
      }
    }
    else{
      if (this.state == 'open' && this.value == 0){
        fill('grey');
      }
      else if (this.state == 'open' && this.value > 0){
        fill('green');
      }
      else{
        fill(this.color);
      }
    }
    rect(this.location.x,this.location.y,block_size,block_size,block_size/5);
    if (this.state == 'open'){
      if (this.value > 0){
        textStyle(BOLD);
        textSize(block_size/2);
        fill('white');
        text(this.value,this.location.x,this.location.y+block_size/6);
      }
    }
  },

  clicker: function(){
    if (this.mine){
      this.color = 'red';
      end();
    }
    else if (this.value == 0){
      zero_flood_fill(this.x_pos,this.y_pos);
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
