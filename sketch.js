var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monkey , monkey_running
var banana ,bananaImage;
var obstacle, obstacleImage,obstacleGroup;
var Food,FoodGroup;
//var backgroundImage;
var survivalTime=0;
var ground;

function preload()
                {
                   
                 //backgroundImage = loadImage(""); 
                    
                monkey_running =           loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

                bananaImage = loadImage("banana.png");
                obstaceImage = loadImage("obstacle.png");

                }

function setup() 
              {
                 createCanvas(600,600);
                
                //background = createSprite(0, 0, 600, 600);
                //background.addImage(backgroundImage);
               // background.scale = 2.5

                 ground = createSprite(300,285,1000,20);
                 ground.x = ground.width /2;


                 
                 survivalTime=0;

                 monkey = createSprite(80,190,20,20);
                 monkey.addAnimation("running",monkey_running);
                 monkey.scale = 0.1;
                
                

              }

function draw() 
              {
                 //background.velocityX = -3
                
                //if (background.x < 0) 
                   // {
                      //background.x = background.width / 2;
                   // }

                

                 background("white");
                
               
                
                
                stroke("black");
                textSize(20);
                fill("black");
                text("survivalTime:"+ survivalTime, 100,50);
                
                
                

                 FoodGroup = createGroup();
                
                 obstacleGroup = createGroup();
                 obstacleGroup.setVelocityXEach(0);

                 if(gameState === PLAY){

                  monkey.velocityY = monkey.velocityY + 0.8
                
                  monkey.collide(ground);
                   
                   if (ground.x < 0){
                    ground.x = ground.width/2;
                  }
                  
                    ground.velocityX = -(4 + 3* survivalTime/100)
                
                 spawnFood();
                 spawnobstacle();
                
                 
                 
                 if(keyDown("space")) {
                   monkey.velocityY = -12;
                 }
                  
                drawSprites();
                   
                   if(FoodGroup.isTouching(monkey)){
      FoodGroup.destroyEach();
      
      score=score+2;
    }
    else
    {

      if(obstacleGroup.isTouching(monkey)){
        gameState=END;
        
        FoodGroup.destroyEach();
        obstacleGroup.destroyEach();
        FoodGroup.setVelocityXEach(0);
        
        obstacleGroup.setVelocityXEach(0);

        //monkey.x=80;
        //monkey.y=190;
      }
    }
  }
}
  

 function spawnFood() {
  if (frameCount % 60 === 0) {
    var Food = createSprite(380,250,20,20);
    Food.y = Math.round(random(250,250));
    Food.addImage(bananaImage);
    Food.scale = 0.09;
    Food.velocityX = -3;
    
    Food.lifetime = 200;
 
    FoodGroup.add(Food);
  }
}

function spawnobstacle() {
  if (frameCount % 65 === 0) {
    var obstacle = createSprite(250,250,20,20);
    obstacle.y = Math.round(random(265,265));
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.09;
    obstacle.velocityX = -3;
    
    obstacle.lifetime = 400;
 
    obstacleGroup.add(obstacle);
  }
}
 
