// copy.js · clicar num token copia o valor, com aviso curto de confirmação.
(function () {
  var aviso = document.querySelector(".bb-toast");
  var timer;

  function mostrar(texto) {
    if (!aviso) return;
    aviso.textContent = texto;
    aviso.classList.add("bb-mostra");
    clearTimeout(timer);
    timer = setTimeout(function () { aviso.classList.remove("bb-mostra"); }, 1600);
  }

  document.addEventListener("click", function (e) {
    var alvo = e.target.closest("[data-copiar]");
    if (!alvo) return;
    var valor = alvo.getAttribute("data-copiar");
    if (!valor) return;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(valor).then(
        function () { mostrar(valor + " copiado"); },
        function () { mostrar("Não deu pra copiar. Selecione o valor na tela."); }
      );
      return;
    }
    var campo = document.createElement("textarea");
    campo.value = valor;
    document.body.appendChild(campo);
    campo.select();
    try {
      document.execCommand("copy");
      mostrar(valor + " copiado");
    } catch (err) {
      mostrar("Não deu pra copiar. Selecione o valor na tela.");
    }
    document.body.removeChild(campo);
  });
})();
