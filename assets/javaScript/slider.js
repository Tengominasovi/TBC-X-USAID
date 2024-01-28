"use strict";

const images = [
    "./assets/image/usaid.webp",
    "./assets/image/space.webp",
    "./assets/image/tnt.webp",
    "./assets/image/Tegeta.webp",
    "./assets/image/spectre.webp",
    "./assets/image/tbclizing.webp",
    "./assets/image/ufc.webp",
  ];
  
  const slidesCont = document.getElementsByClassName("slidesContent")[0];
  const getSlides = () => {
    images.forEach((img) => {
      const sliderimgs = `   <figure class="slideImg">
                          <img src="${img}"/>
                        </figure>`;
      slidesCont.innerHTML += sliderimgs;
    });
  };
  
  getSlides();

  const nextBtn = document.getElementsByClassName("NextArrow")[0];
  const prevBtn = document.getElementsByClassName("PrevArrow")[0];

  const slides = document.querySelectorAll(".slideImg");

  let slideIndex = 0;
  let intervalId = null;

  const initializeSlider = () => {
    if (slides.length > 0) {
      for (let i = 0; i < 3; i++) {
        slides[i].classList.add("displaySlide");
      }
      intervalId = setInterval(nextSlide, 5000);
    }
  };
  
  document.addEventListener("DOMContentLoaded", initializeSlider);
  
  const showSlide = (index) => {
    clearInterval(intervalId);
    
   
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("displaySlide");
    }
  
    for (let i = index; i < index + 3; i++) {
      if (i < slides.length) {
        slides[i].classList.add("displaySlide");
      }
    }

    intervalId = setInterval(nextSlide, 5000);
  };
  
 
  const prevSlide = () => {
    slideIndex -= 3;
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
    showSlide(slideIndex);
    clearInterval(intervalId);
  };

  const nextSlide = () => {
    slideIndex += 3;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    showSlide(slideIndex);
  };
  
  
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);
  

  const dotsContainer = document.querySelector(".dots");
  const dots = dotsContainer.querySelectorAll("span");
  

  const dotClickHandler = (dotIndex) => {
    const slideIndex = dotIndex * 3;
    showSlide(slideIndex);
  };

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      dotClickHandler(index);
    });
  });
  