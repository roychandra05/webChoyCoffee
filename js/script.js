// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika humburger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar side bar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");
addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
