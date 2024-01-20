//variable for my container with all the squares inside

let containerSquares = document.querySelector("#my-container")

//create my squares

let mySquare

//I want to create 405 Divs (like this I have my container filled)
for (let i = 0; i <= 407; i++) {
  mySquare = document.createElement("div") 
  mySquare.setAttribute("class","my-square")
  containerSquares.appendChild(mySquare)
}


//all the colors with effect
let blue = ["box-shadow: 0px 0px 50px 10px #3286c0;", "background-color: #3286c0;"]

let green = ["0px 0px 105px 45px rgba(45,255,196,0.9);", "background-color: #3b7a4b;"]

let lila = ["box-shadow: 0px 0px 50px 10px #8d43ae;", "background-color:#8d43ae;"]

let red = ["box-shadow: 0px 0px 50px 10px #ba4134;","background-color:#ba4134;"]

let orange = ["box-shadow: 0px 0px 50px 10px #c76f29;","background-color:#c76f29;"]

//all my colors in an array
let allColors = [blue,green,lila,red,orange]

let index
let style

//Function has parameter (e) in order to apply it on the clicked element
function getRandomStyle(e){
      //random index to select a random color
      index = Math.floor(Math.random()*allColors.length)
      console.log(index);
      //my random color
      style = allColors[index]
      //if targeted element is not container (because i dont want to color the container)
      if(e.target.id != "my-container"){
        e.target.style = style[0] //add my first style-element
        e.target.style = style[1] //add my first style
        //add class with fading animation
        e.target.classList.add("someClass")
        console.log(e.target)
      }
      //after 2sec, the boxe's property are set to "" so that it can be targeted again
      setInterval(function() {
        e.target.style.boxShadow = "" 
        e.target.style.backgroundColor = ""
        e.target.classList.remove("someClass")
        }, 2000);
}

//add my event listener to my div
containerSquares.addEventListener("mouseover",getRandomStyle)







