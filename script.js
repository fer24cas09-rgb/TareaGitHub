gsap.to("#hero-title", {
  opacity: 1,
  y: -20,
  duration: 1,
  ease: "power2.out"
});

gsap.to("#hero-subtitle", {
  opacity: 1,
  y: -10,
  duration: 1,
  delay: 0.4,
  ease: "power2.out"
});

gsap.to(".btn-scroll", {
  opacity: 1,
  duration: 1,
  delay: 0.8,
  ease: "power2.out"
});

const cards = document.querySelectorAll(".album-card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      gsap.to(entry.target, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: index * 0.1,
        ease: "power1.out"
      });
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

cards.forEach((card) => {
  gsap.set(card, { y: 30 });
  observer.observe(card);
});
