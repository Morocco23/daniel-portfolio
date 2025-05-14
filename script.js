function toggleMenu() {
  const nav = document.querySelector(".navbar");
  nav.classList.toggle("show");
  // Close menu when a link is clicked
  const links = nav.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("show");
    });
  });
}
