import * as v from "../vars.js";
import Swiper, { Pagination, Navigation, EffectFade } from 'swiper';

// HERO SWIPER
const heroSwiper = new Swiper("#hero-swiper", {
  modules: [Pagination, Navigation, EffectFade],
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  loop: true,
  navigation: {
    nextEl: '#hero-button-next',
    prevEl: '#hero-button-prev',
  },
  pagination: {
    el: '#hero-pagination',
    clickable: true,
  },
});

// TOP-CATEGORIES SWIPER
if (document.querySelector("#top-categories-swiper")) {

  const topCategoriesSwiper = new Swiper("#top-categories-swiper", {
    modules: [Pagination],
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    pagination: {
      el: '#top-categories-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      400: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20
      }
    }
  });

  // To enable controls on small displays
  function disableTopCategoriesSwiper() {
    if (v.$mdq768.matches) {
      topCategoriesSwiper.disable();
      topCategoriesSwiper.setProgress(0, 0);
    }
  }

  function enableTopCategoriesSwiper() {
    if (v.$mdq767.matches) {
      topCategoriesSwiper.enable();
    }
  }

  v.$mdq768.addEventListener("change", disableTopCategoriesSwiper);
  v.$mdq767.addEventListener("change", enableTopCategoriesSwiper);

  disableTopCategoriesSwiper();
}

// NEW ARRIVALS SWIPER
const newArrivalsSwiper = new Swiper("#new-arrivals-slider", {
  modules: [Pagination],
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: "#new-arrivals-pagination",
    clickable: true,
  },
  breakpoints: {
    1400: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    420: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    375: {
      slidesPerView: 1,
      spaceBetween: 20,
    }
  }
});

// POPULAR CATEGORIES SWIPER
if (document.querySelector("#popular-categories-slider")) {

  const popularCategoriesSwiper = new Swiper("#popular-categories-slider", {
    modules: [Pagination],
    enabled: true,
    loop: true,
    speed: 700,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '#popular-categories-pagination',
      clickable: true,
    },
    breakpoints: {
      1290: {
        enabled: false,
        slidesPerView: 6,
        spaceBetween: 30,
      },
      1075: {
        enabled: true,
        slidesPerView: 5,
        slidesPerGroup: 4,
        spaceBetween: 30,
      },
      860: {
        enabled: true,
        slidesPerView: 4,
        slidesPerGroup: 3,
        spaceBetween: 30,
      },
      635: {
        enabled: true,
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 20,
      },
      430: {
        enabled: true,
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
      }
    }
  });

  function resetProgressPopularCategoriesSwiper() {
    if (v.$mdq768.matches) {
      popularCategoriesSwiper.setProgress(0, 0);
    }
  }

  v.$mdq768.addEventListener("change", resetProgressPopularCategoriesSwiper);
}

// TRENDING NOW SWIPER
const trendingNowSwiper = new Swiper("#trending-now-slider", {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '#trending-now-button-next',
    prevEl: '#trending-now-button-prev',
  },
  breakpoints: {
    900: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    }
  }
});

// SALE SWIPER
const saleSwiper = new Swiper("#sale-slider", {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '#sale-button-next',
    prevEl: '#sale-button-prev',
  },
  breakpoints: {
    900: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    }
  }
});

// INSTAGRAM SWIPER
if (document.querySelector("#instagram-slider")) {
  const instagramSwiper = new Swiper("#instagram-slider", {
    modules: [Pagination],
    loop: true,
    enabled: true,
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 15,
    pagination: {
      el: '#instagram-pagination',
      clickable: true,
    },
    breakpoints: {
      576: {
        enabled: false,
        slidesPerView: 3,
        slidesPerGroup: 2,
      }
    }
  });

  function resetProgressInstagramSwiper() {
    if (v.$mdq768.matches) {
      instagramSwiper.setProgress(0, 0);
    }
  }

  v.$mdq768.addEventListener("change", resetProgressInstagramSwiper);

  instagramSwiper.setProgress(0, 0); // (Изначально неверный порядок слайдов)
}

// POSTS SWIPER
if (document.querySelector("#posts-slider")) {

  const postSwiper = new Swiper("#posts-slider", {
    modules: [Pagination],
    loop: true,
    enabled: true,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '#posts-pagination',
      clickable: true,
    },
    breakpoints: {
      600: {
        enabled: false,
        slidesPerView: 2,
        spaceBetween: 30,
      },
      576: {
        enabled: false,
        slidesPerView: 2,
        spaceBetween: 20,
      }
    }
  });

  function resetPostsSwiper() {
    if (v.$mdq768.matches) {
      postsSwiper.setProgress(0, 0);
    }
  }

  v.$mdq768.addEventListener("change", resetPostsSwiper);
}


// BRAND SWIPER
if (document.querySelector("#brands-slider")) {
  const brandSwiper = new Swiper("#brands-slider", {
    loop: true,
    enabled: true,
    slidesPerView: 2,
    spaceBetween: 20,
    breakpoints: {
      1280: {
        enabled: false,
        slidesPerView: 6,
        spaceBetween: 100,
      },
      1220: {
        enabled: false,
        slidesPerView: 6,
        spaceBetween: 80,
      },
      1120: {
        enabled: false,
        slidesPerView: 6,
        spaceBetween: 60,
      },
      1024: {
        enabled: false,
        slidesPerView: 6,
        spaceBetween: 40,
      },
      860: {
        enabled: true,
        slidesPerView: 5,
        spaceBetween: 40,
      },
      700: {
        enabled: true,
        slidesPerView: 4,
        spaceBetween: 40,
      },
      650: {
        enabled: true,
        slidesPerView: 4,
        spaceBetween: 30,
      },
      500: {
        enabled: true,
        slidesPerView: 3,
        spaceBetween: 30,
      },
      480: {
        enabled: true,
        slidesPerView: 3,
        spaceBetween: 20,
      }
    }
  });

  function resetBrandSwiper() {
    if (v.$mdq1024.matches) {
      brandSwiper.setProgress(0, 0);
    }
  }

  v.$mdq1024.addEventListener("change", resetBrandSwiper);
}

// ==== PRODUCT CARD SLIDER SWIPER ==== //
const productCardSwiper = new Swiper("#product-card-swiper", {
  modules: [Navigation],
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '#pcs-button-next',
    prevEl: '#pcs-button-prev',
  }
});

export { productCardSwiper as $productCardSwiper}

// ==== PRODUCT CARD MINISLIDER SWIPER ==== //
const productCardMiniSwiper = new Swiper("#pcm-swiper", {
  slidesPerView: 5,
  spaceBetween: 10,
  breakpoints: {
    1024: {
      spaceBetween: 20,
    },
    768: {
      spaceBetween: 10,
    },
    576: {
      spaceBetween: 20,
    }
  }
});

// COMPLETE LOOK SWIPER
const completeLookSwiper = new Swiper("#complete-look-slider", {
  modules: [Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '#cl-button-next',
    prevEl: '#cl-button-prev',
  },
  pagination: {
    el: '#cl-pagination',
    clickable: true,
  },
  breakpoints: {
    992: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    }
  }
});

// RELATED PRODUCTS SWIPER
const relatedProductsSwiper = new Swiper("#related-products-slider", {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '#rp-button-next',
    prevEl: '#rp-button-prev',
  },
  breakpoints: {
    1060: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    }
  }
});

// RECENTLY VIEWED SWIPER
const recentlyViewedSwiper = new Swiper("#recently-viewed-slider", {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '#rw-button-next',
    prevEl: '#rw-button-prev',
  },
  breakpoints: {
    1060: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    }
  }
});

// IMAGE MODAL SWIPER
const imageModalSwiper = new Swiper("#image-modal-slider", {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '#image-modal-button-next',
    prevEl: '#image-modal-button-prev',
  },
  pagination: {
    el: '#image-modal-pagination',
    clickable: true,
  },
  grabCursor: true
});

export {imageModalSwiper as $imageModalSwiper}

// RELATED- POSTS SWIPER
if (document.querySelector("#related-posts-slider")) {

  const relatedPostsSwiper = new Swiper("#related-posts-slider", {
    modules: [Pagination],
    loop: true,
    enabled: true,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '#related-posts-pagination',
      clickable: true,
    },
    breakpoints: {
      600: {
        enabled: false,
        slidesPerView: 2,
        spaceBetween: 30,
      },
      576: {
        enabled: false,
        slidesPerView: 2,
        spaceBetween: 20,
      }
    }
  });

  function resetRelatedPostsSwiper() {
    if (v.$mdq768.matches) {
      relatedPostsSwiper.setProgress(0, 0);
    }
  }

  v.$mdq768.addEventListener("change", resetRelatedPostsSwiper);
}