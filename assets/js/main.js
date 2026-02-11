document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname;

  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {

    if (link.classList.contains("dropdown-toggle")) return;

    const linkPath = new URL(link.href, window.location.origin).pathname;

    if (currentPath === linkPath) {
      link.classList.add("active");
    }
  });
});
