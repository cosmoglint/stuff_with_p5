var g_force = 9.8;
var block_lst = [];


function random_color(){
  thecol = color(random(0,255),random(0,255),random(0,255));
  return thecol;
}

function reportsize(){
	// resizeCanvas(windowWidth,windowHeight);
  init();
}

window.addEventListener('resize', reportsize);


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
  blo = new block(random(ww),random(wh));
  block_lst.push(blo);

}

function draw(){
  if (frameCount % 50 == 0){
    new_blo = new block(random(ww),random(wh));
    block_lst.push(new_blo);
  }
  background(0);

  for (let i=0; i<block_lst.length; i++){
    block_lst[i].gravity_mover();
    block_lst[i].show();
  }
  // blo.gravity_mover();
  // blo.show();
  // circle(mouseX,mouseY,100);
}
