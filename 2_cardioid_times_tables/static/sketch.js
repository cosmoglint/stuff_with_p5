var points = 200;

var table_factor = 2;
var radius = 250;

function reportsize() {
  canvas.resizeCanvas(window.innerWidth,window.innerHeight);
}

// window.addEventListener('resize',reportsize);


function calculate_position(val,points){
  var specific_angle = map(val,0,points,0,Math.PI * 2);
  var pointvector = p5.Vector.fromAngle(specific_angle ,radius);

  return pointvector;
}


function setup(){
  ww = window.innerWidth;
  wh = window.innerHeight;
  canvas = createCanvas(ww,wh);

  canvas.position(0,0);
  canvas.style('z-index','-1');



}


function draw(){
  background(0);

  points = map(mouseY,0,wh,0,360);
  // points = 1000;
  table_factor = map(mouseX,0,ww,0,360);

  translate(windowWidth/2,windowHeight/2);

  noFill('');
  stroke('white')
  circle(0,0,radius * 2);

  var separation_angle = Math.PI/points;

  for (let i=0; i<points; i++){
    position_vector = calculate_position(i,points);
    // console.log(position_vector);
    fill(255);
    circle(position_vector.x,position_vector.y,2);
  }

  for (let i=0; i<points ; i++){
    var start = calculate_position(i,points);
    var end = calculate_position((i * table_factor)%points,points);
    line(start.x,start.y,end.x,end.y);
  }
  circle(mouseX-windowWidth/2,mouseY-windowHeight/2,20);
}
