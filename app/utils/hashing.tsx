import CryptoJS from "crypto-js";

// 秘密鍵に使用する文字列
const str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

// 暗号化の関数
const encryptString = (input: string): string => {
  let secret_key = "";
  // 秘密鍵を生成
  [...Array(10)].forEach(
    () => (secret_key += str[~~(Math.random() * str.length)])
  );
  // 暗号化の処理
  const encrypted = CryptoJS.AES.encrypt(input, secret_key).toString();
  return secret_key + encrypted;
};

// 復号化の関数
const decryptString = (input: string): string => {
  // 入力された文字列を暗号文と秘密鍵に分割
  const hash_character = {
    cipher: input.substring(10, input.length),
    key: input.substring(0, 10),
  };
  // 復号化の処理
  const decrypted = CryptoJS.AES.decrypt(
    hash_character.cipher,
    hash_character.key
  ).toString(CryptoJS.enc.Utf8);
  console.log([input.substring(10, input.length), input.substring(0, 10)]);
  return decrypted;
};

export { encryptString, decryptString };
