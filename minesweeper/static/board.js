function Board(rows,columns,corner){
  this.corner = corner;
  this.rows = rows;
  this.columns = columns;
  this.block_list;
}

Board.prototype = {
  create_list: function(){
    this.block_list = new Array(this.rows);
    for (let i=0; i<this.rows; i++){
      this.block_list[i] = new Array(this.columns);
    }
  },

  add_items: function(){
    for (let i=0; i<this.rows; i++){
      for (let j=0; j<this.columns; j++){
        this.block_list[i][j] = new Block(i,j);
      }
    }
  },

  render: function(){
    for (let i=0; i<this.rows; i++){
      for (let j=0; j<this.columns; j++){
        this.block_list[i][j].show(this.corner);
      }
    }
  },

  clicked: function(fr_count){
    for (let i=0; i<this.rows; i++){
      for (let j=0; j<this.columns; j++){
        d = dist(mouseX,mouseY,i* (block_size+block_padding) + this.corner.x,j*(block_size+block_padding) + this.corner.y)
        if (d < block_size/2){
          if (fr_count < 10){
            this.block_list[i][j].clicker();
          }
          else{
            this.block_list[i][j].changer();
          }
          // this.block_list[i][j].color_flipper();
        }
      }
    }
  },

  right_clicked: function(){
    for (let i=0; i<this.rows; i++){
      for (let j=0; j<this.columns; j++){
        d = dist(mouseX,mouseY,i* (block_size+block_padding) + this.corner.x,j*(block_size+block_padding) + this.corner.y)
        if (d < block_size/2){
          this.block_list[i][j].changer();
        }
      }
    }
  }
}
