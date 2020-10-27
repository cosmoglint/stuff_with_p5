

function reportsize() {
  canvas.resizeCanvas(window.innerWidth,window.innerHeight);
}

// window.addEventListener('resize',reportsize);


function powering_imaginary(val,pow){

}



function setup(){
  ww = window.innerWidth;
  wh = window.innerHeight;
  var xrange = 1.5;
  var yrange = 1;
  canvas = createCanvas(ww,wh);
  pixelDensity(1);
  loadPixels();

  canvas.position(0,0);
  canvas.style('z-index','-1');

  var maxiterations = 100;

  for (let i=0; i<width; i++){
    for (let j=0; j<height; j++){

      var a = map(i, 0, width, -xrange, xrange);
      var b = map(j,0,height, -yrange, yrange);

      var ca = a;
      var cb = b;

      var n = 0;
      var z = 0;

      while (n<100){
        var aa = a*a - b*b;
        var bb = 2 * a * b;

        a = aa + ca;
        b = bb + cb;

        if (abs(a+b) > 16){
          break;
        }

        n++;
      }

      var bright = map(n,0,maxiterations,0,255);
      // bright = map(sqrt(bright),0,1,0,255);
      if (n===maxiterations){
        bright = 0;
      }

      var pix = (i + j * width) * 4;
        pixels[pix + 0] = bright;
        pixels[pix + 1] = bright;
        pixels[pix + 2] = bright;
        pixels[pix + 3] = 255;
    }
  }
  updatePixels();


}


function draw(){


}
