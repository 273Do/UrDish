import CryptoJS from "crypto-js";

// 暗号化に使用する秘密鍵
const secretKey = "ThisIsHashKEY";

// 暗号化の関数
const encryptString = (input: string): string => {
  const encrypted = CryptoJS.AES.encrypt(input, secretKey).toString();
  return encrypted;
};

// 復号化の関数
const decryptString = (input: string): string => {
  const decrypted = CryptoJS.AES.decrypt(input, secretKey).toString(
    CryptoJS.enc.Utf8
  );
  return decrypted;
};

export { encryptString, decryptString };
