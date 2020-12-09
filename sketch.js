
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
const MouseConstraint= Matter.MouseConstraint;
const Mouse= Matter.Mouse;
var ground;
var pendulum;
var canvas;
function setup() {
  createCanvas(1000,1000)
engine = Engine.create();
world = engine.world;


let canvasmouse= Mouse.create(canvas.elt);
canvasmouse.pixelRatio = pixelDensity();
let options={
mouse:canvasmouse
}
mConstraint= MouseConstraint.create(engine,options);
World.add(world,mConstraint);

	//ground = new Ground(400,100,400,30)

pendulum1= new Pendulum(250,400,"yellow")
pendulum2= new Pendulum(310,400,"yellow")
pendulum3= new Pendulum(370,400,"yellow")
pendulum4= new Pendulum(430,400,"yellow")
pendulum5= new Pendulum(490,400,"yellow")

sling1= new Sling(pendulum1.body,{x:340,y:200})
sling2= new Sling(pendulum2.body,{x:400,y:200})
sling3= new Sling(pendulum3.body,{x:460,y:200})
sling4= new Sling(pendulum4.body,{x:520,y:200})
sling5= new Sling(pendulum5.body,{x:580,y:200})

	Engine.run(engine);  
}


function draw() {
  rectMode(CENTER);
  background("black");

//ground.display();
sling1.display();
sling2.display();
sling3.display();
sling4.display();
sling5.display();

pendulum1.display();
pendulum2.display();
pendulum3.display();
pendulum4.display();
pendulum5.display();
  drawSprites();
}

function mouseDragged(){
Matter.Body.setPosition(pendulum1.body,{x: mouseX, y: mouseY});
}