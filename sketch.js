const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var tree, stone, ground;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7;
var boy, chain;

function preload()
{
	boyImg = loadImage("boy.png");
	treeImg = loadImage("tree.png");
}

function setup() {
	var canvas = createCanvas(1800, 900);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = createSprite(1200,500,800,800);
	tree.addImage(treeImg);
	tree.scale = 0.7;
	ground = new Ground(0,900,3600,40);
	boy = createSprite(250,750,10,10);
	boy.addImage(boyImg);
	boy.scale = 0.2;
	stone = new Stone(100,100,90,100);
	mango1 = new Mango(1100,450,90,100);
	mango2 = new Mango(1500,440,90,90);
	mango3 = new Mango(1250,300,90,100);
	mango4 = new Mango(1000,400,90,100);
	mango5 = new Mango(1300,200,90,100);
	mango6 = new Mango(1100,300,90,100);
	mango7 = new Mango(1400,350,90,100);
	chain = new Chain(stone.body,{x: 160, y:630});
	Engine.run(engine);
}


function draw() {
  background(200);

  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  ground.display();
  boy.display();
  chain.display();
  stone.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);

  stroke(17,247,47);
  strokeWeight(30);
  textSize(30);
  text("Press space key for second chance",100,50);
}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x:160, y:630});
		chain.attach(stone.body);
		
	}
}

function detectCollision(objectA,objectB) {
	mangoBodyPosition = objectA.body.position;
	stoneBodyPosition = objectB.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	
	if(distance <= objectA.radius + objectB.radius) {
		Matter.Body.setStatic(objectB.body,false);
	}
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
    chain.fly();
}