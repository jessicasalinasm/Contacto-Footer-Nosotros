const slider = document.querySelector("#slidernos");
let sliderSection = document.querySelectorAll(".slider-section-nosotros");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.querySelector("#btn-left-nosotros");
const btnRight = document.querySelector("#btn-right-nosotros");

slider.insertAdjacentElement("afterbegin", sliderSectionLast);

function nextAction() {
    let sliderSectionFirst = document.querySelectorAll(".slider-section-nosotros")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function prevAction() {
    let sliderSection = document.querySelectorAll(".slider-section-nosotros");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style = "none";
        slider.insertAdjacentElement("afterbegin", sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnRight.addEventListener("click", function() {
    nextAction();
});

btnLeft.addEventListener("click", function() {
    prevAction();
});