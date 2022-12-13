// versão resumida da cifra de césar
const mensagem = 'secret message for test purposes';

function cifraMensagem(mensagem, movimentos) {
  const mensagemSecreta = mensagem.split('').map(caractere => {
    const codigoCaractere = caractere.charCodeAt(0);
    return String.fromCharCode(codigoCaractere + movimentos);
  });
  return mensagemSecreta.join('');
}

function decifraMensagem(mensagem, movimentos) {
  const mensagemSecreta = mensagem.split('').map(caractere => {
    const codigoCaractere = caractere.charCodeAt(0);
    return String.fromCharCode(codigoCaractere - movimentos);
  });
  return mensagemSecreta.join('');
}

const mensagemCifrada = cifraMensagem(mensagem,5 );
console.log(mensagemCifrada);

const mensagemDecifrada = decifraMensagem(mensagemCifrada, 5);
console.log(mensagemDecifrada);