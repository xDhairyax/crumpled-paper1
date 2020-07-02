//var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
//var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
//const Body = Matter.Body;
var ground;
var paper;
var speed;
var box,pillar1,pillar2;
var launcher;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 //World.add(world, ground);
	 ground = new Ground(400,380,800,20);
	 paper = new Paper(100,300,40);
	 box = new Dustbin(600,300,250,20);
	// pillar1 = new Dustbin(485,340,20,60);
	 //pillar2 = new Dustbin(715,340,20,60);
	Engine.update(engine);
  
	// launcher=new Launcher(paper.body,{x:200,y:200});
}


function draw() {
  rectMode(CENTER);
  background("white");

  keyPressed();
  ground.display();
  paper.display();
  box.display();
 // pillar1.display();
  //pillar2.display();
  //launcher.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}
//function mouseDragged(){
//	Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})
//}
//function mouseReleased(){
//	launcher.fly();
//}
