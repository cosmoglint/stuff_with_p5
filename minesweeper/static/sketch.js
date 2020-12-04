var block_size = 50;
var block_padding = 25;
var the_board;

var mine_count = 10;
var delay = 9;// frames between clicks

var row_count = 10;
var column_count = 10;

var start_frame;
var end_frame;

function random_color(){
  thecol = color(random(0,255),random(0,255),random(0,255));
  return thecol;
}

function reportsize(){
	resizeCanvas(windowWidth,windowHeight);
}

function start_counter(){
    start_frame = frameCount;
}

function end_counter(){
  end_frame = frameCount;
  return (end_frame - start_frame);
}

function mousePressed(event){
  console.log(event);
  start_counter();
  // the_board.clicked();
}

function mouseReleased(event){
  fr_count = end_counter();
  if (event.button == 0){
    the_board.clicked(fr_count);
  }
  else {
    the_board.right_clicked();
  }
}

function init(){
  ww = windowWidth;
  wh = windowHeight;
  canvas = createCanvas(ww,wh);
  canvas.style('z-index','-1');
  canvas.position(0,0);

  bx = ww/2 - (row_count/2)*(block_size + block_padding);
  by = wh/2 - (column_count/2)*(block_size + block_padding);
  startpos = createVector(bx,by);
  the_board = new Board(10,10,startpos);
  the_board.create_list();
  the_board.add_items();
  the_board.set_mines();
}

function setup(){
  rectMode(CENTER);
  frameRate(30);
  init();
}

function draw(){
  // circle(mouseX,mouseY,100);
  the_board.render();
}
