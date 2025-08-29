let numero_secreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 10;
let historicoDePalpites = [];
alert("========BEM-VINDO AO JOGO NÚMERO SECRETO!!!========");
while (tentativas > 0) {
  let numero_certo = Number(
    prompt(
      `Tente adivinhar qual o número entre 1 e 100. Você tem ${tentativas} tentativas restantes.`
    )
  );

  historicoDePalpites.push(numero_certo);

  if (numero_certo < 1 || numero_certo > 100 || isNaN(numero_certo)) {
    alert(
      `Número informado ${numero_certo} é inválido. Precisa ser de 1 até 100.`
    );
  } else if (numero_certo === numero_secreto) {
    alert(
      `O número secreto é ${numero_certo}. Você acertou faltando ${tentativas} tentativas Parabéns!`
    );
    break;
  } else if (numero_certo < numero_secreto) {
    tentativas--;
    alert(
      `Que pena, o número ${numero_certo} é menor que o número secreto. Tente novamente!`
    );
  } else {
    tentativas--;
    alert(
      `Que pena, o número ${numero_certo} é maior que o número secreto. Tente novamente!`
    );
  }

  if (tentativas === 0) {
    alert(
      `Você não tem mais tentativas. O número secreto era ${numero_secreto}.`
    );
  }
}
alert(`esses foram os numeros dos seus palpites ${historicoDePalpites}`);
