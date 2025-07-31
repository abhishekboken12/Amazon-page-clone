// slider

let previouButton = document.getElementById("prevBtn");
let nextButton = document.getElementById("nextBtn");
let carouselItem = document.querySelectorAll(".carousel-item");

let startSlider = 0;
const maxSlider = (carouselItem.length - 1) * -100;

nextButton.addEventListener("click", function () {
    if (startSlider <= maxSlider) {
        startSlider = 0;
    } else {
        startSlider -= 100;
    }
    carouselItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    });
});

previouButton.addEventListener("click", function () {
    if (startSlider >= 0) {
        startSlider = maxSlider;
    } else {
        startSlider += 100;
    }
    carouselItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    });
});


// sidebar navigation

const sidebarNavigationEl = document.getElementById("sidebar-container-navigation-id")
const sidebarOpenNavigationEl = document.getElementById("open-nav-sidebar")
const sidebarCloseNavigationEl = document.getElementById("sidebar-navigation-close")

sidebarOpenNavigationEl.addEventListener("click", () => {
    sidebarNavigationEl.classList.toggle("slidebar-show")
})
sidebarCloseNavigationEl.addEventListener("click", () => {
    sidebarNavigationEl.classList.toggle("slidebar-show")
})


// sticky header

window.addEventListener('scroll', function() {
    var header = document.getElementById('main-header');
    if(window.scrollY > 0) {
        header.classList.add('fixed');
        document.body.style.marginTop = header.offsetHeight + "px";
    } else {
        header.classList.remove('fixed');
        document.body.style.marginTop = "0px";
    }
});


// main-content-container-2 carusel

let previouButton2 = document.getElementById("prevBtn-2");
let nextButton2 = document.getElementById("nextBtn-2");
let todayItem = document.querySelectorAll(".today-deal-products");

let startSlider2 = 0;
const maxSlider2 = (todayItem.length - 1) * -100;


nextButton2.addEventListener("click", function () {

    if(startSlider2 === maxSlider2){
        nextButton2.style.opacity = "0.5";
    }

     previouButton2.style.opacity = "1";

    if (startSlider2 > maxSlider2) {
        startSlider2 -= 700;
    }
        todayItem.forEach(element => {
            element.style.transform = `translateX(${startSlider2}%)`;
        });
    
});



previouButton2.addEventListener("click", function (){

    nextButton2.style.opacity = "1";

    if (startSlider2 < 0) {
        startSlider2 += 700;
    }

    if(startSlider2 === 0){
        previouButton2.style.opacity = "0.5";
    }
    
    todayItem.forEach(element => {
        element.style.transform = `translateX(${startSlider2}%)`;
    })

});



