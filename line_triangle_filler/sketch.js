var array_length;
var array_height;
var triangle_base = 20;
var triangle_height = 20;

function reportsize() {
  canvas.resizeCanvas(window.innerWidth,window.innerHeight);
}

// window.addEventListener('resize',reportsize);


function setup(){
  ww = windowWidth;
  wh = windowHeight;
  x_count = ww/triangle_base;
  y_count = wh/triangle_height;
  canvas = createCanvas(ww,wh);
  canvas.position(0,0);
  canvas.style('z-index','-1');

}


function draw(){
  background('black');
  circle(mouseX,mouseY,40);
}
