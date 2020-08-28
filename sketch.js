
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world = Matter.World;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1 = new Dustbin(760,680,180,20)
   dustbin2 = new Dustbin(670,680,20,100)
  dustbin3 = new Dustbin(850,680,20,100)
  ground = new Ground(400,700,1600,20)
 paper1=new Paper(0,430,5)
 paper2 = new Paper(120,430,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  engine.update;
  background(0);
 dustbin1.display();
  dustbin2.display();
 dustbin3.display();
 ground.display();
 paper1.display();
 paper2.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper2.body,paper2.body.position,{x:65,y:-65});
	   
	 }
  }

