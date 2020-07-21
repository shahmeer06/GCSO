var car, wall;

var speed, weight;

var deformation;

function setup() {
  createCanvas(800,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(720, 200, 60, height/2)
  wall.shapeColor = "rgb(80, 80, 80)"

speed = random(20, 50)
weight = random(400, 1500)

car.velocityX = speed

deformation = (.5 * weight * speed * speed) / 22500

}

function draw() {
  background(255,255,255);  
  car.collide(wall)
  if (deformation < 100){
    car.shapeColor = "rgb(0, 255, 0)"
  }
  
 if (deformation > 100 && deformation < 180){
   car.shapeColor = "rgb(230, 230, 0)"
 } 
  
 if (deformation > 180){
   car.shapeColor = "rgb(255, 0, 0)"
 }

  drawSprites();

}