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


//stock the style-property background of my colors into variables
let blue = ["background-color: #3286c0;"]

let green = ["background-color: #3b7a4b;"]

let lila = ["background-color: #8d43ae;"]

let red = ["background-color: #ba4134;"]

let orange = ["background-color: #c76f29;"]

//all my colors in an array
let allColors = [blue,green,lila,red,orange]

let index
let style

//Function has parameter (e) in order to apply it on the clicked element
function getRandomStyle(e){
      //random index to select a random color
      index = Math.floor(Math.random()*allColors.length)
      //my random color
      style = allColors[index]
      //if targeted element is not container (because i dont want to color the container)
      if(e.target.id != "my-container"){
        e.target.style = style[0] //add my background-style-element

        //tried to add box-shadow to my arraw but couldn't be read...
        switch (style[0]) {
          case "background-color: #3286c0;":
            e.target.style.boxShadow = "0px 0px 50px 3px #3286c0"
            break;
          case "background-color: #3b7a4b;":
            e.target.style.boxShadow = "0px 0px 50px 3px #3b7a4b"
            break;
          case "background-color: #8d43ae;":
            e.target.style.boxShadow = "0px 0px 50px 3px #8d43ae"
            break;
          case "background-color: #ba4134;":
            e.target.style.boxShadow = "0px 0px 50px 3px #ba4134;"
            break;
          case "background-color: #c76f29;":
            e.target.style.boxShadow = "0px 0px 50px 3px #c76f29;"
            break;
          default:
            break;
        }
        //add class with fading animation
        e.target.classList.add("fading")
      }
      //after 2sec, the boxe's property are set to "" so that it can be targeted again
      setInterval(function() {
        e.target.style.boxShadow = "" 
        e.target.style.backgroundColor = ""
        e.target.classList.remove("fading")
        }, 2000);
}

//add my event listener to my div
containerSquares.addEventListener("mouseover",getRandomStyle)







