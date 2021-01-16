const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var sky, skyImg;
var fairy, fairyflying, fairyVoice;
var star, starImage;
var star2, starImg;







function preload()
{
	
skyImg = loadImage("starryNight.jpg");
fairyflying = loadAnimation("fairyImage1.png","fairyImage2.png");
fairyVoice = loadSound("music.mp3");
starImage = loadImage("starImage.png");
starImg = loadImage("star.png");
	
	

}

function setup() {

createCanvas(1000,700);

engine = Engine.create();
world = engine.world;



sky = createSprite(500,350,1000,10);
sky.addImage(skyImg);

star2 = createSprite(920,100,20,20);
star2.addImage(starImage);
star2.scale = 0.05;

var star_options= {
  isStatic:true
}
star = Bodies.rectangle(920,150,20,20,star_options);
World.add(world,star);
var star_options= {
  isStatic:true
}
star = Bodies.rectangle(920,150,20,20,star_options);
World.add(world,star);

fairy = createSprite(150,500,20,20);
fairy.addAnimation("flying",fairyflying);
fairy.scale = 0.3;

fairyVoice.play();

}


function draw() {
 
  Engine.update(engine);

  
  
    //rect(CENTER);
    //rect(star.position.x,star.position.y,20,20);

    //rect(CENTER);
    //rect(star2.position.x,star2.position.y,20,20);
  
  
  star2.x = star.position.x;
  star2.y = star.position.y;
  
  
  
  
  

 
  keyPressed();

  if(star.position.y>470){
    Matter.Body.setStatic(star,true);
  }



  drawSprites();

}

function keyPressed() {
  //write code here
  
    

if(keyDown(LEFT_ARROW)){
	fairy.x = fairy.x-10;
}

if(keyDown(RIGHT_ARROW)){
	fairy.x = fairy.x+10;
}
  
if (keyCode === DOWN_ARROW){
  Matter.Body.setStatic(star,false);
}
  
}
