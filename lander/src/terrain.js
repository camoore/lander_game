export default class Terrain {
  constructor(screenWidth, screenHeight){
    var x =0;
    var y = Math.random() * screenHeight/2  + 10;
    var dist = 0;
    this.path = [{x:x, y:y}];

    function clampHeight(y){
    do {
      var newHeight = y;
      //Calculate a random distance
      var probability = Math.random();
      if(probability < 0.45) { //30% chance
        newHeight-= Math.random() * .50;
      }
      else if(probability > 0.45){
        newHeight += Math.random() * .50;
      }
      console.log(newHeight);
    }while(newHeight  < screenHeight/2 || newHeight < screenHeight-10);
    return newHeight;

  }
  while(x < screenWidth){
    x = x + Math.random() * 50;
    y = clampHeight(y);
    this.path.push({
      x: x,
      y: y});
  }

  }

  render(ctx){
    ctx.save();
    ctx.strokeStyle = "#fff";
    ctx.beginPath();
    ctx.moveTo(this.path[0].x, this.path[0].y);
    for(var i = 1; i < this.path.length; i++){
      ctx.lineTo(this.path[i].x, this.path[i].y);
    }
    ctx.stroke();
    ctx.restore();
  }
}
