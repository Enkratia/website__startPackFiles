// Components
import "./components/custom-select.js";
import "./components/special-offers.js";
import "./components/timer.js";
import "./components/custom-checkbox.js";
import "./components/subscribe__categories.js";
import "./components/menu-btn.js";
import "./components/megamenu.js";
import "./components/login.js";
import "./components/top-nav.js";
import "./components/product__bottom.js";
import "./components/microslider.js";
import "./components/filter.js";
import "./components/input-number.js";
import "./components/tool-pag.js";
import "./components/sidebar-filters__button.js";
import "./components/colors__button.js";
import "./components/product-card__slider.js";
import "./components/product-card__accordion.js";
import "./components/product__favorites.js";
import "./components/product__button-cart.js";
import "./components/cart__btn.js";
import "./components/sizes__button.js";
import "./components/product-card__size-btn.js";
import "./components/tabs.js";
import "./components/image-modal.js";
import "./components/progress__bar.js";
import "./components/leave-review.js";
import "./components/download.js";
import "./components/review-message-tooltips.js";
import "./components/checkout.js";
import "./components/custom-radio.js";
import "./components/checkout__payment.js";


// Components multiple in one
import "./components/$swipers.js";
import "./components/$overlayScrollbars.js";


// Input mask
import IMask from "imask";
const cardNumber = document.getElementById("checkout-payment-number");
const cardDate = document.getElementById("checkout-payment-date");

const cardMask = IMask(cardNumber, {mask: "0000 0000 0000 0000"});
const dateMask = IMask(cardDate, {mask: "00/00"});


// Scroll-top
const scrollTop = document.querySelector(".scroll-top");

// F(s)
function showScrollTop() {
  scrollTop.classList.toggle("scroll-top--active", window.pageYOffset > 250);
}

function scrollToTop() {
  window.scrollTo(0, 0);
}

// L(s)
window.addEventListener("scroll", showScrollTop);
scrollTop.addEventListener("click", scrollToTop);