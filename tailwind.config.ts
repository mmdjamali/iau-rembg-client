import type { Config } from 'tailwindcss'
import type { Config as DaisyUi } from "daisyui"
import themes from "daisyui/src/theming/themes"

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    logs: false,
    themes: [
      {
        light: {
          ...themes["light"],
          primary: "#0040ff",
          "primary-content": "#fff",
        },
      }
    ]
  } as DaisyUi,
  plugins: [
    require("tailwindcss-animate"),
    require("daisyui")
  ],
} satisfies Config

