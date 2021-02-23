var crewAni,crew;
var arrowG,arrow,arrowImg;
var jumpS,levelS,deathS;
var reset,gameOver,resetImg,gameOverImg,ground,backg,back;
var coin,coinAni,coinG;
var speed,speedImg,speedG;
var PLAY=1;
var END=2;
var gameState=PLAY;
function preload(){
//jumpS=loadSound("jump.wav");
//levelS=loadSound("level.wav");
//deathS=loadSound("death.wav");
crewAni=loadAnimation("crew1.png","crew2.png","crew3.png");
arrowImg=loadImage("arrow.png");
resetImg=loadImage("restart.png");
gameOverImg=loadImage("gameOver.png");
//ground=loadImage("ground2.png");
backg=loadImage("background.jpg");
coinAni=loadAnimation("coin1.png","coin2.png","coin3.png");
speedImg=loadImage("speed.png");
}

function setup() {
	createCanvas(1350, 650);
  back=createSprite(675,325,1350,650);
  back.addImage(backg);
  back.scale=1.35
  back.velocityX=-6; 
  crew=createSprite(100,520,10,10);
  crew.addAnimation("run",crewAni);
  crew.scale=0.6;
  reset=createSprite(200,100,10,10);
  reset.addImage(resetImg);
  gameOver=createSprite(10,30,10,10);
  gameOver.addImage(gameOverImg);
  arrowG=createGroup();
  wall1=createSprite(650,650,1450,1);
  wall2=createSprite(650,0,1450,1);
  coinG=createGroup();
  speedG=createGroup();
}


function draw() {
  background(0);
  if(back.x<10){
    back.x=back.width/2;
  }
  if(keyDown(UP_ARROW)){
    crew.y-=5;
  }
  if(keyDown(DOWN_ARROW)){
    crew.y+=5;
  }

  spawnArrows();
  spawnCoins();
  spawnSpeed();

  crew.collide(wall1);
  crew.collide(wall2);  

 drawSprites();
}
function spawnArrows(){
  if(frameCount%100===0){
  arrow=createSprite(1350,random(10,640),10,10);
  arrow.addImage("arrow",arrowImg);
  arrow.velocityX=-16;
  arrow.scale=1.4;
  arrowG.add(arrow);
  }
}
function spawnCoins(){
  if(frameCount%1000===0){
    coin=createSprite(1350,random(10,640),10,10);
    coin.addAnimation("spin",coinAni);
    coin.velocityX=-25;
    coin.scale=0.19;
    coinG.add(coin);
  }
}
function spawnSpeed(){
  if(frameCount%800===0){
    speed=createSprite(1350,random(10,640),10,10);
    speed.addImage(speedImg);
    speed.velocityX=-20;
    speed.scale=0.25;
    speedG.add(speed);
  }
}




