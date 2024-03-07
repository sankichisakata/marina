import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // フォントファミリー設定
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    fontSize: {
      xxxs: ["0.65rem", { lineHeight: "1.6", letterSpacing: "0.05em" }],
      xxs: ["0.75rem", { lineHeight: "1.6", letterSpacing: "0.05em" }],
      xs: ["0.8125rem", { lineHeight: "1.6", letterSpacing: "0.05em" }],
      sm: ["0.875rem", { lineHeight: "1.6", letterSpacing: "0.05em" }],
      md: ["1rem", { lineHeight: "1.6", letterSpacing: "0.05em" }],
      lg: ["1.125rem", { lineHeight: "1.6", letterSpacing: "0.05em" }],
      xl: ["1.25rem", { lineHeight: "1.6", letterSpacing: "0.05em" }],
      xxl: ["1.5rem", { lineHeight: "1.6", letterSpacing: "0.05em" }],
      xxxl: ["1.625rem", { lineHeight: "1.6", letterSpacing: "0.05em" }],
      xxxxl: ["2rem", { lineHeight: "1.6", letterSpacing: "0.05em" }],
      xxxxxl: ["2.5rem", { lineHeight: "1.6", letterSpacing: "0.05em" }],
    },

    extend: {
      colors: {
        //↓デフォルトの黒と白
        defwhite: "#FCFCFC",
        /* 少しグレー目のホワイト */
        defblack: "#00120d",
        /*  */

        body: "#4B4B4B" /* 本文用、薄めのブラック */,
        bodystrong: "#1E1E1E" /* 本文用強調用 */,
        primary: "#2D91C8" /* プライマリー　rgb:45, 145, 200; */,
        secondary: "#134878" /* セカンダリー */,
        accent: "#FFB534" /* アクセントカラー */,
        info: "#0174BE" /* 通知用 */,
        success: "#36AE7C" /* 成功系用 */,
        warning: "#FDE767" /* 注意や警告用 */,
        error: "#E21818" /* エラー用 */,

        bordercolor: "#9A9A9B" /* ボーダーカラー */,
        bordercolorstrong: "#4B4B4C" /* ボーダー強調カラー */,

        allowcolor: "" /*  */,
        allowcolorstring: "" /*  */,

        gray: "#C7C8CC" /* グレー */,
        graydark: "#7D7D80" /* 濃いめのグレー */,
        graylight: "#ecf0f2" /* 明るめのグレー */,
      },
      height: {
        "safari-screen": "100dvh",
      },
      borderWidth: {
        "0.5": "0.5px",
      },
      spacing: {
        xxxs: "0.25rem",
        xxs: "0.375rem",
        xs: "0.5rem",
        sm: "0.75rem",
        md: "1rem",
        lg: "2rem",
        xl: "4rem",
        xxl: "6rem",
        xxxl: "8rem",
        xxxxl: "10rem",

        // xxxs: "0.125rem",
        // xxs: "0.25rem",
        // xs: "0.375rem",
        // sm: "0.5rem",
        // md: "0.75rem",
        // lg: "0.875rem",
        // xl: "1rem",
        // xxl: "1.25rem",
        // xxxl: "1.5rem",
        // xxxxl: "1.75rem",
      },
      backgroundImage: {
        //home
        //company
        //service
        //news
      },

      animation: {
        //---開始　　Header開閉アニメーション  ---
        "first-shadow":
          "slide-in-bck-bottom 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.1s  both",
        "slide-in-bck-top":
          "slide-in-bck-top 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.2s  both",
        "end-shadow":
          "slide-out-bck-bottom 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) 0.2s  both",
        "slide-out-bck-top":
          "slide-out-bck-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) 0.1s  both",
        //---終了　　Header開閉アニメーション  ---

        "fade-in-bottom":
          "fade-in-bottom 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.15s  both",
        "fade-in-bottom-1":
          "fade-in-bottom 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.3s  both",
        "fade-in-bottom-2":
          "fade-in-bottom 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.4s  both",
        "fade-in-bottom-3":
          "fade-in-bottom 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.5s  both",
        "fade-in-bottom-4":
          "fade-in-bottom 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.6s  both",
        "fade-in-bottom-5":
          "fade-in-bottom 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.7s  both",
        "fade-in-bottom-6":
          "fade-in-bottom 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.8s  both",

        "fade-out-top":
          "fade-out-top 0.1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.1s  both",
        "fade-out-top-1":
          "fade-out-top 0.1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.2s  both",
        "fade-out-top-2":
          "fade-out-top 0.1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.3s  both",
        "fade-out-top-3":
          "fade-out-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.4s  both",
        "fade-out-top-4":
          "fade-out-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s  both",
        "fade-out-top-5":
          "fade-out-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.6s  both",
        "fade-out-top-6":
          "fade-out-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.7s  both",
        "fade-out-top-7":
          "fade-out-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.8s  both",
      },

      keyframes: {
        //---開始　　Header開閉アニメーション  ---
        "slide-in-bck-top": {
          "0%": {
            transform: "translateZ(700px) translateY(-300px)",
            opacity: "0",
          },
          "20%": {
            transform: "translateZ(600) translateY(-200px)",
            opacity: "1",
          },
          "40%": {
            transform: "translateZ(400) translateY(-100)",
            opacity: "1",
          },
          "80%": {
            transform: "translateZ(300) translateY(-50)",
            opacity: "1",
          },
          "100%": {
            transform: "translateZ(0) translateY(0)",
            opacity: "1",
          },
        },
        // first-draw
        "slide-in-bck-bottom": {
          "0%": {
            transform: "translateZ(700px) translateY(300px)",
            opacity: "0",
          },
          to: {
            transform: "translateZ(0) translateY(0)",
            opacity: "1",
          },
        },

        "slide-out-bck-top": {
          "0%": {
            transform: " translateY(0)",
            opacity: "1",
          },

          "10%": {
            transform: " translateY(5)",
            opacity: "1",
          },
          "20%": {
            transform: " translateY(10)",
            opacity: "1",
          },
          "30%": {
            transform: " translateY(0)",
            opacity: "1",
          },
          "40%": {
            transform: " translateY(-300)",
            opacity: "1",
          },
          "80%": {
            transform: " translateY(-500)",
            opacity: "1",
          },
          "100%": {
            transform: " translateY(-1000px)",
            opacity: "0",
          },
        },
        // end-draw
        "slide-out-bck-bottom": {
          "0%": {
            transform: "translateZ(0) translateY(0)",
            opacity: "1",
          },
          "10%": {
            transform: "translateZ(100) translateY(-50)",
            opacity: "1",
          },
          "20%": {
            transform: "translateZ(200) translateY(-100)",
            opacity: "1",
          },
          "30%": {
            transform: "translateZ(300) translateY(-200)",
            opacity: "1",
          },
          "40%": {
            transform: "translateZ(400) translateY(-300)",
            opacity: "1",
          },
          "50%": {
            transform: "translateZ(500) translateY(-500)",
            opacity: "1",
          },
          "60%": {
            transform: "translateZ(600) translateY(-600)",
            opacity: "0.4",
          },
          "70%": {
            transform: "translateZ(700) translateY(-700)",
            opacity: "0.3",
          },
          "80%": {
            transform: "translateZ(800) translateY(-800)",
            opacity: "0.2",
          },
          "90%": {
            transform: "translateZ(900) translateY(-900)",
            opacity: "0.1",
          },
          "100%": {
            transform: "translateZ(1000px) translateY(1000px)",
            opacity: "0",
          },
        },
        //---終了　　Header開閉アニメーション  ---

        "fade-in-bottom": {
          "0%": {
            transform: "translateY(5px)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0)",
            opacity: "1",
          },
        },

        "fade-out-top": {
          "0%": {
            transform: "translateY(0)",
            opacity: "1",
          },
          to: {
            transform: "translateY(-5px)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
