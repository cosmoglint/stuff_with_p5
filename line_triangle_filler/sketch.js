var triangle_array;
var array_length;
var array_height;
var triangle_base = 150;
var triangle_height = 100;


var up_corn;
var left_corn;
var right_corn;


function reportsize() {
  canvas.resizeCanvas(window.innerWidth,window.innerHeight);
}

// window.addEventListener('resize',reportsize);

function create2dArray(x_len,y_len){
  arr = new Array(x_len);
  for (let i=0; i<arr.length; i++){
    arr[i] = new Array(y_len);
  }
  return arr;
}

function fill_array(arr){
  for (let i=0; i<arr.length; i++){
    for (let j=0; j<arr[0].length; j++){
      lines_or = "down";
      arr[i][j] = new lineTriangle((i)*triangle_base,(j)*triangle_height,"up",lines_or);
    }
  }
  return arr;
}


function init(){
  up_corn = createVector(0,triangle_height/2);
  left_corn = createVector(-triangle_base/2,triangle_height/2);
  right_corn = createVector(triangle_base/2,triangle_height/2);
  // console.log(up_corn,left_corn,right_corn);
}

function setup(){
  ww = windowWidth;
  wh = windowHeight;
  array_length = Math.round(ww/triangle_base) +1;
  array_height = Math.round(wh/triangle_height) + 1;

  canvas = createCanvas(ww,wh);
  canvas.position(0,0);
  canvas.style('z-index','-1');

  init();

  triangle_array = create2dArray(array_length,array_height);
  triangle_array = fill_array(triangle_array);
  console.log(triangle_array);

}


function draw(){
  background('black');
  circle(mouseX,mouseY,40);

  for (let i=0; i<triangle_array.length; i++){
    for (let j=0; j<triangle_array[0].length; j++){
      triangle_array[i][j].show();
    }
  }
}
