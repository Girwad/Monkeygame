
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 monkey = createSprite(80,315,20,20); 
 monkey.addAnimation("moving",monkey_running);
 monkey.scale = 0.1;
  
 ground = createSprite(400,350,900,10);
 ground.velocityX = -4;
 ground.x = ground.width/2;
 console.log(ground.x)
  
 score = 0;
 survivalTme = 0;
  
 obstacleGroup = createGroup();
 bananaGroup = createGroup();
}


function draw() {
 background(255);
  
  //console.log(monkey.velocityY)
  
  if(ground.x<0) {
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")) {
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
   stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100,50);


  
  spawnFood();
  spawnObstacle();
  
  drawSprites();
}

function spawnFood() {
  if(frameCount % 80 === 0){
    var banana = createSprite(350,200,20,20);
    banana.velocityX = -4;
    banana.setlifetime = 134;
    
    banana.y = Math.round(random(130,320));
    
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    
    bananaGroup.add(banana);
  }
}

function spawnObstacle() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(400,330,10,40);
    obstacle.velocityX = -6;
    var rand = Math.round(random(1,6));
    obstacle.lifetime = 134;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    
    obstacleGroup.add(obstacle);
  }
}


  
  
 


