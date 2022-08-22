export default function initfuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const diasFuncionamento = funcionamento.dataset.semana.split(",").map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberto = diasFuncionamento.indexOf(diaAgora) !== -1;
  const horarioAberto =
    horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];
 
  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add("aberto");
  }
}
