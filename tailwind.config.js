/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "twitter-blue": " #1da1f2",
        "twitter-black": " #14171a",
        "twitter-dark-gray": " #657786",
        "twitter-lght-gray": " #aab8c2",
        "twitter-extra-lght-gray": " #e1e8ed",
        "twitter-background": " #15202b",
      },
    },
  },
  plugins: [],
};
