let img;
function preload(){
  img = loadImage('01.jpg')
}
function setup() {
  createCanvas(1000, 1000);
  
}

function draw() {
  background(220);
  // tint(255,255);
  image(img, 0, 0);
  // image(img, width/2, 0);
  let c = get(366, 422);
  fill(c);
  rect(100, 100, 200, 200);
  print(c);
  // image(c, width/2, 0);
  
  // filter(BLUR, 5);
  // tint(255, 100);
  // image(img, width/2, 0);
  
  // image(img, 0, 500);
  // image(img, 500, 0);
  // image(img, 500, 500);
}