document.querySelector(".crossClose").addEventListener("click", () =>{
  
  document.querySelector(".getStartedCoverLeftShodow").style.display = "none";
  document.querySelector(".getStartedCoverTopShodow").style.display = "none";
  document.querySelector(".getStartedCoverButtomShodow").style.display = "none";
  document.querySelector(".getStartedCoverRightShodow").style.display = "none";
})

document.querySelector("#get-started-btn").addEventListener("click", () =>{

  document.querySelector(".getStartedCoverLeftShodow").style.display = "block";
  document.querySelector(".getStartedCoverTopShodow").style.display = "block";
  document.querySelector(".getStartedCoverButtomShodow").style.display = "block";
  document.querySelector(".getStartedCoverRightShodow").style.display = "flex";
})

document.querySelector(".aboutSchoolInPhoneLoginSignUp").addEventListener("click", () =>{

  document.querySelector(".home-page").style.left = "-100vw";
  document.querySelector(".home-page").style.transitionDuration = "1s";
  document.querySelector(".home-page-video").style.left = "-95vw";
  document.querySelector(".home-page-video").style.transitionDuration = "1s";
  //document.querySelector(".loginSignUp").style.zIndex = "50";

  setTimeout(function(){
    document.querySelector(".loginSignUp").style.zIndex = "50";
  }, 1000)

  for (let i = 0; i <= menus.length; i++) {
    makeDisplayNoneForMenuPages(menus[i]);
  }
  function makeDisplayNoneForMenuPages(menuName){
    document.querySelector("." + menuName).style.display="none";
  }

  // document.querySelector(".getStartedCoverTopShodow").style.display = "block";
  // document.querySelector(".getStartedCoverButtomShodow").style.display = "block";
  // document.querySelector(".getStartedCoverRightShodow").style.display = "flex";
})


document.querySelector(".backToHompageFromLoginSignUpArrow").addEventListener("click", () =>{

  document.querySelector(".home-page").style.left = "0vw";
  document.querySelector(".home-page").style.transitionDuration = "0.5s";
  document.querySelector(".home-page-video").style.left = "5vw";
  document.querySelector(".home-page-video").style.transitionDuration = "0.5s";
  document.querySelector(".loginSignUp").style.zIndex = "-10";


  setTimeout(function() {
  // code to be executed after 0.5 second
  for (let i = 0; i <= menus.length; i++) {
    makeDisplayBlockForMenuPages(menus[i]);
  }
  function makeDisplayBlockForMenuPages(menuName){
    document.querySelector("." + menuName).style.display="block";
  }
  }, 500);

  

  // document.querySelector(".getStartedCoverTopShodow").style.display = "block";
  // document.querySelector(".getStartedCoverButtomShodow").style.display = "block";
  // document.querySelector(".getStartedCoverRightShodow").style.display = "flex";
})

function showingMenu(item) {
  document.getElementById(item).addEventListener("click", () => {
    let companyNameBox = document.querySelector("." + item + "Left");
    companyNameBox.style.position = "fixed";
    companyNameBox.style.display = "flex";
    companyNameBox.style.left = "0vw";
    companyNameBox.style.transitionDuration = "1s";
    let detailsBox = document.querySelector("." + item);
    detailsBox.style.display = "flex";
    detailsBox.style.right = "0vw";
    detailsBox.style.transitionDuration = "0.5s";
  });
}

function closingMenu(close, item) {
  document.querySelector("." + close).addEventListener("click", () => {
    let companyNameBox = document.querySelector("." + item + "Left");
    companyNameBox.style.display = "block";
    companyNameBox.style.left = "-8vw";
    companyNameBox.style.transitionDuration = "1s";
    let detailsBox = document.querySelector("." + item);
    detailsBox.style.right = "-100vw";
    detailsBox.style.display = "block";
    detailsBox.style.transitionDuration = "0.5s";
  });
}

const menus = ["services", "pricings", "about", "contact"];
const menuClose = ["close2", "close3", "close4", "close5"];
for (let i = 0; i <= menus.length; i++) {
  showingMenu(menus[i]);
  closingMenu(menuClose[i], menus[i]);
}
