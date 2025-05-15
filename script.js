var z = false
function toggleMenu() {
  const nav = document.querySelector(".navbar");
  nav.classList.toggle("show");
  const menuIcon = document.getElementById("menu-icon");
  // Change icon to X when menu is open
  /*if (nav.classList.contains("show")) {
    menuIcon.innerHTML = `<i>h</i>`;
  } else {
    menuIcon.innerHTML = `<i>b</i>`;
  }*/
 // Close menu when a link is clicked
  const links = nav.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("show");
      if (z == true) {
        menuIcon.style.transform = "rotate(0deg)";
        z = !z;
      }
    });
  });
  if (z == false) {
    menuIcon.style.transform = "rotate(90deg)";
    z = true;
  } else {
    menuIcon.style.transform = "rotate(0deg)";;
    z = false;
  }
  
}
