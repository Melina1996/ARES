//variable for my container with all the squares inside

let containerSquares = document.querySelector("#my-container")

// containerSquares.forEach(element => {
//   element.addEventListener("mouseover",()=>{
//   console.log(element)
//   })
// });


//all the colors with effect


let blue = ["box-shadow: 0px 0px 5px 1px #3286c0;", "background-color: #3286c0;"]

let green = ["box-shadow: 0px 0px 5px 1px #3b7a4b;", "background-color: #3b7a4b;"]

let lila = ["box-shadow: 0px 0px 5px 1px #8d43ae;", "background-color:#8d43ae;"]

let red = ["box-shadow: 0px 0px 5px 1px #ba4134;","background-color:#ba4134;"]

let orange = ["box-shadow: 0px 0px 5px 1px #c76f29;","background-color:#c76f29;"]

let allColors = [blue,green,lila,red,orange]

console.log(containerSquares)

function getRandomStyle(e){
      index = Math.floor(Math.random()*allColors.length)
      console.log(index);
      style = allColors[index]
      console.log(style)
      if(e.target.id != "my-container"){
        e.target.style = style[0]
        e.target.style = style[1]   
      }
}

containerSquares.addEventListener("mouseover",getRandomStyle)







