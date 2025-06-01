const titles = ["Fullstack Developer.", "Software Engineer.", "UI/UX Designer."];
const animatedText = document.querySelector(".animated-text");
let index = 0;
let charIndex = 0;
let isDeleting = false;

if (animatedText) { // Ensure the element exists before running the code
  function typeEffect() {
    const currentTitle = titles[index];
    if (isDeleting) {
      // Remove one character at a time
      animatedText.textContent = currentTitle.substring(0, charIndex--);
    } else {
      // Add one character at a time
      animatedText.textContent = currentTitle.substring(0, charIndex++);
    }

    // If the word is fully typed, start deleting after a 2-second delay
    if (!isDeleting && charIndex === currentTitle.length) {
      isDeleting = true;
      setTimeout(typeEffect, 2000); // Pause for 2 seconds before deleting
      return;
    } 
    // If the word is fully deleted, move to the next word
    else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % titles.length; // Cycle through the titles
    }

    // Adjust typing speed
    const typingSpeed = isDeleting ? 50 : 100; // Faster when deleting
    setTimeout(typeEffect, typingSpeed);
  }

  typeEffect(); // Start the typing effect
} else {
  console.error("Element with class 'animated-text' not found.");
}

document.addEventListener('DOMContentLoaded', function () {
  const items = Array.from(document.querySelectorAll('.carousel-3d-item'));
  const prevBtn = document.querySelector('.carousel-3d-btn.prev');
  const nextBtn = document.querySelector('.carousel-3d-btn.next');
  let current = 0;

  function update3DCarousel() {
    items.forEach((item, i) => {
      item.style.zIndex = i === current ? 2 : 1;
      if (i === current) {
        item.style.transform = 'translateX(-50%) scale(1) rotateY(0deg)';
        item.style.opacity = '1';
      } else if (i === current - 1) {
        item.style.transform = 'translateX(-150%) scale(0.8) rotateY(30deg)';
        item.style.opacity = '0.5';
      } else if (i === current + 1) {
        item.style.transform = 'translateX(50%) scale(0.8) rotateY(-30deg)';
        item.style.opacity = '0.5';
      } else {
        item.style.transform = 'translateX(-50%) scale(0.7) rotateY(0deg)';
        item.style.opacity = '0.2';
      }
    });
  }

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + items.length) % items.length;
    update3DCarousel();
  });
  nextBtn.addEventListener('click', () => {
    current = (current + 1) % items.length;
    update3DCarousel();
  });

  update3DCarousel();
});