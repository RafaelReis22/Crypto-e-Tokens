import { generateKeyPairSync, privateDecrypt, publicEncrypt } from "crypto";

const { privateKey, publicKey } = generateKeyPairSync("rsa", {
  modulusLength: 2048,
  publicKeyEncoding: { type: "spki", format: "pem" },
  privateKeyEncoding: { type: "pkcs8", format: "pem" },
});

// console.log(privateKey);
// console.log(publicKey);

const dadosEncriptados = publicEncrypt(publicKey, Buffer.from('super secret message O.o'));
console.log(dadosEncriptados.toString('hex'));

const dadosDecifrados = privateDecrypt(privateKey, dadosEncriptados);
console.log(dadosDecifrados.toString('utf-8'));
