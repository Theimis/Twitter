import CryptoJS from "crypto-js";

export const getAvatar = (email) => {
  const hash = CryptoJS.MD5(email.trim().toLowerCase());
  return `https://www.gravatar.com/avatar/${hash}?s=40&d=identicon`;
};

export const getRadomImage = () => {
  return `https://picsum.photos/600/400?random=1${Math.random()}`;
};
