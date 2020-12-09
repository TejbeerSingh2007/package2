var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var rect1;
var rect2;
var rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	bottomBody = Bodies.rectangle(width/2,630,200,20, {isStatic:true});
	World.add(world, bottomBody);

	bottomBodySprite = createSprite(400,650,200,20);
	bottomBodySprite.shapeColor = "red";

	leftBody = Bodies.rectangle(290,560,20,200, {isStatic:true});
	World.add(world, leftBody);

	leftBodySprite = createSprite(290,560,20,200);
	leftBodySprite.shapeColor = "red";

	rightBody = Bodies.rectangle(490,560,20,200, {isStatic:true});
	World.add(world, rightBody);
	
	rightBodySprite = createSprite(490,560,20,200);
	rightBodySprite.shapeColor = "red";

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	
	Matter.Body.setStatic(packageBody,false);
  }

}



