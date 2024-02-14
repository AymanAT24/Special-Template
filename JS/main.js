// Get Main Color From Local Storge
let mainColor = localStorage.getItem("main-color")

if (mainColor !== null) {

  document.documentElement.style.setProperty("--main-color", mainColor)

      // Remove Active Class From All Childrens
    document.querySelectorAll(".colors-list li").forEach(element =>{

      element.classList.remove("active")

            // Add Active Class
      if(element.dataset.color === mainColor){
        element.classList.add("active")
      }
})


}
let backgroundOption = true;
let backgroundInterval;



// Background Random Background
let backgroundLocalStorag = localStorage.getItem("random-background")
if (backgroundLocalStorag !== null) {

  if(backgroundOption === "true"){

    backgroundOption = true;
    

  } else{

    backgroundOption = false;

  }
  //Remove All Class From Element

  document.querySelectorAll(".random-backgrounds span").forEach(element => {

    element.classList.remove("active")

  })
  if (backgroundLocalStorag === "true") {

    document.querySelector(".random-backgrounds .yes").classList.add("active")
      window.onload = function(){
    backgroundOption = false;
    theInterval()
  
}
  } else{
    document.querySelector(".random-backgrounds .no").classList.add("active")
  }

}





// Select The Icon 
document.querySelector(".toggle-setting .setting").onclick = function(){
  // Toggle For Add (OR) Remove Class From The Same Element
  this.classList.toggle("fa-spin")

  // Select Setting Box To Add Open Class On Click 
  document.querySelector(".setting-box").classList.toggle("open")

}



// Switch Colors Function
// Select All List Items
let liColors = document.querySelectorAll(".colors-list li")

// Loop On All List Items
liColors.forEach(li => {

  // Click On Every List Items
  li.addEventListener("click", (e) =>{

// Set Color On Root 
    document.documentElement.style.setProperty("--main-color", e.target.dataset.color)

    localStorage.setItem("main-color", e.target.dataset.color)

  handelActive(e)
  })


});



// Switch Random Backgrounds Function
// Select All Spans
let randomBackground = document.querySelectorAll(".random-backgrounds span")

// Loop On All List Items
randomBackground.forEach(span => {

  // Click On Every List Items
  span.addEventListener("click", (e) =>{


      handelActive(e)

    if (e.target.dataset.background === "yes") {
      backgroundOption = true
      theInterval()
      localStorage.setItem("random-background", true)
    }else{
      backgroundOption = false
      clearInterval(backgroundInterval)
      
      localStorage.setItem("random-background", false)

    }

  })

});



// Select All imgs 
let imgBackground = document.querySelectorAll(".chose-backgrounds img")

// Loop On All List Items
imgBackground.forEach(img => {

  // Click On Every img Items
  img.addEventListener("click", (e) =>{

handelActive(e)
  })


});

// Select Landing Page
let mainLanding = document.querySelector(".main-landing")

//Get Array Of Images
let imgsArray = ["pexels1.jpg","pexels2.jpg","pexels3.jpg","pexels4.jpg","pexels5.jpg"]

function theInterval() {

  if (backgroundOption === true) {
    backgroundInterval = setInterval(() => {
  
  // Get Random Number
let randomNumber = Math.floor(Math.random() * imgsArray.length)

  //Change Landing BackGround
  mainLanding.style.backgroundImage = 'url("images/'+imgsArray[randomNumber]+'")'
},1000);
  }else{

    backgroundInterval === false;
    clearInterval(backgroundInterval)
  }
} 


let ourSkills = document.querySelector(".our-skills")

let spanProg = document.querySelectorAll(".our-skills span")

window.onscroll = function(){

  if (window.scrollY >= ourSkills.offsetTop - 150) {
    spanProg.forEach(span => {
      span.style.width = span.dataset.width; 
    })
  }

}


let ourGallary = document.querySelectorAll(".gallary img")

ourGallary.forEach(img => {


  img.addEventListener('click' , (e)=>{


    let overlay = document.createElement("div")

    overlay.className = "popup-overlay"

    document.body.appendChild(overlay)

    let poupBox = document.createElement("div")
    
    poupBox.className = "popup-box"


        if (img.alt !== null) {

      let imgHeadinh = document.createElement("h3")

      let imgText = document.createTextNode(img.alt)

      imgHeadinh.appendChild(imgText)

      imgHeadinh.className = "img-heading"

      poupBox.appendChild(imgHeadinh)
}

    let poupimg = document.createElement("img")

    poupimg.src = img.src;

    poupBox.appendChild(poupimg)

    document.body.appendChild(poupBox)

    let closeButton = document.createElement("span")

    closeButton.className = "close-button"

    let closeButtonText = document.createTextNode("X")

    closeButton.appendChild(closeButtonText)

    poupBox.appendChild(closeButton)

  })
})

document.addEventListener('click', (e) => {

if (e.target.className === "close-button") {

  e.target.parentNode.remove()

  document.querySelector(".popup-overlay").remove()
}
});

let allBullets = document.querySelectorAll(".nav-bullets .bullet");

allBullets.forEach(bullet => {

  bullet.addEventListener("click", (e) => {

    document.querySelector(e.target.dataset.section).scrollIntoView({

      behavior: "smooth"

    });
  });

});


function handelActive(ev){

    // Remove Active Class From All Childrens
    ev.target.parentElement.querySelectorAll(".active").forEach(element =>{
      element.classList.remove("active")
    })

      // Add Active Class To The Target Element
    ev.target.classList.add("active")

}

let bulletSpan= document.querySelectorAll(".bullets-option span")
let navBullets= document.querySelector(".nav-bullets")
let bulletsLocal = localStorage.getItem("bullets-option")

if (bulletsLocal !== null) {

  bulletSpan.forEach(span =>{

    span.classList.remove("active")

  })

  if (bulletsLocal === "block") {


    navBullets.style.display = 'block';
    document.querySelector(".bullets-option .yes").classList.add("active")

  }else{



    navBullets.style.display = 'none';
    document.querySelector(".bullets-option .no").classList.add("active")

  }

}

bulletSpan.forEach(span => {

  span.addEventListener("click", (e) =>{

    handelActive(e)

    if (span.dataset.display == 'show') {


      navBullets.style.display = 'block';

      localStorage.setItem("bullets-option","block")

    }else{


      navBullets.style.display = 'none';
      localStorage.setItem("bullets-option","none")


    }

  })
});

// Reset Button

document.querySelector(".resert-options").onclick = function(){

    localStorage.clear()
    window.location.reload()

}