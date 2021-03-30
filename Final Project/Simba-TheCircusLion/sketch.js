var alien,bg;
var ground,gr;
var ringM,ringMaster;
var obstacles;
var simba,simbaWalk;

function preload(){
alien=loadAnimation("Alien/skeleton-walking_0.png","Alien/skeleton-walking_1.png","Alien/skeleton-walking_2.png","Alien/skeleton-walking_3.png","Alien/skeleton-walking_4.png","Alien/skeleton-walking_5.png","Alien/skeleton-walking_6.png",
                    "Alien/skeleton-walking_7.png","Alien/skeleton-walking_8.png","Alien/skeleton-walking_9.png","Alien/skeleton-walking_10.png","Alien/skeleton-walking_11.png","Alien/skeleton-walking_12.png","Alien/skeleton-walking_13.png",
                    "Alien/skeleton-walking_14.png","Alien/skeleton-walking_15.png","Alien/skeleton-walking_16.png","Alien/skeleton-walking_17.png","Alien/skeleton-walking_18.png","Alien/skeleton-walking_19.png","Alien/skeleton-walking_20.png")

simbaWalk=loadAnimation("lion walking-0.png","lion walking-1.png","lion walking-2.png","lion walking-3.png","lion walking-4.png","lion walking-5.png",
                    "lion walking-6.png","lion walking-7.png","lion walking-8.png","lion walking-9.png","lion walking-10.png","lion walking-11.png");

bg=loadImage("bg.png")
gr=loadImage("ground.png")
barr=loadImage("barrel1.png")
ringM=loadImage("ringMaster.png")
ring=loadImage("fireRing.png")
}

function setup(){
createCanvas(1000,600)
circus=createSprite(500,300,1000,800)
circus.addImage(bg)
circus.scale=5;

ground=createSprite(500,550,800,20);
ground.addImage(gr)
ground.scale=0.7

ringMaster=createSprite(100,440,40,10)
ringMaster.addImage(ringM)
ringMaster.scale=0.15
ringMaster.velocityX=-3

simba=createSprite(100,470,40,10)
simba.addAnimation("walking",simbaWalk)
simba.scale=0.45;
}

function draw(){
background("black")

circus.velocityX=-5
if(circus.x<300){
  circus.x=500
}
ringMaster.display()
spawnBarrels();
spwanRings();
drawSprites();
}


function spawnBarrels(){
  if(frameCount % 200 ===0){
   var barrel = createSprite(1300,490,40,10)
   barrel.addImage(barr)
   barrel.velocityX=-3;
   barrel.scale=0.15
   barrel.lifetime=400;

  }
}

function spwanRings(){
  if(frameCount % 200 === 0){
    var fireRing= createSprite(1000,460,40,10)
    fireRing.addImage(ring)
    fireRing.velocityX=-3;
    fireRing.lifetime=400;
    fireRing.scale=0.15
  }
}