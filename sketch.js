var ball,thickness;
var bullet,bullet1,speed,weight;
var bulletWeight,bulletSpeed,ThicknessofWall;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(150,200,50,50);
  wall = createSprite(500,200,thickness,height/2);
 bullet1 =  createSprite(300, 200, 50, 50);
  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);
  Damage = 0.5*bulletWeight*bulletSpeed*bulletSpeed/(ThicknessofWall*ThicknessofWall*ThicknessofWall);

  
}
function draw() {
  background("pink"); 
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0)
    }
  } 
  
  drawSprites();
}
function hasCollided(bullet,wall){
   bulletRightEdge = bullet.x + bullet.width;
   wallLeftEdge=wall.x;
   if(bulletRightEdge>=wallLeftEdge){
     return true
   }
   return false
}