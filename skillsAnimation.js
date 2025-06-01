// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Select all skill blocks and apply animation
document.querySelectorAll(".skill").forEach((el, i) => {
  gsap.from(el, {
    y: -300,                  // Falls from above
    opacity: 0,               // Starts invisible
    ease: "bounce.out",       // Adds bounce on landing
    duration: 1.2,
    delay: i * 0.2,           // Stagger each one slightly
    scrollTrigger: {
      trigger: el,
      start: "top 80%",       // When element is 80% down viewport
      toggleActions: "play none none none"
    }
  });
});
