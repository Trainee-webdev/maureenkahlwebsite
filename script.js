document.addEventListener("DOMContentLoaded", function () {
  let currentPage = window.location.pathname; // Use pathname instead of full URL

  // Select all navigation and footer links
  const navLinks = document.querySelectorAll(
    ".nav li a, .sidebar ul li a, .footer a"
  );

  navLinks.forEach((link) => {
    if (
      link.getAttribute("href") &&
      currentPage.endsWith(link.getAttribute("href"))
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

let lastScrollTop = 0;
const navbar = document.querySelector(".navigate");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll Down → Hide Navbar
    navbar.classList.add("nav-hide");
  } else {
    // Scroll Up → Show Navbar
    navbar.classList.remove("nav-hide");
  }

  lastScrollTop = scrollTop;
});

function toggleMenu() {
  const sidebar = document.getElementById("sidebar");
  const hamburger = document.querySelector(".hamburger");

  sidebar.classList.toggle("active");

  // Change icon based on sidebar state
  if (sidebar.classList.contains("active")) {
    hamburger.innerHTML = "←"; // Change to back arrow
  } else {
    hamburger.innerHTML = "☰"; // Change back to hamburger
  }
}
