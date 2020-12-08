var bullet1 , barrier , wall;
var speed , weight , thickness;

function setup() {
  createCanvas(1600,400);

speed = random(55,90);
weight = random(400,1500);
thickness=random(22,83)

  bullet = createSprite(50, 150, 50, 20);
  bullet.shapeColor="cyan";
  bullet.velocityX = speed;

  barrier = createSprite(800,100,1600,20)
  barrier.shapeColor = "white";

  barrier = createSprite(800,200,1600,20)
  barrier.shapeColor = "white";

wall = createSprite(1500, 150 , thickness, 40);
wall.shapeColor+(80,80,80);

}

function draw() {
  background(0); 
  
if(hasCollided(bullet, wall)){
  bullet.velocityX=0;
  var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

  
  if(damage>10)
  {
    wall.shapeColor=color(255,0,0);
    
  }

  if(damage<10)
  {
    wall.shapeColor=color(0,255,0);
  }
}

  drawSprites();
}



function hasCollided(lbullet, lwall){

	bulletRightEdge=lbullet.x + lbullet.width;
	wallLeftEdge=lwall.x;

		if (bulletRightEdge>=wallLeftEdge){
			return true;
		}
		else{
		return false;
		}
}





