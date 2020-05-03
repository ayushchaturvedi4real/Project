var numSquare = 6;
var colors= [];
var picked;


var squares= document.querySelectorAll(".square");
var display= document.querySelector("#display");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var modes = document.querySelectorAll(".mode");
var reset= document.querySelector("#reset");


init();

function init(){
	setupMode();
	setupSquares();
	res();
}


function setupMode(){
for(var i=0; i < modes.length; i++){
	modes[i].addEventListener("click",function(){
		modes[0].classList.remove("select");
		modes[1].classList.remove("select");
		this.classList.add("select");
		this.textContent === "Easy" ? numSquare = 3: numSquare = 6;
		res();
	});
  }
}


function setupSquares(){
for(var i = 0; i < squares.length ; i++){ 
squares[i].addEventListener("click", function(){
       var clicked = this.style.backgroundColor;
       if(clicked === picked){
          message.textContent = "Correct!";
          change(clicked);
          h1.style.backgroundColor = clicked;
          reset.textContent = "Play Again?"; 
       }
       else{
       	this.style.backgroundColor = "#232323";
          message.textContent = "Try Again";  
       }
	});
}
}



function res(){
	colors= randomColorGen(numSquare);
	picked= pickCol();
	reset.textContent = "New Colors";
	display.textContent = picked;
	message.textContent = "";
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
		
	}
	h1.style.backgroundColor = "steelblue";
}

reset.addEventListener("click",function(){
     res();
})

// easy.addEventListener("click", function(){
// 	easy.classList.add("select");
// 	hard.classList.remove("select");
// 	numSquare = 3;
// 	colors = randomColorGen(numSquare);
// 	picked = pickCol();
// 	for (var i = 0; i < squares.length; i++) {
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}
// 		else{
// 			squares[i].style.display= "none";
// 		}
// 	}
// })


// hard.addEventListener("click", function(){
// 	hard.classList.add("select");
// 	easy.classList.remove("select");
// 	numSquare = 6;
// 	colors = randomColorGen(numSquare);
// 	picked = pickCol();
// 	for (var i = 0; i < squares.length; i++) {
// 			squares[i].style.backgroundColor = colors[i];
// 			squares[i].style.display= "block";
		
// 	}
// })


function change(col){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = col;

	}
}


function pickCol(){
	var Random =  Math.floor(Math.random() * colors.length);
    return colors[Random];
}


function randomColorGen(num){
	var arr = [];
	for (var i =0; i< num; i++){
		arr.push(randomColor());
	}
       return arr;
}


function randomColor(){
	var r =  Math.floor(Math.random() * 256);
	var g =  Math.floor(Math.random() * 256);
	var b =  Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}