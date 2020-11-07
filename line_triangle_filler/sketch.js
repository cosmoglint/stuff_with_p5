

function reportsize() {
  canvas.resizeCanvas(window.innerWidth,window.innerHeight);
}

// window.addEventListener('resize',reportsize);


function setup(){
  ww = windowWidth;
  wh = windowHeight;
  canvas = createCanvas(ww,wh);

}


function draw(){
  background('black');
  circle(mouseX,mouseY,40);
}
