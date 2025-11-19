// =========================
// MOBILE MENU FUNCTIONALITY
// =========================

// Select mobile menu button and nav links container
const menuBtn = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

// Toggle the menu on mobile
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show-menu");
});

// Close menu after clicking a link (mobile only)
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show-menu");
  });
});


// ===============================
// OPTIONAL: Smooth scroll on page
// ===============================
links.forEach(link => {
  link.addEventListener("click", event => {
    // if link goes to another page, ignore scroll behavior
    if (!link.href.includes("#")) return;

    event.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});


// ===============================
// ADD EXTRA SAFETY FOR DESKTOP
// ===============================
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove("show-menu");
  }
});



