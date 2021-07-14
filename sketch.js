var path , pathImg;
var boy_running , runner;
var left_boundary , right_boundary;

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  boy_running = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  runner = createSprite(100,340,10,20);
  runner.addAnimation("running", boy_running);
  runner.scale = 0.1;

  left_boundary = createSprite(200,200);
  left_boundary.visible = false;

  right_boundary = createSprite(103,200);
  right_boundary.visible = false;

}

function draw() {
  background(0);

  if(path.y > 400){
    path.y = height/2;
  }

  runner.collide(left_boundary);
  runner.collide(right_boundary);

  runner.x = mouseX;

  drawSprites();
}
