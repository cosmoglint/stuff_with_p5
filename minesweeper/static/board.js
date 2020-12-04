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
        this.block_list[i][j] = new Block(i,j,this.corner);
      }
    }
  },

  random_selector: function(){
    ranx = Math.floor(random(0,this.rows));
    rany = Math.floor(random(0,this.columns));
    return createVector(ranx,rany);
  },

  set_mines: function(){
    count = 0;
    while (count <= mine_count){
      ranval = this.random_selector();
      if (this.block_list[ranval.x][ranval.y].mine == false){
        count += 1;
        this.block_list[ranval.x][ranval.y].mine = true;
      }
    }
  },

  check_mine: function(val){
    if (val.mine == true){
      return 1;
    }
    else {
      return 0;
    }
  },

  set_numbers: function(){
    for (let i=0; i<this.rows; i++){
      for (let j=0; j<this.columns; j++){
        sum = 0;
        blck = this.block_list[i][j];
        if (blck.mine == false){
          if (i == 0 && j == 0){
            sum += (this.check_mine(this.block_list[i][j+1])  + this.check_mine(this.block_list[i+1][j]) + this.check_mine(this.block_list[i+1][j+1]));
          }
          else if (i == 0 && j == this.columns-1){
            sum += (this.check_mine(this.block_list[i][j-1]) + this.check_mine(this.block_list[i+1][j-1]) + this.check_mine(this.block_list[i+1][j]));
          }
          else if (i == this.rows-1 && j == 0){
            sum += (this.check_mine(this.block_list[i][j+1]) + this.check_mine(this.block_list[i-1][j+1]) + this.check_mine(this.block_list[i-1][j]));
          }
          else if (i == this.rows-1 && j == this.columns-1){
            sum += (this.check_mine(this.block_list[i-1][j])  + this.check_mine(this.block_list[i-1][j-1]) + this.check_mine(this.block_list[i][j-1]));
          }
          else if (i == 0){
            sum += (this.check_mine(this.block_list[i][j+1]) + this.check_mine(this.block_list[i][j-1]) + this.check_mine(this.block_list[i+1][j+1]) + this.check_mine(this.block_list[i+1][j-1]) + this.check_mine(this.block_list[i+1][j]));
          }
          else if (j == 0){
            sum += (this.check_mine(this.block_list[i+1][j]) + this.check_mine(this.block_list[i-1][j]) + this.check_mine(this.block_list[i-1][j+1]) + this.check_mine(this.block_list[i][j+1]) + this.check_mine(this.block_list[i+1][j+1]));
          }
          else if (j == this.columns-1){
            sum += (this.check_mine(this.block_list[i+1][j]) + this.check_mine(this.block_list[i-1][j]) + this.check_mine(this.block_list[i-1][j-1]) + this.check_mine(this.block_list[i][j-1]) + this.check_mine(this.block_list[i+1][j-1]));
          }
          else if (i == this.columns-1){
            sum += (this.check_mine(this.block_list[i][j+1]) + this.check_mine(this.block_list[i][j-1]) + this.check_mine(this.block_list[i-1][j+1]) + this.check_mine(this.block_list[i-1][j-1]) + this.check_mine(this.block_list[i-1][j]));
          }
          else{
            for (let x=-1; x<2; x++){
              for (let y=-1; y<2; y++){
                if (this.block_list[i+x][j+y].mine == true){

                  sum += 1;
                }
              }
            }
          }
        }
      }
    }
  },

  render: function(){
    for (let i=0; i<this.rows; i++){
      for (let j=0; j<this.columns; j++){
        this.block_list[i][j].show();
      }
    }
  },

  clicked: function(fr_count){
    for (let i=0; i<this.rows; i++){
      for (let j=0; j<this.columns; j++){
        d = dist(mouseX,mouseY,i* (block_size+block_padding) + this.corner.x,j*(block_size+block_padding) + this.corner.y)
        if (d < block_size/2){
          if (fr_count < delay){
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
