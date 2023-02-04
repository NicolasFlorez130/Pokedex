/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            'poppins-bold': 'Poppins-Bold',
            'poppins-black': 'Poppins-Black',
            'poppins-medium': 'Poppins-Medium',
            'poppins-light': 'Poppins-Light'
         },
         colors: {
            'wip-page-bg': '#F5F5F5'
         }
      },
   },
   plugins: [],
}
