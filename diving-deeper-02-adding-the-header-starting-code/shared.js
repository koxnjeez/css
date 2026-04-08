var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectPlanBtn = document.querySelectorAll(".plan .button");
var closeBtn = document.querySelector(".modal__action--negative");
var toggleBtn = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

// console.dir(backdrop);
// console.dir(selectPlanBtn);

for (var i = 0; i < selectPlanBtn.length; i++) {
  selectPlanBtn[i].addEventListener("click", () => {
    // backdrop.style.display = "block";
    // modal.style.display = "block";
    backdrop.classList.add("open");
    modal.classList.add("open");
  });
}

const closeModal = () => {
  // backdrop.style.display = "none";
  // modal.style.display = "none";
  backdrop.classList.remove("open");

  if (modal) {
    modal.classList.remove("open");
  }
};

if (closeBtn) {
  closeBtn.addEventListener("click", closeModal);
}

backdrop.addEventListener("click", () => {
  mobileNav.classList.remove("open");
  closeModal();
});

toggleBtn.addEventListener("click", () => {
  // backdrop.style.display = "block";
  // mobileNav.style.display = "block";
  backdrop.classList.add("open");
  mobileNav.classList.add("open");
});
