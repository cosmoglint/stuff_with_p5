function setup(){
  canvas = createCanvas(500,500);
  background('black');
  stroke('white');
}

function draw(){
  val = random(0,1);
  if (val > 0.5){
    line(0,0,10,10);
  }
  else{
    line(0,10,10,0);
  }
}
