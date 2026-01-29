const counters = document.querySelectorAll(".counter");

const runCounter = (counter) => {
  const target = +counter.getAttribute("data-target");
  const speed = 200; // smaller = faster

  const updateCount = () => {
    const current = +counter.innerText;
    const increment = Math.ceil(target / speed);

    if (current < target) {
      counter.innerText = current + increment;
      setTimeout(updateCount, 30);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
};

let counterStarted = false;

window.addEventListener("scroll", () => {
  const statsSection = document.getElementById("stats");
  const sectionTop = statsSection.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (sectionTop < screenHeight && !counterStarted) {
    counters.forEach(runCounter);
    counterStarted = true;
  }
});
