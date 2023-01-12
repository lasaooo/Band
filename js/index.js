const buyBtns = document.querySelectorAll(".js-buy-ticket");
const modal = document.querySelector(".js-modal");
const modalClose = document.querySelector(".js-btn-close");
const header = document.getElementById("header");
const mobileMenu = document.getElementById("mobile-menu");
const headerHeight = header.clientHeight;
const menuItems = document.querySelectorAll('#nav li a[href*="#"]');

function showBuyTickets() {
	modal.classList.add("open");
}
function hideBuyTickets() {
	modal.classList.remove("open");
}
for (const buyBtn of buyBtns) {
	buyBtn.addEventListener("click", showBuyTickets);
}
modalClose.addEventListener("click", hideBuyTickets);
mobileMenu.onclick = function () {
	let isClosed = header.clientHeight === headerHeight;
	if (isClosed) {
		header.style.height = "auto";
	} else {
		header.style.height = null;
	}
};
for (let i = 0; i < menuItems.length; i++) {
	let menuItem = menuItems[i];
	menuItem.onclick = function (event) {
		let isParentsMenu =
			this.nextElementSibling && menuItem.nextElementSibling.classList.contains("subnav");
		if (isParentsMenu) {
			event.preventDefault();
		} else {
			header.style.height = null;
		}
	};
}