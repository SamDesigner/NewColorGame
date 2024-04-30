var colors = generateRandomColors(6);
var header = document.querySelector('header');
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor()
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector('.message');
var change = document.querySelector('.change');
colorDisplay.textContent = pickedColor
for(var i = 0 ; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click" , function(){
      var clickedColor = this.style.backgroundColor;
      if(clickedColor === pickedColor){
            message.textContent= 'Correct!!!'
            changeColors(clickedColor);
            header.style.backgroundColor = clickedColor;
         
      }else{
        this.style.backgroundColor = "transparent"
        message.textContent = "Try Again"
      } 
    })
}

function changeColors(color){
    for(var i = 0; i < colors.length ;  i++){
        squares[i].style.backgroundColor = color;
    }
}
function pickColor(){
   var random = Math.floor(Math.random() * colors.length );
   return colors[random]

}
function generateRandomColors(num){
    var arr = []
    for(var i = 0; i<num; i++){
        arr.push(randomColor())
    }

    return arr
}
function randomColor(){
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)

    return "rgb(" + r + ", " + g + ", " + b + ")";
}