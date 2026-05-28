// ===============================
// MOBILE MENU TOGGLE
// ===============================
const menuBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');

menuBtn.addEventListener('click', () => {

  navbar.classList.toggle('active');

  // Save menu state in browser history
  if (navbar.classList.contains('active')) {
    history.pushState({ menuOpen: true }, "");
  }

});


// ===============================
// HANDLE PHONE BACK BUTTON
// ===============================
window.addEventListener("popstate", function () {

  // If menu is open, close it first
  if (navbar.classList.contains("active")) {

    navbar.classList.remove("active");

  }

});
