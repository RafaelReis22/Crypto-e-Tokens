const mensagem = 'the answer is forty two';

// matemática: https://danieldonda.com/a-matematica-da-cifra-de-cesar/
function cifraMensagem(mensagem, movimentos) {
  let resultado = '';

  for (let i = 0; i < mensagem.length; i++) {
    const codigoCaractere = mensagem.charCodeAt(i);

    // A = 65; Z = 90
    if (codigoCaractere >= 65 && codigoCaractere <= 90) {
      let calculoMovimentos = ((codigoCaractere - 65 + movimentos) % 26) + 65; // 26 = total de letras
      resultado += String.fromCharCode(calculoMovimentos);

      // a = 97; z = 122
    } else if (codigoCaractere >= 97 && codigoCaractere <= 122) {
      let calculoMovimentos = ((codigoCaractere - 97 + movimentos) % 26) + 97;
      resultado += String.fromCharCode(calculoMovimentos);

    } else {
      resultado += String.fromCharCode(codigoCaractere);
    }
  }
  return resultado;
}

function decifraMensagem(mensagem, movimentos) {
  let resultado = '';

  for (let i = 0; i < mensagem.length; i++) {
    const codigoCaractere = mensagem.charCodeAt(i);

    if (codigoCaractere >= 65 && codigoCaractere <= 90) {
      let calculoMovimentos = ((codigoCaractere - 90 - movimentos) % 26) + 90;
      resultado += String.fromCharCode(calculoMovimentos);

    } else if (codigoCaractere >= 97 && codigoCaractere <= 122) {
      let calculoMovimentos = ((codigoCaractere - 122 - movimentos) % 26) + 122;
      resultado += String.fromCharCode(calculoMovimentos);

    } else {
      resultado += String.fromCharCode(codigoCaractere);
    }
  }
  return resultado;
}

const mensagemCifrada = cifraMensagem(mensagem, 5);
console.log(mensagemCifrada);

const mensagemDecifrada = decifraMensagem(mensagemCifrada, 5);
console.log(mensagemDecifrada);
