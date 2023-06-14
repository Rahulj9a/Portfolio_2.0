/** @type {import('tailwindcss').Config} */
 
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'spin-slow': 'spin 60s linear infinite',
        'ping-slow':'ping 20s linear infinite'
      },
      boxShadow:{
        
           
          'circle-shadow': '0 0 40px rgba(0, 0, 0, 0.5)',
          'circle-shadowSmall': '0 0 10px rgba(0, 0, 0, 0.5)',
         
      },
      colors:{
        "custom1":"#000000",
        'custom2':"#282A3A",
        "custom3":"#735F32",
        "custom4":"#C69749"
      }
    },
  },
  plugins: [],
}
/*
colors op1 - #884A39, #C38154, #FFC26F, #F9E0BB
colors op2-  #000000, #282A3A, #735F32, #C69749
colors op3- 
 */