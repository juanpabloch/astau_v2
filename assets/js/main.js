import { initNavigation } from "./nav.js";
import { initSchedule } from "./schedule.js";
import { initReveal } from "./reveal.js";
import { initAnalytics, initDeclarativeTracking, trackEvent } from "./track.js";

document.documentElement.classList.add("js-ready");

const soundBtn = document.getElementById("hero-sound-btn");
const heroVideo = document.getElementById("hero-video");
if (soundBtn && heroVideo) {
  const label = soundBtn.querySelector(".hero-sound-label");
  soundBtn.addEventListener("click", async () => {
    try {
      if (heroVideo.paused) await heroVideo.play();
      heroVideo.muted = !heroVideo.muted;
      const active = !heroVideo.muted;
      soundBtn.setAttribute("aria-pressed", String(active));
      if (label) label.textContent = active ? "Silenciar respiración" : "Escuchar respiración";
      if (active) trackEvent("sonido_hero", { estado: "activado" });
    } catch {}
  });
}

initNavigation();
initSchedule();
initReveal();
initDeclarativeTracking();
initAnalytics();
