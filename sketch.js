
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(50,140,30,30);
  monkey.addAnimation("running",monkey_running)
monkey.scale=0.12;
  
  ground=createSprite(200,180,400,20);
  ground.x = ground.width/2
  
  obstaclesGroup = createGroup();
  bananasGroup = createGroup();
  
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  monkey.debug = true
  
  score = 0;
  
}


function draw() {

   background(180);
   text("Score: "+ score, 500,50);
  
  score = score + Math.round(getFrameRate()/60);
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    
    monkey.velocityY = monkey.velocityY - 0.8
    
    obstaclesGroup.setLifetimeEach(-1);
    bananasGroup.setLifetimeEach(-1);
  }
  
  
  drawSprites()
  
}
function spawnObstacles(){
  if (frameCount % 300 === 0){
   var obstacle = createSprite(600,165,10,40);
   obstacle.velocityX = -(6 + score/160);
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacleImage);
              break;
    }
   
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
   
    obstaclesGroup.add(obstacle);
 }
}

function spawnbananas(){

if (frameCount % 80 === 0){
   var banana = createSprite(600,165,10,40);
   banana.velocityX = -(6 + score/160);
   
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: banana.addImage(bananaImage);
              break;
    }
        
    banana.scale = 0.5;
    banana.lifetime = 300;

    bananasGroup.add(banana);
 }
}