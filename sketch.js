//variáveis dos retângulos
var retFixo, retMovendo;
var obj1, obj2, obj3, obj4;

function setup() {
  //tela
  createCanvas(1200,800);
  //criação dos sprites, mudança de cor e ativação de debug
  obj1 = createSprite(100,100,50,50);
  obj1.shapeColor = "green";
  obj1.debug = true;

  obj1 = createSprite(200,100,50,50);
  obj1.shapeColor = "green";
  obj1.debug = true;

  obj1 = createSprite(300,100,50,50);
  obj1.shapeColor = "green";
  obj1.debug = true;

  obj1 = createSprite(400,100,50,50);
  obj1.shapeColor = "green";
  obj1.debug = true;

  retFixo = createSprite(600, 400, 50, 80);
  retFixo.velocityY = -1;
  retFixo.shapeColor = "green";
  retFixo.debug = true;

  retMovendo = createSprite(600,200,80,30);
  retMovendo.velocityY = 1;
  retMovendo.shapeColor = "green";
  retMovendo.debug = true;
}

function draw() 
{
  //cor de fundo da tela
  background(0,0,0);  
  //movimentação do sprite pelo mouse
  
  /**retMovendo.x = World.mouseX;
  retMovendo.y = World.mouseY;**/

  /**if(ConfirmacaoDeToque(retMovendo,retFixo))
  {
    retMovendo.shapeColor = "blue";
    retFixo.shapeColor = "blue";
  }
  else
  {
    retMovendo.shapeColor = "green";
    retFixo.shapeColor = "green"; 
  }**/
 
  Colisão(retMovendo, retFixo);
  

  drawSprites();
}