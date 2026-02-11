document.addEventListener("DOMContentLoaded", () => {
  const currPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    const page = link.getAttribute("href");

    if (link.classList.contains("dropdown-toggle")) return;

    if (
      page === currPage ||
      (currPage === "" && page === "index.html")
    ) {
      link.classList.add("active");
    }
  });
});

