import { createSign, createVerify, generateKeyPairSync } from "crypto";
import { constants } from "fs";

const { privateKey, publicKey } = generateKeyPairSync("rsa", {
  modulusLength: 2048,
  publicKeyEncoding: { type: "spki", format: "pem" },
  privateKeyEncoding: { type: "pkcs8", format: "pem" },
});

let dados = 'Mensagem com assinatura digital!';

// Assinatura:
const assinador = createSign('rsa-sha256');
assinador.update(dados);

const assinatura = assinador.sign(privateKey, 'hex');
console.log(`Assinatura: ${assinatura} \n`);

// intermediário altera o conteúdo assinado:
// dados = 'Mensagem modificada, assinatura deve ser inválida';

// Verificação:
const verificador = createVerify('rsa-sha256');
verificador.update(dados);

let ehVerificado = verificador.verify(publicKey, assinatura, 'hex');
console.log(ehVerificado) 
