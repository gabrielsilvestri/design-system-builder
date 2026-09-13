// copy.js · click-to-copy de hex/tokens com toast de confirmação
(function () {
  const toast = document.querySelector(".toast");
  let toastTimer;

  function showToast(text) {
    if (!toast) return;
    toast.textContent = text;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 1600);
  }

  document.addEventListener("click", (e) => {
    const target = e.target.closest("[data-copy]");
    if (!target) return;
    const value = target.dataset.copy;
    if (!value) return;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(value)
        .then(() => showToast(`${value} copiado`))
        .catch(() => showToast("Falha ao copiar"));
    } else {
      // fallback antigo
      const ta = document.createElement("textarea");
      ta.value = value;
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        showToast(`${value} copiado`);
      } catch (_) {
        showToast("Falha ao copiar");
      }
      document.body.removeChild(ta);
    }
  });
})();
