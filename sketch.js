var yuvraj,yuvrajimg,monster,bgimg;
var ground;
var canvas;
var bot;
var boting;
var bullets=[];
var bulletes;
var score;
function preload(){
yuvrajimg= loadImage("pubg1.png")
boting=loadImage("enemy.png")
bulletes=loadImage("bullet.png")
}
function setup(){
canvas=createCanvas(1200,1200)
ground=createSprite(300,1100,2000,20)
ground.velocityX=-1;
yuvraj=createSprite(100,1090,10,20)
yuvraj.addImage(yuvrajimg);
yuvraj.scale=0.5;
score=0;

}
function draw (){
  background(255);
  text("Deaths:"+score,900,30)
  yuvraj.collide(ground);
  if(ground.x<0){
    ground.x=ground.width/2
  }
  if(keyDown("space")&& yuvraj.y<=500){
    yuvraj.velocityY=-8
  }
  yuvraj.velocityY+=0.8;
  enemy();
if(keyWentDown("y")){
  bullet();
}

  drawSprites();
}
function enemy(){
  if(frameCount%600===0){
    bot=createSprite(1300,1000,20,10);
    bot.veloc;ityX=-3;
    bot.scal  ;e=0.5
bot.addImage(boting)
  }
}   

function bullet(){
 var bullets=[];
    for(var k=0;k<9;k++){
      bullets[k] = createSprite(500, 200);
      bullets[k].addImage(bulletes);
      bullets[k].scale = 0.18;
      bullets[k].x=yuvraj.x+70;
      bullets[k].y=yuvraj.y-50;
      bullets[k].velocityX=20;
      if(bullets[k].isTouching(bot)){
        bot.destroy()
          score=score+1;
     }
 
    }}