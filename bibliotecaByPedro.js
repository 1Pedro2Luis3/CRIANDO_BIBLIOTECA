//Criada no dia 07/12/21, terça-feira.
function ConfirmacaoDeToque(objeto1,objeto2)
{
  if (objeto1.x - objeto2.x < objeto2.width/2 + objeto1.width/2
    && objeto2.x - objeto1.x < objeto2.width/2 + objeto1.width/2
    && objeto1.y - objeto2.y < objeto2.height/2 + objeto1.height/2
    && objeto2.y - objeto1.y < objeto2.height/2 + objeto1.height/2) 
    {
      return true;
    }
  else 
    {
      return false;
    }
}

function Colisão(objeto1, objeto2){

  if (objeto1.x - objeto2.x < objeto2.width/2 + objeto1.width/2
    && objeto2.x - objeto1.x < objeto2.width/2 + objeto1.width/2)
    {
      objeto1.velocityX = objeto1.velocityX * -1;
      objeto1.shapeColor = "yellow";
  
      objeto2.velocityX = objeto2.velocityX * -1;
      objeto2.shapeColor = "yellow";
    }
  
  if (objeto1.y - objeto2.y < objeto2.height/2 + objeto1.height/2
    && objeto2.y - objeto1.y < objeto2.height/2 + objeto1.height/2)
    {
      objeto1.velocityY = objeto1.velocityY * -1;
      objeto1.shapeColor = "yellow";
  
      objeto2.velocityY = objeto2.velocityY * -1;
      objeto2.shapeColor = "yellow";
    }
}