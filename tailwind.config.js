/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'Roboto': ['Roboto', 'sans-serif']
            },
            screens: {
                'sm': '496px',
            },
        },
    },
    corePlugins: {
        preflight: false
    },
    plugins: [],
}

