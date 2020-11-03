//var colors =[ "rgb(255, 0, 0)","rgb(0, 0, 255)","rgb(0, 255, 0)","rgb(255, 0, 255)","rgb(0, 255, 255)","rgb(255, 255, 0)"] ; 
var colors = generateRandomColor(6);
var squares=document.querySelectorAll(".square") ;
var pickedColor=pickColor() ; 
var colorDisplay=document.querySelector("#display");
colorDisplay.textContent=pickedColor  ;
var massageDisplay = document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton  = document.querySelector(".reset");
var easyBtn=document.querySelector("#easy");
var hardBtn=document.querySelector("#hard");



easyBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	colors = generateRandomColor(3);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
  for(x=0;x<squares.length;x++){
	  if(colors[x]){squares[x].style.background=colors[x];}
  else{squares[x].style.display="none";}};
  massageDisplay.textContent="Easy Level-- Pick the color responding to the rgb above";
})


hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	colors = generateRandomColor(6);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
  for(x=0;x<squares.length;x++){
	 squares[x].style.background=colors[x];
squares[x].style.display="block";} ;
massageDisplay.textContent="Hard Level- Pick the color responding to the rgb above" ;
}) 


resetButton.addEventListener("click",function(){
/*generate all new colors */colors = generateRandomColor(6)
//pick a new random color from array
pickedColor = pickColor(); 
colorDisplay.textContent = pickedColor;
for(x=0;x<squares.length;x++){squares[x].style.backgroundColor=colors[x]}
//change colors of squares;
massageDisplay.textContent="Pick the color responding to the rgb above";
})


 
for(x=0 ; x<squares.length ; x++){
    squares[x].style.backgroundColor=colors[x] ; 
    squares[x].addEventListener("click" ,function(){
    var clickedColor = this.style.backgroundColor ;
    if(clickedColor===pickedColor)
	{massageDisplay.textContent="you win "; changeColors(clickedColor); h1.style.backgroundColor=clickedColor}
    else{ this.style.backgroundColor="orange"; massageDisplay.textContent="Try Again"}           
})}


function changeColors(color){
	for(x=0;x<squares.length;x++){
		squares[x].style.backgroundColor=color}
	} 
	
	
function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random]
	}
	
function generateRandomColor(num){

	var arr = [] ;
	
	for(x=0 ; x<num ; x++){
		arr.push(randomColor())
	}
	return arr
}

function randomColor(){
	var r = Math.floor(Math.random()*256) ; 
	var g = Math.floor(Math.random()*256) ;
	var b = Math.floor(Math.random()*256) ;
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

