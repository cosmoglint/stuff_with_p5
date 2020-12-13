
function random_color(){
  thecol = color(random(0,255),random(0,255),random(0,255));
  return thecol;
}

function reportsize(){
	resizeCanvas(windowWidth,windowHeight);
	init();
}

window.addEventListener('resize', reportsize);


function init(){
  ww = windowWidth;
  wh = windowHeight;
  canvas = createCanvas(ww,wh);
  canvas.style('z-index','-1');
  canvas.position(0,0);

  player_1 = new Player(100,100);
  player_1.x = ww/2;
  player_1.y = wh - 300;

  bub = new Bubble(200,200,200);
}

function setup(){
  init();
}

function draw(){
  player_1.show();
  bub.show();
  // circle(mouseX,mouseY,100);
}
