import { scryptSync, randomBytes, timingSafeEqual } from "crypto";

function criaHashComSal(senha) {
  const sal = randomBytes(16).toString('hex');
  const hash = scryptSync(senha, sal, 64).toString('hex');

  return `${sal}:${hash}`;
}

class Usuario {
  constructor(nome, senha) {
    this.nome = nome;
    [this.sal, this.hash] = criaHashComSal(senha).split(':');
  }

  autentica(nome, senha) {
    if (nome == this.nome) {
      const testeHash = scryptSync(senha, this.sal, 64);
      const hashReal = Buffer.from(this.hash, 'hex');

      if (timingSafeEqual(testeHash, hashReal)) {
        console.log('Seja bem-vindo, ' + nome + '!');
        return true;
      }
    }
    console.log('Usuário ou senha incorretos!');
    return false;
  }
}

const user01 = new Usuario('Rodorfo', 'xxcoquinhageladaxx');

console.log(user01);

console.log('\ncaso erro:');
console.log(user01.autentica(user01.nome, user01.hash));

console.log('\ncaso sucesso:');
console.log(user01.autentica('Rodorfo', 'xxcoquinhageladaxx'));
