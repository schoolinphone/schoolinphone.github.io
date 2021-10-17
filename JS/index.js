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

