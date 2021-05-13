var bullet,wall,thickness;
var speed,weight;
var damage;

function setup() {
  createCanvas(1600,400);
  speed=random(200,600);
  weight=random(30,52);
  thickness=(22,83)
  bullet = createSprite(200, 200, 50, 20);
  wall=createSprite(800,200,60,height/2);
  wall.shapeColor=("80,80,80");
  bullet.velocityX=speed;

}

function draw() {
  background("0");  

if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
console.log(damage);
    if (damage>=5)
    {
    wall.shapeColor=color(255,0,0);
    }

    if (damage<5)
    {
    wall.shapeColor=color(0,255,0);
    }
}

  drawSprites();
}
 function hasCollided(bullet,wall)
{
  var bulletRightEdge=bullet.x+bullet.width;
  var wallleftEdge=wall.x;
  if(bulletRightEdge>=wallleftEdge)
  {
   return true;
  }
    return false;
}