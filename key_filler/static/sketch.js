var g_force = 9.8;


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

}

function draw(){
  background(0);
  blo.gravity_mover();
  blo.show();
  // circle(mouseX,mouseY,100);
}
