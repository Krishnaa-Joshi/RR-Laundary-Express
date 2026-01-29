const heroImages = [
  "../assets/img/hero/hero-img-3.jpg",
  "../assets/img/hero/hero-img-4.jpg",
  "../assets/img/hero/hero-img-6.jpg"
];

let currentIndex = 0;
const heroImg = document.getElementById("heroImage");

setInterval(() => {
  heroImg.style.opacity = "0";
  heroImg.style.transform = "scale(0.96)";

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % heroImages.length;
    heroImg.src = heroImages[currentIndex];
    heroImg.style.opacity = "1";
    heroImg.style.transform = "scale(1)";
  }, 500);
}, 3000);
