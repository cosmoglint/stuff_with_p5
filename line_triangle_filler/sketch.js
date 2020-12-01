var triangle_array;
var array_length;
var array_height;


var triangle_base = 150;
var triangle_height = 100;
var triangle_side = Math.sqrt(((triangle_base/2)*(triangle_base/2)) + (triangle_height*triangle_height));

console.log(triangle_base,triangle_height,triangle_side);


var angle_top = Math.asin((triangle_base/2)/triangle_side) * 2  ;
var angle_left = Math.asin((triangle_height)/triangle_side) ;
var angle_right = angle_left;

console.log(angle_left,angle_top,angle_right);


var line_height = 5;
// var line_gap = 20;
var line_count = 10;



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
}

function setup(){
  ww = windowWidth;
  wh = windowHeight;
  array_length = Math.round(ww/triangle_base)*2 +2;
  array_height = Math.round(wh/triangle_height) + 2;

  canvas = createCanvas(ww,wh);
  canvas.position(0,0);
  canvas.style('z-index','-1');

  init();

  triangle_array = create2dArray(array_length,array_height);
  triangle_array = fill_array(triangle_array);

  test_tri = new lineTriangle(ww/2,wh/2,"up","right");
}


function draw(){
  // background('black');
  // test_tri.show();
  strokeWeight(line_height);
  the_time = frameCount;
  console.log(the_time);
  if (the_time%12 == 0){
    the_time = 0;
    for (let x=0; x<30; x++){
      val_x = Math.round(random(0,triangle_array.length-1));
      val_y = Math.round(random(0,triangle_array[0].length-1));
      triangle_array[val_x][val_y].line_ori = random_orientation();
    }

  }


  for (let i=0; i<triangle_array.length; i++){
    for (let j=0; j<triangle_array[0].length; j++){
      triangle_array[i][j].show();
    }
  }

}
