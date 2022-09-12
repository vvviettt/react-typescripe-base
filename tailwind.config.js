/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'auth-pattern':
                    'linear-gradient(to left top, #e5e6d7, #dde6db, #d9e6e0, #d8e4e3, #d9e2e4, #d9e2e4, #d9e2e4, #d9e2e4, #d8e4e3, #d9e6e0, #dde6db, #e5e6d7);',
            },
            boxShadow: {
                'auth-shadow': '0 2px 6px rgba(0,0,0,.2);',
            },
            colors: {
                default: '#1b1b1b',
            },
        },
    },
    plugins: [],
};
