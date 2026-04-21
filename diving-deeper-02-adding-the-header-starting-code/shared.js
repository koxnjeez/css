var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectPlanBtn = document.querySelectorAll(".plan .button");
var closeBtn = document.querySelector(".modal__action--negative");
var toggleBtn = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var ctaBtn = document.querySelector(".main-nav__item--cta");

// console.dir(backdrop);
// console.dir(selectPlanBtn);

for (var i = 0; i < selectPlanBtn.length; i++) {
  selectPlanBtn[i].addEventListener("click", () => {
    // backdrop.style.display = "block";
    // modal.style.display = "block";
    backdrop.style.display = "block";
    setTimeout(() => {
      backdrop.classList.add("open");
    }, 10);

    modal.style.display = "block";
    setTimeout(() => {
      modal.classList.add("open");
    }, 10);
  });
}

const closeModal = () => {
  // backdrop.style.display = "none";
  // modal.style.display = "none";
  backdrop.style.display = "none";
  setTimeout(() => {
    backdrop.classList.remove("open");
  }, 10);

  if (modal) {
    modal.style.display = "none";
    setTimeout(() => {
      modal.classList.remove("open");
    }, 10);
  }
};

if (closeBtn) {
  closeBtn.addEventListener("click", closeModal);
}

backdrop.addEventListener("click", () => {
  mobileNav.style.display = "none";
  setTimeout(() => {
    mobileNav.classList.remove("open");
  }, 10);

  closeModal();
});

toggleBtn.addEventListener("click", () => {
  // backdrop.style.display = "block";
  // mobileNav.style.display = "block";
  backdrop.style.display = "block";
  setTimeout(() => {
    backdrop.classList.add("open");
  }, 10);

  mobileNav.style.display = "block";
  setTimeout(() => {
    mobileNav.classList.add("open");
  }, 10);
});

ctaBtn.addEventListener("animationstart", (event) => {
  console.log("Animation started", event);
});

ctaBtn.addEventListener("animationend", (event) => {
  console.log("Animation ended", event);
});

ctaBtn.addEventListener("animationiteration", (event) => {
  console.log("Animation iteration", event);
});
