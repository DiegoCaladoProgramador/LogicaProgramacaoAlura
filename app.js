alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 10;
let numeroMinimo = 1;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + numeroMinimo);
let tentativas = 0
let chute;


while (chute != numeroSecreto) {
    tentativas++;
    chute = prompt(`Escolha o número entre ${numeroMinimo} e ${numeroMaximo}`);

    if(numeroSecreto == chute) {
        break
    }else {
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que o ${chute}`)
        }else {
            alert(`O número secreto é maior que o ${chute}`)
        }
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Parabéns! Você acertou! com ${tentativas} ${palavraTentativa}`);
/*if(tentativas >1){
    alert(`Parabéns! Você acertou! com ${tentativas} tentativas`);
}else{
    alert(`Parabéns! Você acertou! com ${tentativas} tentativas`);
}*/