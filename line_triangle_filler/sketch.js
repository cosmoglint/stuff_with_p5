var triangle_array;
var array_length;
var array_height;

var triangle_base = 150*2;
var triangle_height = 100*2;
var triangle_side = Math.sqrt((triangle_base*triangle_base) + (triangle_height*triangle_height));

var angle_top = Math.asin((triangle_base/2)/triangle_side)*2 * (180/Math.PI);
var angle_left = Math.asin((triangle_height)/triangle_side)*2 * (180/Math.PI);
var angle_right = angle_left;


var line_height = 20;
// var line_gap = 20;
var line_count = 5;



var up_corn;
var left_corn;
var right_corn;


function reportsize() {
  canvas.resizeCanvas(window.innerWidth,window.innerHeight);
}


function random_orientation(){
  ops = ["usual","right","left"];
  return random(ops);
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
      lines_or = random_orientation();
      ori = ((i+j) % 2 != 0) ? "up" : "down";
      arr[i][j] = new lineTriangle((i)*triangle_base/2,(j)*triangle_height,ori,lines_or);
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
  array_length = Math.round(ww/triangle_base)*2 +1;
  array_height = Math.round(wh/triangle_height) + 1;

  canvas = createCanvas(ww,wh);
  canvas.position(0,0);
  canvas.style('z-index','-1');

  init();

  triangle_array = create2dArray(array_length,array_height);
  triangle_array = fill_array(triangle_array);

  test_tri = new lineTriangle(ww/2,wh/2,"down","usual");
}


function draw(){
  background('black');
  test_tri.show();
  // for (let i=0; i<triangle_array.length; i++){
  //   for (let j=0; j<triangle_array[0].length; j++){
  //     triangle_array[i][j].show();
  //   }
  // }
}
