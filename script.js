document.addEventListener("DOMContentLoaded", function () {
  const mobileToggle = document.getElementById("mobile-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", function () {
      mobileMenu.classList.toggle("active");
    });
  }

  const filterButtons = document.querySelectorAll(".filter-button");
  const products = document.querySelectorAll(".product-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.dataset.category;
      filterButtons.forEach((btn) => btn.classList.toggle("active", btn === this));

      products.forEach((card) => {
        if (category === "all" || card.dataset.category === category) {
          card.style.display = "grid";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.getAttribute("href") === currentPage || (currentPage === "" && link.getAttribute("href") === "index.html")) {
      link.classList.add("active");
    }
  });
});
