let max_bubble_size = 500;

let gravity_value = 0.98 / 1.5;
let bubble_speed = 10;
let player_speed = 10;
let start_speed = 20;

let max_limit_val = 1.35;
let max_depth = 5;

let bub_array = [];

let wire_array = [];
let wire_width = 10;
let wire_speed = 30;

function random_color(){
  thecol = color(random(0,255),random(0,255),random(0,255));
  return thecol;
}

function mousePressed(){
  for (bub of bub_array){
    bub.clicked();
  }
  return false;
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

  test_wire = new Wire(ww/2);
  wire_array.push(test_wire);

  player_1 = new Player(100,100);
  player_1.x = ww/2;
  player_1.y = wh - 300;

  bub = new Bubble(500,200,0,-1);
  bub_array.push(bub);
}

function setup(){
  rectMode(CENTER);
  init();
}

function draw(){

  background(0);

  key_check();

  for (wire of wire_array){
    if (wire.live){
      wire.travel();
      wire.show();
    }
    else{
      wire_index = wire_array.indexOf(wire);
      wire_array.splice(wire_index,1);
    }
  }
  // player_1.move(1);
  player_1.show();
  for (bub of bub_array){
    if (bub.alive){
      bub.collision();
      bub.gravity();
      bub.move();
      bub.show();
    }
    else{
      bub_index = bub_array.indexOf(bub);
      bub_array.splice(bub_index,1);
    }
  }
  // circle(mouseX,mouseY,100);
}
