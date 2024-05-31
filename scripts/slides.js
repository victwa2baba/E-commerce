import {cart} from '../data/cart.js';

function updateTheCartQuantity () {
            let cartQuantity = 0;
          
            cart.forEach((cartItem)=>{
              cartQuantity += cartItem.quantity;

            document.querySelector('.js-cart')
            .innerHTML = cartQuantity;
            });
          }

          updateTheCartQuantity();

          

let slideIndex = 1;
      showSlides(slideIndex);

      function plusSlides(n) {
        showSlides(slideIndex += n);
      }

document.querySelector('.js-next-slide')
        .addEventListener('click', ()=> {
            plusSlides(1);
          });

        document.querySelector('.js-prev-slide')
        .addEventListener('click', ()=> {
            plusSlides(-1);
          });

      function currentSlide(n) {
        showSlides(slideIndex = n);
      }

      function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("js-slide");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slides[slideIndex-1].style.display = "block";
      } 

      let scrollContainer = document.querySelector('.products-slide-container');
          let backButton = document.getElementById('backButton');
          let nextButton = document.getElementById('nextButton');

          scrollContainer.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            scrollContainer.scrollLeft += evt.deltaY;
          });

          backButton.addEventListener('click', ()=> {
            scrollContainer.style.scrollBehavior = "smooth";
            scrollContainer.scrollLeft -= 1293;
          });

          nextButton.addEventListener('click', ()=> {
            scrollContainer.style.scrollBehavior = "smooth";
            scrollContainer.scrollLeft += 1293;
          });
