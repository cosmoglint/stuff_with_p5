

function reportsize() {
  canvas.resizeCanvas(window.innerWidth,window.innerHeight);
}

// window.addEventListener('resize',reportsize);


function setup(){
  ww = window.innerWidth;
  wh = window.innerHeight;
  canvas = createCanvas(500,500);

  canvas.position(0,0);
  canvas.style('z-index','-1');

}


function draw(){
  background(0);
  circle(mouseX,mouseY,20);
}
