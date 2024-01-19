//variables for each of my h2

let allSocialMedia = document.querySelectorAll(".each-logo span")

allSocialMedia.forEach(element => {
  element.innerText = "0";

  function counting(){
    let maxCount = +element.getAttribute("data-target")
    let myH2Count = +element.innerText

    let increment = maxCount/200 //will increment by 200er-steps

    if(myH2Count < maxCount){
      element.innerText = Math.round(myH2Count + increment);
      setTimeout(counting,1)
    } else {
      element.innerText = maxCount
    }
  }
  counting()
  })


