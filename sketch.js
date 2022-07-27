


var kid,kidImg
var monster,monsterImg
var ground2,ground2Img,invisibleGround

function preload(){
kidImg = loadImage("kid.png")
monsterImg = loadImage("monster.png")
ground2Img = loadImage("ground2.png")

}

function setup() {
    createCanvas(600,600) 
    ground2 = createSprite(0,570)
    ground2.addImage(ground2Img)
    ground2.velocityX = -4

    kid = createSprite(50,500)
    kid.addImage(kidImg)
    kid.scale = 0.3
    
    invisibleGround = createSprite(0,580,400,10);
    invisibleGround.visible = false;
    console.log("Hello"+ 5)
}

function draw() {
    background("white")
    if(ground2.x < 0){
        ground2.x = 300
    }

    if(keyDown("space")&& kid.y >= 100) {
        kid.velocityY = -10;
      }
      
      kid.velocityY = kid.velocityY + 0.8
      
      if (ground2.x < 0){
        ground2.x = ground2.width/2;
      }

      kid.collide(invisibleGround);

    spawnMonster()
 drawSprites()
}
function spawnMonster(){
    if(frameCount%100===0){
        monster = createSprite(width,500)
        monster.velocityX = -6
        monster.addImage(monsterImg) 
        monster.scale = 0.3
    }
}