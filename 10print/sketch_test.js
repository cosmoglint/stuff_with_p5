var mover = 10;
var movex = 0;
var movey = 0;

function setup(){
  ww = windowWidth;
  wh = windowHeight
  canvas = createCanvas(ww,wh);
  canvas.position(0,0);
  canvas.style('z-index','-1')
  background('black');
  stroke('white');
}

function draw(){
  val = random(0,1);
  if (val > 0.5){
    line(movex,movey,movex + mover,movey + mover);
  }
  else{
    line(movex,movey + mover,movex + mover,movey);
  }
  movex += mover;
  if (movex>width){
    movex = 0;
    movey += mover;
  }
}
