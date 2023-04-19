// MICROSLIDER
let looks = document.querySelectorAll(".sale .product__look");

// F(s)
function chooseImage() {
  let currentIdx = 0;
  let thisLook = this;

  // **
  function resetChooseImage() {
    thisLook.removeEventListener("click", chooseImageInner);

    const image = thisLook.querySelector(".microslider__image");
    const srcs = image.nextElementSibling;
    image.src = srcs.firstElementChild.dataset.src;
  }

  window.addEventListener("resize", resetChooseImage);

  // **
  function chooseImageInner(e) {
    const image = this.querySelector("#microslider-image");
    const srcs = this.querySelectorAll(".microslider__src");

    if (e.target.closest(".microslider__button--left")) {
      currentIdx -= 1;

      if (currentIdx < 0) {
        currentIdx = srcs.length - 1;
        image.src = srcs[currentIdx].dataset.src;
        return;
      }

      image.src = srcs[currentIdx].dataset.src;

    } else if (e.target.closest(".microslider__button--right")) {
      currentIdx += 1;

      if (currentIdx > srcs.length - 1) {
        currentIdx = 0;
        image.src = srcs[currentIdx].dataset.src;
        return;
      }

      image.src = srcs[currentIdx].dataset.src;
    }
  }

  return chooseImageInner;  
}

// L(s)
looks.forEach(look => {
  look.addEventListener("click", chooseImage.bind(look)());
});

window.addEventListener("resize", () => {
  setTimeout(() => { // (Чтобы swiper успел прогрузить свой js)
    let looks = document.querySelectorAll(".sale .product__look");

    looks.forEach(look => {
      look.addEventListener("click", chooseImage.bind(look)());
    });
  }, 50);
})