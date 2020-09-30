var bullet, weight, speed;
var wall, thickness;
var damage = 0;

function setup(){
  createCanvas(1000, 400);

  speed = Math.round(random(223, 321));
  thickness = Math.round(random(22, 83));
  weight = Math.round(random(30, 52));

  bullet = createSprite(150, 200, 20, 10);
  bullet.shapeColor = "white";
  bullet.velocityX = speed * 0.092;


  fill(80, 80, 80);
  wall = createSprite(850, 200, thickness, height/2);

}

function draw(){
  background(0);
  textSize(24);
  fill("yellow");
  text("Bullet Speed: " + speed, 100, 40);
  text("Bullet weight: " + weight, 400, 40);
  text("Wall Thickness: " + thickness, 100, 100);
  text("Overall Damage: " + damage, 400, 100);

  collide(bullet, wall);
  if (collide(bullet, wall)){
    damageCalculate(wall);
  }
  drawSprites();

}

function collide(object1, object2){
  if(object2.x - object1.x < object1.width/2 + object2.width/2){
    object1.velocityX = 0;
    return true;
  }
  else{
    return false;
  }
}

function damageCalculate(object){
  var KE = 0.5 * weight * speed * speed;
  var wallThickness = thickness * thickness * thickness;
  damage = Math.round(KE/wallThickness);
  if (damage<10){
      object.shapeColor = "green";
  }
  else{
      object.shapeColor = "red";
  }
}