var the_board;

var bg_col = 'black';

var mine_count = 15;
var delay = 9;// frames between clicks

var row_count = 10;
var column_count = 10;

var row_input;
var column_input;

// var block_size = 50;
// var block_padding = 20;

// var block_rate = 1.5; // inverse i.e  1/2
// var padding_rate = 15; // inverse i.e 1/3
// var block_radius = 10; // inverse i.e 1/10

var block_rate = 0.5; // not inverse but actual value
var padding_rate = 0.05;
var block_radius = 0.05;

var block_size;
var block_padding;

var game_state = 'run';

var start_frame;
var end_frame;


const mine_col = 'red';
const safe_col = 'blue';
const flag_col = 'grey';
const empty_col = bg_col;
const closed_col = 'white';
const hover_col = (50,40,40);

function random_color(){
  thecol = color(random(0,255),random(0,255),random(0,255));
  return thecol;
}

function reportsize(){
	resizeCanvas(windowWidth,windowHeight);
}

window.addEventListener('resize', reportsize);

function zero_flood_fill(x,y){
  the_board.flood_fill(x,y);
}

function start_counter(){
    start_frame = frameCount;
}

function end_counter(){
  end_frame = frameCount;
  return (end_frame - start_frame);
}

// function mouseMoved(){
//   the_board.check_hover();
// }

function mousePressed(event){
  // console.log(event);
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

function end(){
  game_state = 'end';
  the_board.ender();
}

function set_board(){
  bx = ww/2 - (row_count/2 -1)*(block_size + block_padding);
  by = wh/2 - (column_count/2)*(block_size + block_padding) + block_size + block_padding;
  game_state = 'run';
  startpos = createVector(bx,by);
  the_board = new Board(row_count,column_count,startpos);
  the_board.create_list();
  the_board.add_items();
  the_board.set_mines();
  the_board.set_numbers();
  // the_board.check_mine(the_board.block_list[5][6]);

}

function set_block_size(){
  val = Math.min(ww,wh);

  block_size = (val == wh) ? (wh/column_count)*block_rate : (ww/column_count)*block_rate;
  block_padding = (val == wh) ? (wh/column_count)*padding_rate : (ww/column_count)*padding_rate;

  background(bg_col);
}

function init(){
  ww = windowWidth;
  wh = windowHeight;
  canvas = createCanvas(ww,wh);
  canvas.style('z-index','-1');
  canvas.position(0,0);

  set_block_size();
  set_board();
}

function setup(){
  rectMode(CENTER);
  textStyle(BOLD);
  textAlign(CENTER);
  frameRate(30);
  init();

  row_input = createInput(55);
  column_input = createInput('column_count');

  row_input.position(20,100);
  column_input.position(20,200);

  restart_button = createButton('restart');
  restart_button.position(ww/2,(block_size + block_padding));
  restart_button.mousePressed(init);
}

function draw(){
  // circle(mouseX,mouseY,100);

  the_board.render();
  the_board.is_end();
  the_board.check_hover(mouseX,mouseY);
  if (game_state == 'win'){
    // background(0);
    // circle(mouseX,mouseY,100);
    fill(closed_col);
    textSize(100);
    text("you win!",ww/2,wh/2);
  }
  else if (game_state == 'end'){
    // background(0);
    // circle(mouseX,mouseY,100);
    fill(closed_col);
    textSize(50);
    text("better luck next time",ww/2,wh/2);
  }

}
