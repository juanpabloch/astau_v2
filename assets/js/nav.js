export function initNavigation() {
  const header = document.querySelector(".site-header");
  const toggleBtn = document.querySelector(".menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const mainEl = document.querySelector("main");
  const footerEl = document.querySelector(".site-footer");
  if (!header) return;

  let lastY = window.scrollY;
  let ticking = false;

  const onScroll = () => {
    const y = window.scrollY;
    const delta = y - lastY;
    header.classList.toggle("is-scrolled", y > 32);
    if (y > 140 && delta > 8) header.classList.add("is-hidden");
    else if (delta < -6 || y <= 80) header.classList.remove("is-hidden");
    lastY = Math.max(0, y);
    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });
  onScroll();

  if (!toggleBtn || !mobileMenu) return;

  const setMenu = (open) => {
    toggleBtn.setAttribute("aria-expanded", String(open));
    toggleBtn.textContent = open ? "Cerrar" : "Menú";
    mobileMenu.hidden = !open;
    header.classList.toggle("is-menu-open", open);
    document.body.classList.toggle("has-menu-open", open);
    if (mainEl) mainEl.inert = open;
    if (footerEl) footerEl.inert = open;
    (open ? mobileMenu.querySelector("a") : toggleBtn)?.focus();
  };

  toggleBtn.addEventListener("click", () => setMenu(toggleBtn.getAttribute("aria-expanded") !== "true"));
  mobileMenu.addEventListener("click", (e) => {
    if (e.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !mobileMenu.hidden) setMenu(false);
  });
  window.matchMedia("(min-width: 64rem)").addEventListener("change", (e) => {
    if (e.matches && !mobileMenu.hidden) setMenu(false);
  });
}
