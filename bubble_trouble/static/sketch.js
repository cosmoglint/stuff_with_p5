let gravity_value = 0.98 / 1.5;
let bubble_speed = 10;
let player_speed = 10;
let start_speed = 20;
let groundy;


function random_color(){
  thecol = color(random(0,255),random(0,255),random(0,255));
  return thecol;
}

function key_check(){
  if (keyIsDown(LEFT_ARROW)){
    player_1.move(-1);
  }
  if (keyIsDown(RIGHT_ARROW)){
    player_1.move(1);
  }
}

function init(){
  ww = windowWidth;
  wh = windowHeight;
  canvas = createCanvas(ww,wh);
  canvas.style('z-index','-1');
  canvas.position(0,0);
  bound_box = new Bounds(0,ww,0,wh);

  player_1 = new Player(100,100);
  player_1.x = ww/2;
  player_1.y = wh - 300;

  bub = new Bubble(200,200,200,-1);
}

function setup(){
  rectMode(CENTER);
  init();
}

function draw(){

  background(0);

  key_check();

  // player_1.move(1);
  player_1.show();

  bub.collision();
  bub.gravity();
  bub.move();
  bub.show();
  // circle(mouseX,mouseY,100);
}
