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

  initHeroMantra(reduced);

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

function initHeroMantra(reduced) {
  const mantra = document.querySelector(".hero__mantra");
  if (!mantra || reduced) return;

  const lines = mantra.querySelectorAll(".hero__mantra-line");
  if (!lines.length) return;

  let delay = 350;      /* Espera inicial antes de la 1ª frase (ms) */
  const step = 900;     /* Tiempo entre el inicio de una frase y la siguiente (ms) */
  const duration = 1800; /* Duración del recorrido/desenfoque de cada frase (ms) */

  mantra.style.setProperty("--line-duration", `${duration}ms`);

  lines.forEach((line, index) => {
    if (index > 0) delay += step;
    line.style.setProperty("--line-delay", `${delay}ms`);
  });

  if (!("IntersectionObserver" in window)) {
    mantra.classList.add("is-visible");
    return;
  }

  const obs = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        window.requestAnimationFrame(() => {
          mantra.classList.add("is-visible");
        });
        obs.unobserve(mantra);
      }
    }
  }, { threshold: 0.15 });

  obs.observe(mantra);
}
