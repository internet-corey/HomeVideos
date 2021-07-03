const crypto = require('crypto')
const path = require('path')
const fs = require('fs')

const decrypt = (toDecrypt, privateKeyPath) => {
  const absolutePath = path.resolve(privateKeyPath)
  const privateKey = fs.readFileSync(absolutePath, 'utf8')
  const buffer = Buffer.from(toDecrypt, 'base64')
  const decrypted = crypto.privateDecrypt(
    {
      key: privateKey.toString(),
      passphrase: '',
    },
    buffer,
  )
  return decrypted.toString('utf8')
};

const encryptedApiKey = 'gZl7J5WGU4vw6ewKoLRNHCnrSZP99Y73pfjzouQX7R5xUbbE4QlTiB9EDCuBp/Fp5wDrlQsgOX6jzIKwwd/pU95fK1TANWO+ST4iX7xbPzUEPeZuxp3z46S5sC5nFMp7wST0r5aBPZuw2mG7pH/MRCtS0mMmfD/9uHxL0VP5SZNjYmn/QSe3lEwSDST1xcDtv8v0H1frwAW0su/3hrN8x6T4s5/BepHh46OwIHpr0iH80lttJnIUWJ3B2sQlMBUh8BSQqnjcpaEQGttEhq2ZhBth1UGKITXNOJh3R07+aRWDV/UWoIyKQwY6sgehDffItAl2VtlsDpu/7OKYgEaUtaaE8vsqAwUV9HcnOKWu/nKsLsukiRn4mND13484GcAk/HiDdF9QWkQJXoiLM3HBH5AkLs6isz5IIu/1zZlEELS+4X+pjzWIE/2fuF1RCdYWy5RwGVs8rMnKTfw4TqNzsH8dwjaaiH9GVCluTBwlmCN/4Ca8lUPXREQ4FpSU5hz35n4JEwFZ5+6lBOiwpQRLG+v5E8+Cs0kRwk3G1axCJPekWTPfmEJNE6FwILmYwpl+STFfob3GKW4FtKwDjO4jhQZ4MjBPC4nHPOOEJ6HwRpV9/K6cFh0KCDbNmjud/ZgaEEsNfj2RCAYuyVMvv7lS3AWtfn/bCFWYg7zeDj1mzmo='

module.exports = { decrypt, encryptedApiKey };
