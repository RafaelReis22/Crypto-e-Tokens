import { createHash } from 'crypto';

function criaHash(estrategia, dado) {
  return createHash(estrategia).update(dado).digest('hex');
}

const hashesVazadas = ['21232f297a57a5a743894a0e4a801fc3', '3fc0a7acf087f549ac2b266baf94b8b1', '21232f297a57a5a743894a0e4a801fc3', 'cedf5ab7b5c5852b3ed35d7dbe3c3835', '81dc9bdb52d04dc20036dbd8313ed055', '6a4120be23c814f80233ecbb34e71adc'];
const senhasComuns = ['senha', 'minhaSenha', 'brasil', 'MeuAniversario', 'admin', 'senha123', 'senha123456', 'qwerty123', '102030'];

const rainbowTable = senhasComuns.map(senha => {
  return [senha, criaHash(senha, 'MD5')];
});

// console.log(rainbowTable);

// No ataque de Rainbow Table são utilizadas as hashes das senhas para realizar o ataque.
hashesVazadas.map(hash => {
  rainbowTable.map(parGerado => {
    if (hash == parGerado[1]) {
      console.log(`Senha encontrada:\nhash: ${hash}\nsenha: ${parGerado[0]}\n`);
    }
  });
});
