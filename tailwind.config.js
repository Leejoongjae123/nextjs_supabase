/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        customPink: 'rgb(255, 0, 155)',
      },
      colors: {
        'custom-pink': 'rgb(255, 0, 155)',
      },
      // colors: {
      //   background: "hsl(var(--background))",
      //   foreground: "hsl(var(--foreground))",
      //   btn: {
      //     background: "hsl(var(--btn-background))",
      //     "background-hover": "hsl(var(--btn-background-hover))",
      //   },
      // },
    },
  },
  plugins: [],
};
