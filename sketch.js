var   trashSprite,box1,box2,box3;
var trashBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	

	trashSprite=createSprite(200, 80, 10,10);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box1=createSprite(300,645,10,50);
	box1.shapeColor=("red");
box2=createSprite(400,670,200,10);
box2.shapeColor=("red");
box3=createSprite(500,645,10,50);
box3.shapeColor=("red");
	engine = Engine.create();
	world = engine.world;

	trashBody = Bodies.circle(200 , 650 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, trashBody);
	


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  trashSprite.x= trashBody.position.x 
  trashSprite.y= trashBody.position.y 


  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
   Matter.Body.applyForce(trashBody,trashBody.position,{x:85,y:-85});

    
  }
}



