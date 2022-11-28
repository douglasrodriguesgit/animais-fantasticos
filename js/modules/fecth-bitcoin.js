export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then((body) => {
      const bitcoin = document.querySelector(target);
      bitcoin.innerText = (1000 / body.BRL.sell).toFixed(4);
    })
    .catch((erro) => console.log(Error(erro)));
}
