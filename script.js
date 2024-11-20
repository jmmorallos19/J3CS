document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS
  AOS.init();
  
  // Initialize Typed.js for animation
  new Typed('#typed-output', {
    strings: ["College Student", "Fullstack Developer"], // Text to display
    typeSpeed: 110,   // Typing speed in milliseconds
    backSpeed: 100,    // Slower deleting speed (try to make it a bit slower)
    backDelay: 1500,  // Delay before backspacing (wait a bit longer before starting backspace)
    startDelay: 1000,  // Optional: Delay before the first text starts typing
    loop: true,       // Enable looping
    showCursor: false  // Show blinking cursor
  });
});


function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.location.hash !== "#profile") {
    window.location.hash = "#profile";
  }
});

// Function to handle active state
function setActiveNav() {
  // Get all navigation links
  const navLinks = document.querySelectorAll(
    "#desktop-nav .nav-links a, #hamburger-nav .menu-links a"
  );

  // Remove active class from all links
  navLinks.forEach((link) => link.classList.remove("active"));

  // Add active class to the clicked link
  this.classList.add("active");
}

// Attach click event listener to all navigation links
document
  .querySelectorAll("#desktop-nav .nav-links a, #hamburger-nav .menu-links a")
  .forEach((link) => link.addEventListener("click", setActiveNav));

