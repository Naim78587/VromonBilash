const preloader=document.querySelector("[data-preloader]");
window.addEventListener("load",function(){
    preloader.classList.add("remove");
});

/*event listener for multiple elements*/
const addEventOnElements = function(elements,evenType,callBack){
    for(let i=0,len=elements.length; i<len; i++){
        elements[i].addEventListener(evenType,callBack);
    }
}

/* navbar toggler for mobile*/
const navbar=document.querySelector("[data-navbar]");
const navTogglers=document.querySelectorAll("[data-nav-toggler]");
const overlay= document.querySelector("[data-overlay]");

const toggleNav = function(){
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");


}
addEventOnElements(navTogglers,"click",toggleNav);

/** Header */
const header =document.querySelector("[data-header]");
window.addEventListener("scroll", function(){
    header.classList[window.scrollY > 100 ? "add": "remove"]("active");
});


/*Slider code starts*/
const sliderContainer = document.querySelector(".slider-container");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector("[data-prev]");
const nextButton = document.querySelector("[data-next]");

let currentSlide = 0;
const totalSlides = slides.length;

// Function to update the slider position
const updateSlider = () => {
  const offset = -currentSlide * 100; 
  sliderContainer.style.transform = `translateX(${offset}%)`;
};

// Move to the next slide (and loop to the first slide)
const nextSlide = () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
};

// Auto-slide every 1 second
let autoSlideInterval = setInterval(nextSlide, 3000);

// Pause auto-slide on button hover
const pauseAutoSlide = () => clearInterval(autoSlideInterval);
const resumeAutoSlide = () => {
  autoSlideInterval = setInterval(nextSlide, 1000);
};

// Attach event listeners to buttons for navigation
prevButton.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlider();
  pauseAutoSlide(); 
  resumeAutoSlide(); 
});

nextButton.addEventListener("click", () => {
  nextSlide();
  pauseAutoSlide(); 
  resumeAutoSlide(); 
});
/*Slider code ends*/