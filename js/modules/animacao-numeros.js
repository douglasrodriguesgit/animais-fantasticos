export default function initAnimacaoNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll("[data-numero]");
    numeros.forEach((item) => {
      const total = +item.innerText;
      const incremento = Math.floor(total / 100);
      let start = 0;
      const intervalo = setInterval(() => {
        start += incremento;

        item.innerText = start;
        if (start > total) {
          item.innerText = total;
          clearInterval(intervalo);
        }
      }, 25 * Math.random());
    });
  }

  let observador;
  function handleMutation(event) {
    if (event[0].target.classList.contains("ativo")) {
      observador.disconnect();
      animaNumeros();
    }
  }
  observador = new MutationObserver(handleMutation);
  const alvoObservacao = document.querySelector(".numeros");
  observador.observe(alvoObservacao, { attributes: true });
}
