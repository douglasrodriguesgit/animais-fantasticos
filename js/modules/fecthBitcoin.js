export default function initFechBitcoin() {
  console.log('teste')
  fetch("https://blockchain.info/ticker")
    .then((response) => response.json())
    .then((body) => {
      const bitcoin = document.querySelector(".btc-preco");
      bitcoin.innerText = (1000 / body.BRL.sell).toFixed(4);
    })
    .catch((erro) => console.log(Error(erro)));
}
