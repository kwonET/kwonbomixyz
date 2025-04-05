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
        gothic2: ["GothicA1-Bold"],
        notosans: ["Noto Sans KR"],
        pretendard: ["Pretendard"],
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
        white: "#FFFFFF",
        black: "#000000",

        bg: {
          light: "#F8F9FA",
          DEFAULT: "#E9ECEF",
          dark: "#DEE2E6",
          gray: {
            light: "#F8F9FA",
            DEFAULT: "#E9ECEF",
            dark: "#DEE2E6",
          },
        },

        primary: {
          light: "#7DFFDA",
          DEFAULT: "#00FFC2",
          dark: "#00C298",
        },
        secondary: {
          light: "#FF7F7F",
          DEFAULT: "#008B8B",
          dark: "#006666",
        },
        font: {
          light: "#6C757D",
          DEFAULT: "#495057",
          dark: "#343A40",
          gray: {
            light: "#CED4DA",
            DEFAULT: "#ADB5BD",
            dark: "#6C757D",
          },
        },

        blue: {
          light: "#D1ECF1",
          DEFAULT: "#17A2B8",
          dark: "#138496",
        },

        border: "#CED4DA",
        gray: "#ADB5BD",
        success: "#28A745",
        warning: "#FFC107",
        danger: "#DC3545",
        link: "#0056B3",
      },
      height: {
        lvh: "101lvh",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
