var mover = 20;
var movex = 0;
var movey = 0;
var the_array;


function orientation_generator(){
    val = random(0,1);
    ori = (val < 0.9)? ("backward") : ("forward");
    return ori
}

function create_array(width,height){
  let arr = new Array(width);
  for (let i = 0; i < arr.length; i++){
    arr[i] = new Array(height);
  }
  return arr
}


function fill_array(){
  for (let i=0; i<the_array.length; i++){
    for (let j=0; j<the_array[0].length; j++){
      // console.log(ori);
      ori = orientation_generator();
      the_array[i][j] = new slashed(i*mover,j*mover,ori);
    }
  }
  return the_array;
}


function mouseMoved(){
  for (let i=0; i<the_array.length; i++){
    for (let j=0; j<the_array[0].length; j++){
      the_array[i][j].hovered();
    }
  }
}

function setup(){
  ww = windowWidth;
  wh = windowHeight
  xcount = Math.round(ww/mover);
  ycount = Math.round(wh/mover);
  canvas = createCanvas(ww,wh);
  canvas.position(0,0);
  canvas.style('z-index','-1')
  background('black');
  stroke('white');

  the_array = create_array(xcount,ycount);
  fill_array();
}

function draw(){

  for (let i=0; i<the_array.length; i++){
    for (let j=0; j<the_array[0].length; j++){
      the_array[i][j].show();
    }
  }
  // val = random(0,1);
  // if (val > 0.5){
  //   line(movex,movey,movex + mover,movey + mover);
  // }
  // else{
  //   line(movex,movey + mover, movex + mover, movey);
  // }
  // movex += mover;
  // if (movex>width){
  //   movex = 0;
  //   movey += mover;
  // }
}
