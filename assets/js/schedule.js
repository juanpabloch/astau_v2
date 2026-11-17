import { trackEvent } from "./track.js";

const DAYS = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];

export function initSchedule() {
  const section = document.getElementById("horarios");
  if (!section) return;

  const tablist = section.querySelector('[role="tablist"]');
  const tabs = [...section.querySelectorAll('[role="tab"]')];
  const panels = [...section.querySelectorAll('[role="tabpanel"]')];

  const selectTab = (target, { focus = false, track = true } = {}) => {
    if (!target) return;
    for (const t of tabs) {
      const on = t === target;
      t.setAttribute("aria-selected", String(on));
      t.setAttribute("tabindex", on ? "0" : "-1");
      t.toggleAttribute("focusgroupstart", on);
    }
    for (const p of panels) {
      if (p.getAttribute("aria-labelledby") === target.id) p.removeAttribute("hidden");
      else p.setAttribute("hidden", "until-found");
    }
    if (focus) target.focus();
    if (track) trackEvent("horarios_pestaña", { pestana: target.dataset.tabName || target.textContent.trim() });
  };

  if (tablist) {
    tablist.addEventListener("click", (e) => {
      const btn = e.target.closest('[role="tab"]');
      if (btn) selectTab(btn);
    });
    tablist.addEventListener("keydown", (e) => {
      const i = tabs.indexOf(document.activeElement);
      if (i < 0) return;
      const map = { ArrowRight: (i + 1) % tabs.length, ArrowLeft: (i - 1 + tabs.length) % tabs.length, Home: 0, End: tabs.length - 1 };
      if (e.key in map) {
        e.preventDefault();
        selectTab(tabs[map[e.key]], { focus: true });
      }
    });
    for (const p of panels) {
      p.addEventListener("beforematch", () => selectTab(document.getElementById(p.getAttribute("aria-labelledby")), { track: false }));
    }
  }

  const dayBtns = [...section.querySelectorAll(".day-btn")];
  const dayCols = [...section.querySelectorAll(".schedule-day")];

  const selectDay = (day, { track = true } = {}) => {
    for (const b of dayBtns) b.setAttribute("aria-pressed", String(b.dataset.dayTarget === day));
    for (const c of dayCols) c.classList.toggle("is-day-hidden", c.dataset.dia !== day);
    if (track) trackEvent("horarios_dia", { dia: day });
  };

  if (dayBtns.length) {
    const d = new Date().getDay();
    selectDay(d === 0 ? "lunes" : DAYS[d], { track: false });
    for (const b of dayBtns) b.addEventListener("click", () => selectDay(b.dataset.dayTarget));
  }

  const filterBtns = [...section.querySelectorAll(".filter-chip")];
  const grid = section.querySelector(".schedule-grid");
  const cards = [...section.querySelectorAll(".schedule-card[data-practica]")];

  const applyFilter = (slug = "todas", { track = true, syncDay = true } = {}) => {
    for (const b of filterBtns) b.setAttribute("aria-pressed", String(b.dataset.filter === slug));
    if (!grid) return;
    if (slug === "todas") {
      grid.classList.remove("has-filter");
      for (const c of cards) c.classList.remove("is-dimmed", "is-highlighted");
    } else {
      grid.classList.add("has-filter");
      let firstDay = null;
      for (const c of cards) {
        const match = c.dataset.practica === slug;
        c.classList.toggle("is-highlighted", match);
        c.classList.toggle("is-dimmed", !match);
        if (match && !firstDay) firstDay = c.dataset.dia;
      }
      if (syncDay && firstDay) {
        const activeDay = dayBtns.find((b) => b.getAttribute("aria-pressed") === "true")?.dataset.dayTarget;
        if (!cards.some((c) => c.dataset.dia === activeDay && c.dataset.practica === slug)) {
          selectDay(firstDay, { track: false });
        }
      }
    }
    if (track) trackEvent("horarios_filtro", { practica: slug });
  };

  for (const b of filterBtns) b.addEventListener("click", () => applyFilter(b.dataset.filter));

  document.addEventListener("click", (e) => {
    const link = e.target.closest("[data-filter-link]");
    if (!link) return;
    const slug = link.dataset.filterLink;
    if (slug === "meditacion") selectTab(document.getElementById("tab-meditacion"));
    else {
      selectTab(document.getElementById("tab-yoga"), { track: false });
      applyFilter(slug);
    }
  });

  const q = new URLSearchParams(window.location.search).get("practica");
  if (q === "meditacion") selectTab(document.getElementById("tab-meditacion"), { track: false });
  else if (q && filterBtns.some((b) => b.dataset.filter === q)) applyFilter(q, { track: false });
}
