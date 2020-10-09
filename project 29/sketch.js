const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, box1, box2, box3, box4, box5, box6, box7, box8, box9, polygon, slingshot;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(300,300,200,5);
  //level 1
  box1 = new Box(300,100,30,30);
  box2 = new Box(270,100,30,30);
  box3 = new Box(330,100,30,30);
  box4 = new Box(240,100,30,30);
  box5 = new Box(360,100,30,30);
  //level 2
  box6 = new Box(300,100,30,30);
  box7 = new Box(270,100,30,30);
  box8 = new Box(330,100,30,30);
  //level 3
  box9 = new Box(300,100,30,30);
  //polygon
  polygon = new Paper(100,100,40);
  slingshot = new SlingShot(polygon.body,{x:100, y:200});
}

function draw() {
  background(0); 
  Engine.update(engine)
  
ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
polygon.display();

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingshot.fly();
}