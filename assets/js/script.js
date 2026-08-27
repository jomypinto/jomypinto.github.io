
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const revealItems = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  }),
  { threshold: 0.12 }
);
revealItems.forEach(item => observer.observe(item));

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();


const siteHeader = document.querySelector(".site-header");
const backToTop = document.querySelector(".back-to-top");

const updateScrollUI = () => {
  const y = window.scrollY || document.documentElement.scrollTop;
  if (siteHeader) siteHeader.classList.toggle("is-scrolled", y > 12);
  if (backToTop) backToTop.classList.toggle("visible", y > 500);
};

window.addEventListener("scroll", updateScrollUI, { passive: true });
updateScrollUI();

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
