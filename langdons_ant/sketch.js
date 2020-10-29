



function setup(){
  ww = windowWidth
  wh = windowHeight
  canvas = createCanvas(ww,wh)
  canvas.position(0,0)
  canvas.style('z-index','-1')
}

function draw(){
  circle(mouseX,mouseY,40)
}
