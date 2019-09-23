var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(400, 400, {backgroundColor: 0x53A74C});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

var cat_texture = PIXI.Texture.fromImage("cat.png");
var cheese_texture = PIXI.Texture.fromImage("cheese.png");
var mouse_texture = PIXI.Texture.fromImage("mouse.png");
var end_texture = PIXI.Texture.fromImage("Drawing.png");

var cat = new PIXI.Sprite(cat_texture);
var cheese = new PIXI.Sprite(cheese_texture);
var mouse = new PIXI.Sprite(mouse_texture);

var cat_x_array = [200];
var cat_y_array = [200];
var cat_count = 0;
var cheese_count = 0;

cat_x_array[cat_count] = 200;
cat_y_array[cat_count] = 200;


cat.position.x = Math.round(Math.floor(Math.random() * 380) /10) * 10;;
cat.position.y = Math.round(Math.floor(Math.random() * 380) /10) * 10;;

cheese.position.x = Math.round(Math.floor(Math.random() * 380) /10) * 10;;
cheese.position.y = Math.round(Math.floor(Math.random() * 380) /10) * 10;;

mouse.position.x = Math.round(Math.floor(Math.random() * 380) /10) * 10;;
mouse.position.y = Math.round(Math.floor(Math.random() * 380) /10) * 10;;

cat_x_array[cat_count] = cat.position.x;
cat_y_array[cat_count] = cat.position.y;

stage.addChild(cat);
stage.addChild(cheese);
stage.addChild(mouse);



function in_array(x_position, y_position){
	counter = 0;
	
	while (counter <= cat_count){
		if ((x_position == cat_x_array[counter]) && (y_position == cat_y_array[counter] - 10)){
			var end = new PIXI.Sprite(end_texture);
			end.position.x = 0;
			end.position.y = 125;
			stage.addChild(end);
			return true;
		}
		counter++;
	}
	return false;
	
}

document.getElementById("score").innerHTML = "Cheese Collected: " + cheese_count;
function EventHandler(e) {

  if (e.keyCode == 87) { // W key
    mouse.position.y -= 10;
  }

  if (e.keyCode == 83) { // S key
    mouse.position.y += 10;
  }

  if (e.keyCode == 65) { // A key
    mouse.position.x -= 10;
  }

  if (e.keyCode == 68) { // D key
    mouse.position.x += 10;
  }
  
  if((mouse.position.y == cheese.position.y - 10) && (mouse.position.x == cheese.position.x)){
		var cat = new PIXI.Sprite(cat_texture);
		cat_count++;
		cat.position.x = Math.round(Math.floor(Math.random() * 380) /10) * 10;
		cat.position.y = Math.round(Math.floor(Math.random() * 380) /10) * 10;
		cat_x_array[cat_count] = cat.position.x;
		cat_y_array[cat_count] = cat.position.y;
		cheese.position.x = Math.round(Math.floor(Math.random() * 380) /10) * 10;
		cheese.position.y = Math.round(Math.floor(Math.random() * 380) /10) * 10;
		stage.addChild(cat);
		cheese_count++;
		document.getElementById("score").innerHTML = "Cheese Collected: " + cheese_count;
	}
	if(mouse.position.y){
		in_array(mouse.position.x, mouse.position.y)
	}
}




document.addEventListener('keydown', EventHandler);

function animate() {
	requestAnimationFrame(animate);
	//cheese.rotation += 0.1;
	renderer.render(stage);
}
animate();