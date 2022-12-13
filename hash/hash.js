import { createHash } from 'crypto';

function criaHash(senha) {
  return createHash('sha256').update(senha).digest('hex');
}

class Usuario {
  constructor(nome, senha) {
    this.nome = nome;
    this.hash = criaHash(senha);
  }

  autentica(nome, senha) {
    if (this.nome == nome && this.hash == criaHash(senha)) {
      console.log('Seja bem-vindo, ' + nome + '!');
      return true;
    }
    console.log('Usuário ou senha incorretos!');
    return false;
  }
}

const user01 = new Usuario('admin', 'admin');
console.log(user01);

console.log('\ncaso erro:');
console.log(user01.autentica(user01.nome, user01.hash));

console.log('\ncaso sucesso:');
console.log(user01.autentica('admin', 'admin'));
