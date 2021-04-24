const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];
var particle;

var divisionHeight=300;
var score =0;
var count=0;
var gameState="start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
    gameState="start"

    
}
 
function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);
// ground1.display();
 //particle.display();

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   for(var k=0;k<divisions.length;k++){
     divisions[k].display();
   }
if (particle!=null){
  particle.display();

    if(particle.body.position.y>750){
        if (particle.body.position.x<300){
          particle=null;
          if(count>=5)
          gameState="end"
    }

  else if (particle.body.position.y>720&&particle.body.position.x>500){
    particle=null;
    if(count>=5)
    gameState="end"
      }
  else if (particle.body.position.y<720&&particle.body.position.x<500&&particle.body.position.x>300){
particle=null;
if(count>=5)
gameState="end"
  }
}
}
 
  for (var j = 0; j < particles.length; j++) {
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }
}
function mousePressed(){
  if(gameState!="end"){
particle=new Particle(mouseX,10,10,10)
  }
  }