var score=0;
function preload(){
   bubbleImage=loadImage("bubble.png");
   needleImage=loadImage("needle.png");
   bgimg=loadImage("bgimg2.jpg");
}

function setup() {
 canvas=createCanvas(500,500);
 ground=createSprite(250,490,500,20);
 needle=createSprite(200,460,60,60);
 ground.shapeColor="black";
 bubblegroup=createGroup();
 
}

function draw() {
 background("peach")
 textSize(22);
 text("score:"+score,400,100)
 needle.x=World.mouseX;
 needle.addImage(needleImage);
 needle.scale=0.8;
 needle.setCollider("point");
 spawnbubbles();
 if(bubblegroup.isTouching(needle)){
     bubblegroup.destroyEach();
     score++
 }
  
 drawSprites();
}
function spawnbubbles(){
    if(World.frameCount%90===0){
        var r=Math.round(random(50,450))
        var r2=Math.round(random(5,7))
        bubble=createSprite(r,30,40,40);
        bubble.addImage(bubbleImage);
        bubble.velocityY=r2;
        bubble.scale=0.5;
       // bubble.lifetime=100;
        bubblegroup.add(bubble);
    }
}

  