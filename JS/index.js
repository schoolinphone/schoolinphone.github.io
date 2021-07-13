function showingMenu(item) {
    document.getElementById(item).addEventListener('click', () => {
        var x = document.querySelector('.' + item);
        x.style.display = 'flex';
        x.style.right = '0vw';
        x.style.transitionDuration= '1s';
        var y = document.querySelector('.' + item + 'Left');
        y.style.display = 'flex';
        y.style.left = '0vw';
        y.style.transitionDuration= '1s';
        
    });
}

function closingMenu(item1, item2) {
    document.querySelector('.'+item1).addEventListener('click', () => {
        var x = document.querySelector('.' + item2);
        x.style.right = '-100vw';
        x.style.display = 'block';
        x.style.transitionDuration= '0.5s';
        var y = document.querySelector('.' + item2 + 'Left');
        y.style.display = 'block';
        y.style.left = '-8vw';
        y.style.transitionDuration= '8s';
    });
}

const menus = ['services', 'pricings', 'about', 'contact'];
const menuClose = ['close2', 'close3', 'close4', 'close5'];


for(let i=0;i<=menus.length;i++){
    showingMenu(menus[i]);
    closingMenu(menuClose[i], menus[i]);
}