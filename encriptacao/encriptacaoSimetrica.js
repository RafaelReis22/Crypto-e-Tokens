import { createCipheriv, createDecipheriv, randomBytes } from "crypto";

const mensagem = 'Demonstração de encriptação simétrica';
const chave = randomBytes(32);
/* iv significa initialization vector (vetor de inicialização);
serve para garantir maior aleatoriedade e mais segurança na encriptacao */
const iv = randomBytes(16);
const cifra = createCipheriv('aes256', chave, iv);

const mensagemCifrada = cifra.update(mensagem, 'utf-8', 'hex') + cifra.final('hex');
console.log(mensagemCifrada)

// Transmissão => chave, iv, mensagem => decifrar a mensagem

const decifra = createDecipheriv('aes256', chave, iv);

const mensagemDecifrada = decifra.update(mensagemCifrada, 'hex', 'utf-8') + decifra.final('utf-8');
console.log(mensagemDecifrada);
