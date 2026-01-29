document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();

  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage || 
        (currentPage === "" && linkPage === "index.html")) {
      link.classList.add("active");
    }
  });
});
