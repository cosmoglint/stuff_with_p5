var flag;

function random_color(){
  thecol = color(random(0,255),random(0,255),random(0,255));
  return thecol;
}

function reportsize(){
	resizeCanvas(windowWidth,windowHeight);
}


// function reportsize(){
// 	resizeCanvas(windowWidth,windowHeight);
// 	init();
// }


window.addEventListener('resize', reportsize);

// file location needs to be relative to html file
function preload(){
    flag = loadImage('static/eso1907a.jpg')
}

function init(){
  ww = windowWidth;
  wh = windowHeight;
  canvas = createCanvas(ww,wh);
  canvas.style('z-index','-1');
  canvas.position(0,0);
}

function setup(){
  init();
}

function draw(){

  // circle(mouseX,mouseY,100);
  image(flag,0,0);
}
