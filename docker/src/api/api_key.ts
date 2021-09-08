import { generateKeyPair, publicEncrypt, privateDecrypt } from 'crypto';
import { readFileSync } from 'fs';

// kept for posterity to show how encryptedApiKey was created
function keyGen(): void {
  generateKeyPair('rsa', {
      modulusLength: 4096,
      publicKeyEncoding: {
        type: 'spki',
        format: 'pem'
      },
      privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
        cipher: 'aes-256-cbc',
        passphrase: 'top secret'
      }
    }, (err, pub, prv) => {
      if (!err) {
        console.log(`pubkey: ${pub}\nprivkey: ${prv}`)
      }
      else {
        console.log(`Error: ${err}`)
      }
    });
}

// kept for posterity to show how encryptedApiKey was created
function encrypt(message: string, pubKeyPath: string) {
  const buffer: Buffer = Buffer.from(message);
  const pubKey: string = readFileSync(pubKeyPath, 'utf8');
  const encryptedMessage: Buffer = publicEncrypt(pubKey, buffer);
  return encryptedMessage.toString('base64');
}

function decrypt(message: string, prvKeyPath: string) {
  const prvKey: string = readFileSync(prvKeyPath, 'utf8')
  const buffer: Buffer = Buffer.from(message, 'base64')
  const decryptedMessage: Buffer = privateDecrypt(
    {
      key: prvKey.toString(),
      passphrase: '',
    },
    buffer,
  )
  return decryptedMessage.toString('utf8')
}

// generated using keys from keyGen() and
// encrypt() function using actual omdb API key as message arg
const encryptedApiKey: string = 'll4zu3AZaOy7OEr+X1zZliXeUU973cUVKdl5BfheWPVBp/qP1zhmog06I7+eMKUmRJBGOw+52WFFp0NHTI4PPA7GOk4XDjvne0YwYRaDeadcFHqwKQWre1D/zAHr1C5Ugg1JP2DR7zLFJMDfLdu377VJzxFx163LL4/k3WjYqflFLYWioAjkbh5Au6PT994gbzMib4faX4wzc0qkzTrOcTujtc3kyIl9GefIvGHl2/JKGF++pcIpH+ASGhOAAP36ZU6BPkY3ujqBd2lY69mvA7xJ4NroX2ymwRxafVt28gkuUeBtDGjbODil2eQkg18yypcUxytSI40iew/dIB7HHqdra5Db+f1kU9y52od8R5R9cg2xG8DFBQNt31FBVGubV5jHoDadodG2g6WDzpYZUilCM5EEwNpxcHUNyfRDSThusTDcOSobc0Slb+pp4c+lVCOHHYoMoM33pmZwdqBbD+izCKw4jWgdkZmfTSdOuDXDK3x4kcla94JdseMrbsd2fO1yTppHMkqKJ6LbzSyVKh+Bl49cB7/psExcclzMN73cItLeFGrbGjw2aWqQ5hw1jHSkHGAstv0Ylkp09Ep4QNj6eJ7DOHTiWRflWj5KpVkD4O994wHcLstmiBIVJ6Oglwi5jUu3iPqvMlBewAL5gxltIA2XGMw/ZWkLthc0Qlw=';

export { decrypt, encryptedApiKey };
