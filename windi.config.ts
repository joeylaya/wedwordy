import { defineConfig } from 'windicss/helpers'
import plugin from "windicss/plugin"

export default defineConfig({
  shortcuts: {
    "header-1": "text-xl sm:text-3xl font-bold leading-tight",
    "header-2": "text-lg sm:text-2xl font-bold leading-tight",
    "header-3": "text-lg sm:text-xl font-semibold leading-tight",
    "header-4": "text-md sm:text-lg font-semibold leading-tight",
    "header-5": "text-sm sm:text-md font-semibold leading-tight",
    "icon": "rounded-full flex justify-center place-items-center",
    "icon-btn": "w-7 h-7 sm:(w-9 h-9) bg-primary-700 group-active:(bg-primary-300) text-gray-100 text-md",    
    "icon-filter": "w-4 h-4 bg-secondary-500 group-hover:(bg-secondary-700) active:(bg-secondary-300) text-gray-100 text-2xs sm:(w-6 h-6 text-xs) ",
    "icon-selector": "w-7 h-7 sm:(w-9 h-9) text-secondary-300 text-md",
    "icon-nav": "w-12 h-12 hover:(bg-primary-700) active:(bg-primary-300) text-gray-100 text-xl",
    "icon-card-add": "w-20 h-20 sm:(w-24 h-24) bg-gray-300 group-hover:(bg-secondary-500) group-active:(bg-secondary-300) text-gray-100 text-4xl",
    "btn": "flex flex-none gap-2 justify-center place-items-center",
    "btn-1": "h-10 pl-2 pr-4 rounded-2xl shadow bg-primary-500 text-gray-100 hover:(bg-primary-700) active:(bg-primary-300) header-5 sm:(h-12)",
    "btn-2": "h-10 px-2 text-primary-500 hover:(text-primary-700) active:(text-primary-300) header-5 sm:(h-12)",
    "btn-filter": "h-6 px-3 rounded-full bg-secondary-500 text-gray-100 hover:(bg-secondary-700) active:(bg-secondary-300) text-sm sm:(h-8 text-md)",
    "btn-filter-selected": "h-6 pl-1.5 pr-3 rounded-full bg-secondary-700 text-gray-100 active:(bg-secondary-300) text-sm sm:(h-8 text-md)",
    "btn-selector": "h-10 px-4 rounded-2xl shadow gradient-300 hover:(gradient-500) active:(gradient-100) text-gray-100 header-5 sm:(h-12 text-md)",
    "btn-selector-selected": "h-10 pl-2 pr-4 rounded-2xl shadow bg-gray-100 header-5 sm:(h-12 text-md)",
    "gradient-text": "text-transparent gradient-500 bg-clip-text",
    "card": "rounded-3xl shadow flex flex-col",
    "page-header": "h-10 flex place-items-center header-1 text-gray-800 sm:(h-15)",
    "card-script-skeleton": "",
    "card-ceremony": "",
    "card-ceremony-add": "",
    "card-ceremony-skeleton": "",
    "card-editor": "",
    "card-editor-add": "",
    "card-editor-skeleton": "",
    "card-choice": "",
    "card-choice-add": "",
    "card-choice-skeleton": "",
  },
  theme: {
    extend: {
      colors: {
        "primary": {
          100: "hsla(20, 50%, 90%, 1)",
          300: "hsla(20, 50%, 70%, 1)",
          500: "hsla(20, 50%, 60%, 1)",
          700: "hsla(20, 50%, 45%, 1)"
        },
        "secondary": {
          100: "hsla(350, 50%, 90%, 1)",
          300: "hsla(350, 50%, 70%, 1)",
          500: "hsla(350, 50%, 60%, 1)",
          700: "hsla(350, 50%, 45%, 1)"
        },
        "gray": {
          100: "hsla(340, 4%, 99%, 1)",
          200: "hsla(340, 4%, 95%, 1)",
          300: "hsla(340, 4%, 85%, 1)",
          400: "hsla(340, 4%, 70%, 1)",
          500: "hsla(340, 4%, 60%, 1)",
          600: "hsla(340, 4%, 45%, 1)",
          700: "hsla(340, 4%, 30%, 1)",
          800: "hsla(340, 4%, 15%, 1)"
        },
        DEFAULT: "hsla(340, 4%, 15%, 1)"
      },
      fontFamily: {
        body: ['Poppins', 'Impact', 'sans-serif']
      },
      fontSize: {
        "4xl": "3rem",
        "3xl": "2.5rem",
        "2xl": "2.125rem",
        "xl": "1.625rem",
        "lg": "1.25rem",
        "md": "1rem",
        "sm": "0.825rem",
        "xs": "0.625rem",
        "2xs": "0.5rem"
      },
      boxShadow: {
        "DEFAULT": "0 0px 48px 4px rgba(40, 37, 38, 0.1)"
      }
    }
  },
  plugins: [
    plugin(({ addComponents }) => {
      const gradients = {
        ".gradient-100": {
          "background-color":"hsla(350,50%,70%,1)",
          "background-image":
            "radial-gradient(at 71% 64%, hsla(19,50%,70%,0.28) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(19,50%,70%,0.38) 0px, transparent 50%), radial-gradient(at 85% 0%, hsla(19,50%,70%,0.32) 0px, transparent 50%), radial-gradient(at 20% 58%, hsla(19,50%,70%,0.46) 0px, transparent 50%), radial-gradient(at 56% 22%, hsla(19,50%,70%,0.51) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(19,50%,70%,0.89) 0px, transparent 50%)"
        },
        ".gradient-300": {
          "background-color":"hsla(350,50%,60%,1)",
          "background-image":
            "radial-gradient(at 71% 64%, hsla(19,50%,60%,0.28) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(19,50%,60%,0.38) 0px, transparent 50%), radial-gradient(at 85% 0%, hsla(19,50%,60%,0.32) 0px, transparent 50%), radial-gradient(at 20% 58%, hsla(19,50%,60%,0.46) 0px, transparent 50%), radial-gradient(at 56% 22%, hsla(19,50%,60%,0.51) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(19,50%,60%,0.89) 0px, transparent 50%)"
        },
        ".gradient-500": {
          "background-color":"hsla(350,50%,50%,1)",
          "background-image":
            "radial-gradient(at 71% 64%, hsla(19,50%,50%,0.28) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(19,50%,50%,0.38) 0px, transparent 50%), radial-gradient(at 85% 0%, hsla(19,50%,50%,0.32) 0px, transparent 50%), radial-gradient(at 20% 58%, hsla(19,50%,50%,0.46) 0px, transparent 50%), radial-gradient(at 56% 22%, hsla(19,50%,50%,0.51) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(19,50%,50%,0.89) 0px, transparent 50%)"
        },
      }
      addComponents(gradients)
    })
  ]
})
