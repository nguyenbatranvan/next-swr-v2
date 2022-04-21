module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './layout/*.js,ts,jsx,tsx', './components/**/*.{js,ts,jsx,tsx}',],
    theme: {
        extend: {
            width: {
                '250': '250px'
            },
            margin: {
                '26px': '26px'
            },
            boxShadow: {
                content: '0 0.75rem 1.5rem rgb(18 38 63 / 3%)'
            }, keyframes: {
                morph: {
                    '0%': {
                        'border-radius': '60% 40% 30% 70%/60% 30% 70% 40%'
                    }, '50%': {
                        'border-radius': '30% 60% 70% 40%/50% 60% 30% 60%'
                    }, 'to': {
                        'border-radius': '60% 40% 30% 70%/60% 30% 70% 40%'
                    }
                }, 'fade-in-bottom': {
                    '0%': {
                        '-webkit-transform': 'translateY(50px)', 'transform': 'translateY(50px)', opacity: 0
                    }, '100%': {
                        '-webkit-transform': 'translateY(0)', transform: 'translateY(0)', opacity: 1
                    }
                }
            }
        },


        colors: {
            white: '#fff', black: {
                100: '#999', 200: '#767676', 300: '#333', 400: '#2a3042'
            },
            input:'#f3f3f9',
            base: '#f8f8fb',
            blue: '#556ee6',
            'bs-primary-bg': 'rgba(85, 110, 230, 0.2)'
        },

    },
    plugins: [],
}
