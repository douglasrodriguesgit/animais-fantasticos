export default function initFechBitcoin() {
  const bitcoin = document.querySelector(".btc-preco");
  fetch(`https://blockchain.info/ticker`)
    .then((response) => {
      response
        .json()
        .then(
          (body) => (bitcoin.innerText = (1000 / body.BRL.sell).toFixed(4))
        );
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
