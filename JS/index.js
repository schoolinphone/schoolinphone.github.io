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
    detailsBox.style.transitionDuration = "1s";
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
    detailsBox.style.transitionDuration = "1s";
  });
}

const menus = ["services", "pricings", "about", "contact"];
const menuClose = ["close2", "close3", "close4", "close5"];
for (let i = 0; i <= menus.length; i++) {
  showingMenu(menus[i]);
  closingMenu(menuClose[i], menus[i]);
}

