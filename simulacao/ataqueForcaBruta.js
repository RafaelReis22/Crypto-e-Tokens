import { createHash } from 'crypto';

class Usuario {
  constructor(nome, senha) {
    this.nome = nome;
    this.hash = this.criaHash(senha);
  }

  criaHash(senha) {
    return createHash('sha256').update(senha).digest('hex');
  }

  autentica(nome, senha) {
    if (this.nome == nome && this.hash == this.criaHash(senha)) {
      console.log('Seja bem-vindo, ' + nome + '!');
      return true;
    }
    console.log('Usuário ou senha incorretos!');
    return false;
  }
}

const user01 = new Usuario('admin', '0765');

let senha = 0;
let autenticado = false;

// No ataque de força bruta um grande número de permutações de senhas possíveis são verificadas.
while (senha < 10000 && !autenticado) {
  let senhaTeste = senha.toString().padStart(4, '0');
  if (user01.autentica('admin', senhaTeste)) {
    console.log('A senha é: ' + senhaTeste);
    autenticado = true;
  }
  senha++;
}
