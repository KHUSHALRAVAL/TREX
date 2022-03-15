var box
function setup() {
  createCanvas(400,400);
   box = createSprite (200, 200 , 50, 10);
}

function draw() 
{
  background(30);
  if (keyIsDown(RIGHT_ARROW)) {
    box.position.x = box.poisiton.x +2
  }
  if (keyIsDown(LEFT_ARROW)) {
    box.position.x = box.poisiton.x -2
  }
 drawSprites() ;
}




