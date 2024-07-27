window.addEventListener('load', () => {
  setTimeout(() => {
    document.body.classList.add('loaded');
    document.querySelector('.loader').style.display = 'none';
  }, 3000); 

  const slides = document.querySelectorAll('.slideshow img');
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  showSlide(currentIndex);
  setInterval(nextSlide, 3000); 
});