import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            p: {
              marginTop: "1.5em",
              marginBottom: "1.5em",
            },
            img: {
              marginTop: "2em",
              marginBottom: "2em",
            },
            h2: {
              marginTop: "2em",
              marginBottom: "1em",
            },
            h3: {
              marginTop: "1.5em",
              marginBottom: "0.75em",
            },
          },
        },
      },
      fontFamily: {
        gothic1: ["GothicA1-Light"],
        notosans: ["Noto Sans KR"],
      },
      containerHeight: {
        "home-height": "136px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "my-gray": "#EAEAEA",
        "my-lightblue": "#D0E6F8",
        "my-blue": "#D0E6F8",
        // 'my-highlight':'#01D7E4',
        "my-highlight": "#00FFC2",
      },
      height: {
        lvh: "101lvh",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
