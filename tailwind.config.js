/** @type {import('tailwindcss').Config} */
export default {
content: [
'./index.html',
'./src/**/*.{js,jsx,ts,tsx}',
],
theme: {
extend: {
fontFamily: {
sans: ["Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
},
colors: {
bg: {
DEFAULT: '#0b0f17',
soft: '#101623',
},
brand: {
50: '#eef2ff',
100: '#e0e7ff',
500: '#6366f1',
600: '#4f46e5',
700: '#4338ca'
},
},
boxShadow: {
glow: '0 0 0 1px rgba(99,102,241,0.25), 0 10px 40px -10px rgba(99,102,241,0.45)'
}
},
},
plugins: [],
}