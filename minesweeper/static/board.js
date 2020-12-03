function Board(rows,colums,corner){
  this.corner = corner;
  this.rows = rows;
  this.columns = columns;
  this.block_list;
}

Board.prototype = {
  create_list: function(){
    this.block_list = new Array(rows);
    for (let i=0; i<rows; i++){
      this.block_list[i] = new Array(columns);
    }
  },

  add_items: function(){
    for (let i=0; i<rows; i++){
      for (let j=0; j<columns; i++){
        this.block_list[i][j] = new Block(i,j);
      }
    }
  },

  render: function(){
    for (let i=0; i<rows; i++){
      for (let j=0; j<columns; i++){
        this.block_list[i][j].show(this.corner.x,this.corner.y);
      }
    }
  }
}
