/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    "bg-green-500", "bg-blue-500", "bg-red-500", "bg-sky-500",
    "bg-orange-500", "bg-cyan-500", "bg-purple-500", "bg-emerald-500",
    "bg-indigo-500", "bg-yellow-500", "bg-pink-500", "bg-lime-500",
    "bg-violet-500", "bg-teal-500", "bg-rose-500", "bg-fuchsia-500",
  ],
  theme: { extend: {} },
  plugins: [],
};

