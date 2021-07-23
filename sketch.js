var bg,sleep,brush,gym,eat,drink,move,bath;
var bgImg,sleepImg,brushImg,gymImg,eatImg,drinkImg,moveImg;
var bathImg;

function preload(){
  bgImg=loadImage("iss.png");
  sleepImg=loadAnimation("sleep.png");
  brushImg=loadAnimation("brush.png");
  gymImg=loadAnimation("gym1.png","gym2.png");
  eatImg=loadAnimation("eat1.png","eat2.png");
  drinkImg=loadAnimation("drink1.png","drink2.png");
  moveImg=loadAnimation("move.png","move2.png");
  bathImg=loadAnimation("bath1.png","bath2.png");

}

function setup() {
  createCanvas(800,400);
  bg=createSprite(700,300);
  bg.addImage("background",bgImg);
  
  var astronaut;
  astronaut=createSprite(400, 200, 50, 50);
  astronaut.addAnimation("sleeping", sleepImg)
  astronaut.sacle=0.1;
}

function draw() {
  background(255,255,255);  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brushImg);
    astronaut.changeAnimation("brushing");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing", bathImg);
    astronaut.changeAnimation("bathintg");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gyming",gymImg);
    astronaut.changeAnimation("gyming");
    astronaut.y=350;
    astronaut.velocityY=0;
    astronout.velocityX=0;
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating",eatImg);
    astronaut.changeAnimation("eating");
    astronaut.y=350;
    astronaut.velocityY=0;
    astronaut.velocityX=0;
  }
  if(keyDown("M")){
    astronaut.velocityX=-2;
    astronaut.velocityY=3;
  }
  
  drawSprites();
}
