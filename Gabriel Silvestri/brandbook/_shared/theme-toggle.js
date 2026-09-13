// theme-toggle.js · multi-theme switcher persistente (localStorage)
(function () {
  const STORAGE_KEY = "brandbook-theme";
  const root = document.documentElement;
  const toggle = document.querySelector(".theme-toggle");
  if (!toggle) return;

  const buttons = toggle.querySelectorAll("button[data-theme]");

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    buttons.forEach((b) =>
      b.setAttribute(
        "aria-pressed",
        b.dataset.theme === theme ? "true" : "false"
      )
    );
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (_) {
      /* localStorage indisponível (privacy mode etc) */
    }
  }

  let stored = null;
  try {
    stored = localStorage.getItem(STORAGE_KEY);
  } catch (_) {}
  const initial = stored || toggle.dataset.default || "light";
  apply(initial);

  buttons.forEach((btn) =>
    btn.addEventListener("click", () => apply(btn.dataset.theme))
  );
})();
