import type { Config } from 'tailwindcss'

const config: Config = {
   content: [
  './/*.html',  
  './src//*.{js,ts,jsx,tsx,vue}',
],
    theme: {
        colors: {
            footer: "#000000",
            skyblue: "#5E82B8",
            silvergrey: "#737373",
            halfwhite: "#D9D9D9",
            halfyellow:"#D5C960",
            blue: {
                50: "#e8f1f7",
                100: "#c2d6e6",
                200: "#9dacd4",
                300: " #7593c3",
                400: "#4f7ab1",
                500: "#397AD2",
                600: "#5374A0",
                700: "#163a5b",
                800: "#112e4a",
                900: "#0c2035",
            }
            ,
            black: {
                900: "#030303",
                800: "#1C1C1C",
                700: "#353535",
                600: "#4F4F4F",
                500: "#686868",
                400: "#818181",
                300: "#9A9A9A",
                200: "#B3B3B3",
                100: "#CDCDCD",
                50: "#E6E6E6",

            },
            red: "#EA454C",
            white: "#ffffff",
            primary: {
                900: "#B04150",
                800: "#B85462",
                700: "#C06773",
                600: "#C87A85",
                500: "#D08D96",
                400: "#D8A0A8",
                300: "#DFB3B9",
                200: "#E7C6CB",
                100: "#EFD9DC",
                50: "#F7ECEE",
            }, gray: {
                50: '#f5f5f5',
                100: '#e0e0e0',
                200: '#c2c2c2',
                300: '#a3a3a3',
                400: '#858585',
                500: '#666666',
                600: '#4d4d4d',
                700: '#333333',
                800: '#1a1a1a',
                900: '#0d0d0d',
            },
        }
    },
    plugins: [],
}

export default config