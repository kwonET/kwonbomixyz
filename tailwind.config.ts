import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "601px",
      md: "811px",
      lg: "1201px",
      xl: "1440px",
    },
    extend: {
      fontSize: {
        // 모바일 (600px 이하)
        h1: ["1.875rem", { lineHeight: "1.75", fontWeight: "600" }], // 30px
        h2: ["1.625rem", { lineHeight: "1.75", fontWeight: "600" }], // 26px
        h3: ["1.25rem", { lineHeight: "1.75", fontWeight: "600" }], // 20px
        h4: ["1.125rem", { lineHeight: "1.75", fontWeight: "600" }], // 18px
        body: ["1rem", { lineHeight: "1.75", fontWeight: "400" }], // 16px
        small: ["0.875rem", { lineHeight: "1.75", fontWeight: "400" }], // 14px

        // 태블릿 (601px - 1023px)
        "h1-md": ["2.5rem", { lineHeight: "1.4", fontWeight: "600" }], // 40px
        "h2-md": ["2rem", { lineHeight: "1.4", fontWeight: "600" }], // 32px
        "h3-md": ["1.5rem", { lineHeight: "1.4", fontWeight: "600" }], // 24px
        "h4-md": ["1.125rem", { lineHeight: "1.4", fontWeight: "600" }], // 18px
        "body-md": ["1rem", { lineHeight: "1.75", fontWeight: "400" }], // 16px
        "small-md": ["0.875rem", { lineHeight: "1.4", fontWeight: "400" }], // 14px

        // 데스크톱 (1024px 이상)
        "h1-lg": ["3rem", { lineHeight: "1.4", fontWeight: "600" }], // 48px
        "h2-lg": ["2.25rem", { lineHeight: "1.4", fontWeight: "600" }], // 36px
        "h3-lg": ["1.5rem", { lineHeight: "1.4", fontWeight: "600" }], // 24px
        "h4-lg": ["1.125rem", { lineHeight: "1.4", fontWeight: "600" }], // 18px
        "body-lg": ["1rem", { lineHeight: "1.75", fontWeight: "400" }], // 16px
        "small-lg": ["0.75rem", { lineHeight: "1.4", fontWeight: "400" }], // 12px
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
