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

const user01 = new Usuario('admin', 'qwerty123');

const senhasComuns = ['senha', 'minhaSenha', 'brasil', 'MeuAniversario', 'admin', 'senha123', 'senha123456', 'qwerty123', '102030'];
let senhaUsuario;

// No ataque de dicionário são utilizadas senhas comuns para tentar acesso a sistemas.
senhasComuns.map(senha => {
  if (user01.autentica('admin', senha)) {
    senhaUsuario = senha;
  }
});

if (senhaUsuario) {
  console.log('\nA senha é ' + senhaUsuario);
};
