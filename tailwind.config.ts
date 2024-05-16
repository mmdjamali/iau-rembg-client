import type { Config } from 'tailwindcss'
import type { Config as DaisyUi } from "daisyui"

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    logs: false
  } as DaisyUi,
  plugins: [
    require("daisyui")
  ],
} satisfies Config

