
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var groundSprite, ground;

function preload()
{
 
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(55,20);
	

	rect1 = new Dustbin(450,640,210,13);
	rect2 = new Dustbin(355,590,20,120);
	rect3 = new Dustbin(545,590,20,120);

	Engine.run(engine);
  }


function draw() {
  Engine.update(engine);
  background(0);

  groundSprite=createSprite(width/2, 650, width,10);
  groundSprite.shapeColor=color("brown");

  //Create a Ground
  ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
  World.add(world, ground);

  paper.display();
  rect1.display();
  rect2.display();
  rect3.display();
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x :25,y:-35 });
	}
}


