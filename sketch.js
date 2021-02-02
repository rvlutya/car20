var car,wall;
var weight,speed;




function setup() {
  createCanvas(800,400);
  wall=createSprite(145,89,67,50);

  
  car=createSprite(400, 200, 50, 50);
  
  
 


  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}