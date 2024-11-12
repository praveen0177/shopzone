var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,     // Show 1 ad at a time
    loop: true,           // Continuously loop the ads
    autoplay: {
      delay: 3000,        // Delay of 3 seconds between each ad
      disableOnInteraction: false, // Continue autoplay even after user interaction
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,    // Users can click on pagination dots to navigate
    },
    navigation: {
      nextEl: '.swiper-button-next',  // Next arrow button
      prevEl: '.swiper-button-prev',  // Previous arrow button
    },
  });

  
  const slider = document.querySelector('#priceSlider')
  const display = document.querySelector('#sliderValue')
  const products = document.querySelectorAll('.product')
  
  slider.oninput = function() {
      const sliderValue = parseInt(this.value)
      display.textContent = `\$${sliderValue}`
      
      products.forEach(product => {
          const price = parseInt(product.dataset.price)
  
          if (sliderValue > parseInt(this.min) && sliderValue < parseInt(this.max)) {
              if (sliderValue >= price) {
                  gsap.to(product, {autoAlpha: 1, scale: 1, duration: 0.5})
              } else {
                  gsap.to(product, {autoAlpha: 0, scale: 0.8, duration: 0.5})
              }
          } else {
              gsap.to(product, {autoAlpha: 1, scale: 1, duration: 0.5})
          }
      });
  };  

  