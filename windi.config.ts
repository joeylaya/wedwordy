import { defineConfig } from 'windicss/helpers'
import plugin from "windicss/plugin"

export default defineConfig({
  shortcuts: {
    "header-1": "text-xl sm:text-3xl font-bold leading-tight",
    "header-2": "text-lg sm:text-2xl font-bold leading-tight",
    "header-3": "text-lg sm:text-xl font-semibold leading-tight",
    "header-4": "text-md sm:text-lg font-semibold leading-tight",
    "header-5": "text-sm sm:text-md font-semibold leading-tight",
    "header-6": "text-sm sm:text-sm font-medium leading-tight",
    "h1-skeleton": "h-4.5 mt-1.7 mb-2.15 rounded-md bg-gray-300 sm:(h-7.25 mt-2.5 mb-2.75)",
    "h2-skeleton": "h-3.5 mt-1.25 mb-1.5 rounded-md bg-gray-300 sm:(h-6 mt-2 mb-2.6)",
    "h3-skeleton": "h-3.5 mt-1.25 mb-1.5 rounded-md bg-gray-300 sm:(h-4.5 mt-1.7 mb-2.15)",
    "h4-skeleton": "h-2.75 mt-1 mb-1.25 rounded-md bg-gray-300 sm:(h-3.5 mt-1.25 mb-1.5)",
    "h5-skeleton": "h-2.25 mt-0.85 mb-1 rounded-md bg-gray-300 sm:(h-2.75 mt-1 mb-1.25)",
    "md-skeleton": "h-3.25 mt-1.25 mb-1.5 rounded-md bg-gray-200",
    "sm-skeleton": "h-2.5 mt-1.2 mb-1.25 rounded-md bg-gray-200",
    "xs-skeleton": "h-1.85 mt-0.85 rounded-md bg-gray-200",
    "icon": "rounded-full flex justify-center place-items-center",
    "icon-btn": "w-7 h-7 sm:(w-9 h-9) bg-primary-700 group-active:(bg-primary-300) text-gray-100 text-md",    
    "icon-filter": "w-5 h-5 bg-secondary-500 group-hover:(bg-secondary-700) active:(bg-secondary-300) text-gray-100 text-2xs sm:(w-6 h-6 text-xs) ",
    "icon-selector": "w-7 h-7 sm:(w-9 h-9) text-md",
    "icon-nav": "w-8 h-8 header-4 sm:(w-10 h-10)",
    "icon-add-card": "w-20 h-20 sm:(w-24 h-24) bg-gray-300 group-hover:(bg-secondary-500) group-active:(bg-secondary-300) text-gray-100 text-4xl",
    "btn": "flex flex-none gap-2 justify-start place-items-center",
    "btn-1": "h-10 pl-2 pr-4 rounded-2xl shadow bg-primary-500 text-gray-100 hover:(bg-primary-700) active:(bg-primary-300) header-5 sm:(h-12)",
    "btn-2": "h-10 px-2 text-primary-500 hover:(text-primary-700) active:(text-primary-300) header-5 sm:(h-12)",
    "btn-nav": "w-full rounded-md text-gray-600 header-6 group hover:(bg-primary-300 text-gray-100) sm:(header-5)",
    "btn-filter": "h-8 px-3 rounded-full bg-secondary-500 text-gray-100 text-md hover:(bg-secondary-700) active:(bg-secondary-300)",
    "btn-filter-selected": "h-6 pl-1.5 pr-3 rounded-full bg-secondary-700 text-gray-100 active:(bg-secondary-300) text-sm sm:(h-8 text-md)",
    "btn-selector": "h-10 px-4 rounded-2xl shadow gradient-300 hover:(gradient-500) active:(gradient-100) text-gray-100 header-5 sm:(h-12 text-md)",
    "btn-selector-selected": "h-10 pl-2 pr-4 rounded-2xl shadow bg-gray-100 header-5 gradient-text sm:(h-12 text-md)",
    "gradient-text": "text-transparent gradient-500 bg-clip-text",
    "card": "rounded-2xl shadow flex flex-col sm:(rounded-3xl)",
    "page-header": "h-10 mt-8 flex place-items-center header-1 text-gray-800 sm:(h-15 mt-0)",
    "page": "w-screen mb-18 pl-4 py-4 flex flex-col gap-2 sm:(ml-24 p-16 gap-6)",
    "page-nav-collapsed": "",
    "icon-element": "w-7 h-7 text-md text-gray-500 sm:(w-9 h-9 text-lg)",
    "form-field": "h-10 bg-gray-200 px-4 rounded-lg focus:(outline-secondary-300)",
    "icon-add-card-sm": "w-14 h-14 bg-gray-300 group-hover:(bg-secondary-500) group-active:(bg-secondary-300) text-gray-100 text-2xl sm:(w-18 h-18 text-3xl)",
    "formPage": "flex flex-col gap-6 flex-center",
    "formContainer": "flex flex-col gap-6 flex-center text-center w-full h-full px-4 sm:(px-8)",
    "formButtons": "w-full max-w-200 px-4 fixed bottom-4 flex justify-between sm:(relative px-0)",
    "widget": "w-full overflow-x-scroll flex gap-4 sm:(pl-8 py-8 gap-8 rounded-3xl shadow bg-gray-100)",
    "widget-body": "pt-10 flex gap-4 sm:(flex-wrap pt-16 gap-6)",
    "flex-center": "justify-center place-items-center",
    "modal": "card bg-gray-100 fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-50"
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
