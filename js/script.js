const menuBtn = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");

let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
	if (!showMenu) {
		menuBtn.classList.add("open");
		menu.classList.add("show");
		menuNav.classList.add("show");
		navItems.forEach((item) =>
			item.classList.add("show"));
		showMenu = true;
	} else {
		menuBtn.classList.remove("open");
		menu.classList.remove("show");
		menuNav.classList.remove("show");
		navItems.forEach((item) =>
			item.classList.remove("show"));
		showMenu = false;
	}
}