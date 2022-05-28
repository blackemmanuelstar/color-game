var colors =generateRandomColors(numsquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickcolor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay= document.querySelector("#message");
var h1=document.querySelector("h1");
var resetbutton= document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");
var numsquares = 6;

easybtn.addEventListener("click", function(){
   hardbtn.classList.remove("selected");  
   easybtn.classList.add("selected");
   numsquares=3;
    colors=generateRandomColors(numsquares);
    pickedColor=pickcolor();
    colorDisplay.textContent=pickedColor;
    for (var i=0; i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i]; 
        }else{
            squares[i].style.display="none";
        }
    }

});

hardbtn.addEventListener("click", function(){
    easybtn.classList.remove("selected");
     hardbtn.classList.add("selected");
     numsquares=6;
     colors=generateRandomColors(numsquares);
     pickedColor=pickcolor();
     colorDisplay.textContent=pickedColor;
     for (var i=0; i<squares.length;i++){
         
             squares[i].style.backgroundColor=colors[i]; 
             squares[i].style.display="block";
         
     }
 
});


resetbutton.addEventListener("click", function(){
    resetbutton.textContent="New Colors";
    colors =generateRandomColors(numsquares);
    pickedColor = pickcolor();
    colorDisplay.textContent=pickedColor;
    messageDisplay.textContent="";
    for(var i = 0; i < squares.length; i++){

        squares[i].style.backgroundColor = colors[i];

    }
    h1.style.backgroundColor="steelblue";

});
colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
    messageDisplay.textContent="Correct!";
    changeColors(clickedColor);
    h1.style.backgroundColor=clickedColor;
    resetbutton.textContent="Play Again?";
		} else {
			this.style.backgroundColor="#232323";
            messageDisplay.textContent="Wrong!!! Try Again.";
		}
	});
}

function changeColors(color){
    for (var i=0; i<colors.length;i++){
        squares[i].style.backgroundColor=color;
    }

}

function pickcolor(){
   var random=Math.floor(Math.random()*colors.length);
    return colors[random];

}
function generateRandomColors(num){
    var arr=[];
for (var i=0; i<num; i++){
arr.push(randomcolor());
}

    return arr;

}
function randomcolor(){
var r=Math.floor(Math.random()*256);
var g=Math.floor(Math.random()*256);
var b=Math.floor(Math.random()*256);
return "rgb("+r+", " +g+", "+b+")";

}