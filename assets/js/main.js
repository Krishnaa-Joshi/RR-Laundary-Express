document.addEventListener("DOMContentLoaded", () => {
  const currPage = window.location.pathname.split("/").pop();

  const navPage = document.querySelectorAll(".nav-link");

  navPage.forEach(link => {
    const Page = link.getAttribute("href");

    if (Page === currPage || 
        (currPage === "" && Page === "index.html")) {
      link.classList.add("active");
    }
  });
});
