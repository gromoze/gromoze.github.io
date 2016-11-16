var score = 10;

button.onclick = function(event){
	games();
	input();
};

function games(){
	var odin;
	var dwa;
	var tri;
	var images;
var game1 = Math.random();
	if(game1 < 0.33){
		 images = document.getElementById("oneWindow");
		images.setAttribute("class", "vishna");
		 odin = 2;
	} else if(game1 <= 0.66){
		 images = document.getElementById("oneWindow");
		images.setAttribute("class", "sliva");
		odin = 3;
	} else {
		 images = document.getElementById("oneWindow");
		images.setAttribute("class", "limon");
		odin = 4;
	};
var game2 = Math.random();
	if(game2 < 0.33){
		 images = document.getElementById("twoWindow");
		images.setAttribute("class", "vishna");
		 dwa = 2;
	} else if(game2 <= 0.66){
		 images = document.getElementById("twoWindow");
		images.setAttribute("class", "sliva");
		 dwa = 3;
	} else {
		 images = document.getElementById("twoWindow");
		images.setAttribute("class", "limon");
		 dwa = 4;
	};
var game3 = Math.random();
	if(game3 < 0.33){
		 images = document.getElementById("threeWindow");
		images.setAttribute("class", "vishna");
		 tri = 2;
	} else if(game3 <= 0.66){
		 images = document.getElementById("threeWindow");
		images.setAttribute("class", "sliva");
		 tri = 3;
	} else {
		 images = document.getElementById("threeWindow");
		images.setAttribute("class", "limon");
		 tri = 4;
	};



if(odin * dwa * tri == 8 ){
	score += 10;
} else if(odin * dwa * tri == 27){
	score += 7;
} else if(odin * dwa * tri == 64){
	score += 3;
} else {
	score -= 1;
	};
};
 

var input = function(){
	var input = document.getElementById("input");
	input.value = score;
	if(score<1){
	alert("Вот и все");
	location.reload();
	}
};

