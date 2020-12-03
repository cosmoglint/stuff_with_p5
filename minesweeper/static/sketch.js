var block_size = 50;
var block_padding = 30;
var the_board;


function random_color(){
  thecol = color(random(0,255),random(0,255),random(0,255));
  return thecol;
}

function reportsize(){
	resizeCanvas(windowWidth,windowHeight);
}

function mousePressed(){
  the_board.clicked();
}

function init(){
  ww = windowWidth;
  wh = windowHeight;
  canvas = createCanvas(ww,wh);
  canvas.style('z-index','-1');
  canvas.position(0,0);

  startpos = createVector(0,0)
  the_board = new Board(10,10,startpos);
  the_board.create_list();
  the_board.add_items();
}

function setup(){
  rectMode(CENTER);
  init();
}

function draw(){
  // circle(mouseX,mouseY,100);
  the_board.render();
}
