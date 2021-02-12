const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(480,200,200,20);
	bob1=new bob(400,400,40);
	bob2=new bob(440,400,40);
	bob3=new bob(480,400,40);
	bob4=new bob(520,400,40);
	bob5=new bob(560,400,40);
	
	

	rope1=new rope(bob1.body,roofObject.body,-80,10)
	rope2=new rope(bob2.body,roofObject.body,-40, 10)
	rope3=new rope(bob3.body,roofObject.body,0, 10)
	rope4=new rope(bob4.body,roofObject.body,40, 10)
	rope5=new rope(bob5.body,roofObject.body,80, 10)

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

  	}
}



