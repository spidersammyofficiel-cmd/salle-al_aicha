const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];

$("#year").textContent = new Date().getFullYear();

const nav = $("#nav");
$("#menuToggle").addEventListener("click", () => nav.classList.toggle("open"));
$$(".nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

let lang = "fr";
function applyLanguage(){
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  $$("[data-fr]").forEach(el => {
    const value = el.getAttribute(`data-${lang}`);
    if(value !== null) el.innerHTML = value;
  });
  $("#langToggle").textContent = lang === "fr" ? "العربية" : "Français";
}
$("#langToggle").addEventListener("click", () => {
  lang = lang === "fr" ? "ar" : "fr";
  applyLanguage();
  nav.classList.remove("open");
});
applyLanguage();

const lightbox = $("#lightbox");
const lightboxImg = $("#lightboxImg");
$$(".gallery-item").forEach(item => {
  item.addEventListener("click", () => {
    lightboxImg.src = item.dataset.src;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  });
});
function closeLightbox(){
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
}
$("#closeLightbox").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => { if(e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", e => { if(e.key === "Escape") closeLightbox(); });

const header = $(".site-header");
window.addEventListener("scroll", () => {
  header.style.background = window.scrollY > 30 ? "rgba(8,10,13,.94)" : "rgba(8,10,13,.78)";
});
