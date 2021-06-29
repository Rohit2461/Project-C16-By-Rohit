
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  

}



function setup() {
  createCanvas(500,500);
  
  
  monkey =createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  
 
  
  //console.log(ground.x);
  
  foodGroup=createGroup();
  obstacleGroup=createGroup();

}


function draw() {
  background("green");
   
   if(keyDown("space") && monkey.y>=300  ){
    monkey.velocityY=-13;
      
  }
  
 // add gravity
 monkey.velocityY = monkey.velocityY + 0.8 
   
 food(); 
  obstacle();
  
   ground=createSprite(450,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;

 monkey.collide(ground); 
  
  
  
  var survivalTime=0;
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:" + score,500,50)
  
  stroke("black");
  textSize(20);
  //fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:" + survivalTime,100,50);

  drawSprites();
}

function food(){
  
 if(frameCount % 80 ===0 ) {
  var food= createSprite (500,200,20,20);
   food.y=Math.round(random(120,200));
   food.addImage(bananaImage);
   food.scale=0.15;
   food.velocityX=-5;
   food.lifetime=150;
   foodGroup.add(food);
}

}

function obstacle(){
  if (frameCount% 300 ===0){
    var obstacle=createSprite(500,320,10,20);
    obstacle.x=Math.round(random(500,150))
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.2;
    obstacle.velocityX=-5;
    obstacle.lifetime=100;
  }
  
}

