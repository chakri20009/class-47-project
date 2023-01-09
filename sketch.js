var basket_ball,foot_ball;
var basket_ball_img,foot_ball_img;
var cricket_ball,bowling_ball;
var cricket_ball_img,bowling_ball_img
var basket,basket_img;
var tennis_ball,volley_ball;
var tennis_ball_img,volley_ball_img;



function preload(){
  basket_ball_img=loadImage("basket_ball.png");
  foot_ball_img=loadImage("foot_ball.png");
  cricket_ball_img=loadImage("cricket_ball.png");
  bowling_ball_img=loadImage("bowling_ball.png");
  basket_img=loadImage("basket.png");
  tennis_ball_img=loadImage("tennis_ball.png");
  volley_ball_img=loadImage("volley_ball.png");
}

function setup() {
  createCanvas(1600,800);
 basket= createSprite(600, 600, 50, 50);
 basket.addImage(basket_img)
 textSize(15);
}

function draw() {
  background("white");  
  basket.x=World.mouseX
 spawnFootBall();
 spawnBasketBall();
 spawntennisBall();
 push()
 fill("black");
 text("Score:",1400,70);
 pop();
   drawSprites();
}

function spawnFootBall() {
  //write code here to spawn the cricket_ball
  if (frameCount % 60 === 0) {
    var foot_ball = createSprite(Math.round(random(100,750)),700,40,10);
    foot_ball.y = Math.round(random(100,220));
    foot_ball.addImage(foot_ball_img);
    foot_ball.scale = 0.4;
    foot_ball.velocityY = 10;
    
     //assign lifetime to the variable
    foot_ball.lifetime = 300;
    
    
  }
  
}
function spawnBasketBall() {
  //write code here to spawn the basket_ball
  if (frameCount % 80 === 0) {
    var basket_ball = createSprite(Math.round(random(100,850)),700,40,10);
    basket_ball.y = Math.round(random(100,220));
    basket_ball.addImage(basket_ball_img);
    basket_ball.scale = 0.4;
    basket_ball.velocityY = 15;
    
     //assign lifetime to the variable
    basket_ball.lifetime = 300;
    
    
  }
  
}
function spawntennisBall() {
  //write code here to spawn the tennis ball
  if (frameCount % 90 === 0) {
    var tennis_ball = createSprite(Math.round(random(100,950)),700,40,10);
    tennis_ball.y = Math.round(random(100,220));
    tennis_ball.addImage(tennis_ball_img);
    tennis_ball.scale = 0.4;
    tennis_ball.velocityY = 15;
    
     //assign lifetime to the variable
    tennis_ball.lifetime = 300;
    
    
  }
  
}

