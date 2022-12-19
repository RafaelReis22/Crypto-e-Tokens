import { randomBytes } from "crypto";
import jwt from 'jsonwebtoken';

const chaveSecreta = randomBytes(16);

const token = jwt.sign({
  apelido: 'token01',
  curso: 'node.js: crypto e tokens'
}, chaveSecreta);

console.log(token); // cabeçalho(header).dados(payload).assinatura(signature)

const tokenDecodificado = jwt.verify(token, chaveSecreta);

console.log(tokenDecodificado);
