export function initReveal() {
  const els = document.querySelectorAll("[data-reveal]");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reduced && "IntersectionObserver" in window && els.length) {
    const obs = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("is-revealed");
          obs.unobserve(e.target);
        }
      }
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    for (const el of els) obs.observe(el);
  } else {
    for (const el of els) el.classList.add("is-revealed");
  }

  const links = document.querySelectorAll(".practices-index__link[data-preview-target]");
  const items = document.querySelectorAll(".practices-index__preview-item[data-preview-id]");
  for (const link of links) {
    const show = () => {
      for (const item of items) item.classList.toggle("is-active", item.dataset.previewId === link.dataset.previewTarget);
    };
    link.addEventListener("pointerenter", show);
    link.addEventListener("focus", show);
  }
}
