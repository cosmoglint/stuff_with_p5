function Block(x,y,corner){
  this.x_pos = x;
  this.y_pos = y;
  this.location = createVector(corner.x + this.x_pos*(block_size+block_padding) , corner.y + this.y_pos*(block_size+block_padding));
  this.mine = false;
  this.value = -1;
  this.state = 'default';
  this.color = closed_col;
}

Block.prototype = {
  show: function(){
    if (game_state == 'end' || game_state == 'win'){
      if (this.mine){
        this.color = mine_col;
      }
      else if (this.value == 0){
        this.color = empty_col;
      }
      else {
        this.color = safe_col;
      }
    }
    else{
      if (this.state == 'open' && this.value == 0){
        this.color = empty_col;
      }
      else if (this.state == 'open' && this.value > 0){
        this.color = safe_col;
      }
      else{
        fill(this.color);
      }
    }
    fill(this.color)
    strokeWeight(2);
    stroke(this.color);
    rect(this.location.x,this.location.y,block_size,block_size,block_size/5);
    if (this.state == 'open'){
      if (this.value > 0){
        textStyle(BOLD);
        textSize(block_size/2);
        fill(closed_col);
        text(this.value,this.location.x,this.location.y+block_size/6);
      }
    }
  },

  clicker: function(){
    if (this.mine){
      this.color = mine_col;
      end();
    }
    else if (this.value == 0){
      zero_flood_fill(this.x_pos,this.y_pos);
    }
    else{
      this.state = 'open';
      this.color = safe_col;
    }
  },

  changer: function(){
    this.color = (this.color == flag_col) ? closed_col : flag_col;
  },

}
