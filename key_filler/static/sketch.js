var g_force = 9.8;
var block_lst = [];
var block_size = 50;


function random_color(){
  thecol = color(random(0,255),random(0,255),random(0,255));
  return thecol;
}


function spawner(){
  new_blo = new block(random(ww),0);
  block_lst.push(new_blo);
}

function cleaner(){
  if (block_lst.length > 300){
    block_lst.splice(0,50);
  }
}



function init(){
  ww = windowWidth;
  wh = windowHeight;
  canvas = createCanvas(ww,wh);
  canvas.style('z-index','-1');
  canvas.position(0,0);
}

function setup(){
  rectMode(CENTER);
  init();
  spawner();

}

function draw(){
  if (frameCount % 50 == 0){
    spawner();
  }
  background(0);

  for (let i=0; i<block_lst.length; i++){
    block_lst[i].gravity_mover(i);
    block_lst[i].show();
  }
  cleaner();
}
