/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'serif'],
        dino: 'Dino',
        'arial-black': 'Arial Black',
        kanit: 'Kanit'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        'color-1': 'hsl(var(--color-1))',
        'color-2': 'hsl(var(--color-2))',
        'color-3': 'hsl(var(--color-3))',
        'color-4': 'hsl(var(--color-4))',
        'color-5': 'hsl(var(--color-5))'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'collapsible-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-collapsible-content-height)'
          }
        },
        'collapsible-up': {
          from: {
            height: 'var(--radix-collapsible-content-height)'
          },
          to: {
            height: '0'
          }
        },
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-15deg)'
          },
          '50%': {
            transform: 'rotate(15deg)'
          }
        },
        heartBeat: {
          '0%': {
            transform: 'scale(1);'
          },
          '14%': {
            transform: 'scale(1.3);'
          },
          '28%': {
            transform: 'scale(1);'
          },
          '42%': {
            transform: 'scale(1.3);'
          },
          '70%': {
            transform: 'scale(1);'
          }
        },
        flipHorizontal: {
          '50%': {
            transform: 'rotateY(180deg)'
          }
        },
        flipVertical: {
          '50%': {
            transform: 'rotateX(180deg)'
          }
        },
        swing: {
          '20%': {
            transform: 'rotate3d(0, 0, 1, 15deg)'
          },
          '40%': {
            transform: 'rotate3d(0, 0, 1, -10deg)'
          },
          '60%': {
            transform: 'rotate3d(0, 0, 1, 5deg)'
          },
          '80%': {
            transform: 'rotate3d(0, 0, 1, -5deg)'
          },
          to: {
            transform: 'rotate3d(0, 0, 1, 0deg)'
          }
        },
        rubberBand: {
          from: {
            transform: 'scale3d(1, 1, 1)'
          },
          '30%': {
            transform: 'scale3d(1.25, 0.75, 1)'
          },
          '40%': {
            transform: 'scale3d(0.75, 1.25, 1)'
          },
          '50%': {
            transform: 'scale3d(1.15, 0.85, 1)'
          },
          '65%': {
            transform: 'scale3d(0.95, 1.05, 1)'
          },
          '75%': {
            transform: 'scale3d(1.05, 0.95, 1)'
          },
          to: {
            transform: 'scale3d(1, 1, 1)'
          }
        },
        flash: {
          '25%, 40%': {
            opacity: '0'
          },
          '50%': {
            opacity: '1'
          },
          '75%': {
            opacity: '0'
          }
        },
        headShake: {
          '0%': {
            transform: 'translateX(0)'
          },
          '6.5%': {
            transform: 'translateX(-6px) rotateY(-9deg)'
          },
          '18.5%': {
            transform: 'translateX(5px) rotateY(7deg)'
          },
          '31.5%': {
            transform: 'translateX(-3px) rotateY(-5deg)'
          },
          '43.5%': {
            transform: 'translateX(2px) rotateY(3deg)'
          },
          '50%': {
            transform: 'translateX(0)'
          }
        },
        wobble: {
          from: {
            transform: 'translate3d(0, 0, 0)'
          },
          '15%': {
            transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)'
          },
          '30%': {
            transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)'
          },
          '45%': {
            transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)'
          },
          '60%': {
            transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)'
          },
          '75%': {
            transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)'
          },
          to: {
            transform: 'translate3d(0, 0, 0)'
          }
        },
        jello: {
          'from, 11.1%,to': {
            transform: 'translate3d(0, 0, 0)'
          },
          '22.2%': {
            transform: 'skewX(-12.5deg) skewY(-12.5deg)'
          },
          '33.3%': {
            transform: 'skewX(6.25deg) skewY(6.25deg)'
          },
          '44.4%': {
            transform: 'skewX(-3.125deg) skewY(-3.125deg)'
          },
          '55.5%': {
            transform: 'skewX(1.5625deg) skewY(1.5625deg)'
          },
          '66.6%': {
            transform: 'skewX(-0.78125deg) skewY(-0.78125deg)'
          },
          '77.7%': {
            transform: 'skewX(0.390625deg) skewY(0.390625deg)'
          },
          '88.8%': {
            transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)'
          }
        },
        spring: {
          'from, to': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-5%)'
          }
        },
        meteor: {
          '0%': {
            transform: 'rotate(var(--angle)) translateX(0)',
            opacity: '1'
          },
          '70%': {
            opacity: '1'
          },
          '100%': {
            transform: 'rotate(var(--angle)) translateX(-500px)',
            opacity: '0'
          }
        },
        'shimmer-slide': {
          to: {
            transform: 'translate(calc(100cqw - 100%), 0)'
          }
        },
        'spin-around': {
          '0%': {
            transform: 'translateZ(0) rotate(0)'
          },
          '15%, 35%': {
            transform: 'translateZ(0) rotate(90deg)'
          },
          '65%, 85%': {
            transform: 'translateZ(0) rotate(270deg)'
          },
          '100%': {
            transform: 'translateZ(0) rotate(360deg)'
          }
        },
        'aurora-border': {
          '0%, 100%': {
            borderRadius: '37% 29% 27% 27% / 28% 25% 41% 37%'
          },
          '25%': {
            borderRadius: '47% 29% 39% 49% / 61% 19% 66% 26%'
          },
          '50%': {
            borderRadius: '57% 23% 47% 72% / 63% 17% 66% 33%'
          },
          '75%': {
            borderRadius: '28% 49% 29% 100% / 93% 20% 64% 25%'
          }
        },
        'aurora-1': {
          '0%, 100%': {
            top: '0',
            right: '0'
          },
          '50%': {
            top: '50%',
            right: '25%'
          },
          '75%': {
            top: '25%',
            right: '50%'
          }
        },
        'aurora-2': {
          '0%, 100%': {
            top: '0',
            left: '0'
          },
          '60%': {
            top: '75%',
            left: '25%'
          },
          '85%': {
            top: '50%',
            left: '50%'
          }
        },
        'aurora-3': {
          '0%, 100%': {
            bottom: '0',
            left: '0'
          },
          '40%': {
            bottom: '50%',
            left: '25%'
          },
          '65%': {
            bottom: '25%',
            left: '50%'
          }
        },
        'aurora-4': {
          '0%, 100%': {
            bottom: '0',
            right: '0'
          },
          '50%': {
            bottom: '25%',
            right: '40%'
          },
          '90%': {
            bottom: '50%',
            right: '25%'
          }
        }
      },
      animation: {
        'collapsible-down': 'collapsible-down 0.2s ease-out',
        'collapsible-up': 'collapsible-up 0.2s ease-out',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        wiggle: 'wiggle 1s ease-in-out infinite',
        heartBeat: 'heartBeat 1s infinite',
        hflip: 'flipHorizontal 2s infinite',
        vflip: 'flipVertical 2s infinite',
        swing: 'swing 2s ease-out infinite',
        rubberBand: 'rubberBand 1s infinite',
        flash: 'flash 2s infinite',
        headShake: 'headShake 2s infinite',
        wobble: 'wobble 1s infinite',
        jello: 'jello 2s infinite',
        scroll: 'scroll 5s infinite linear',
        spring: 'spring 5s infinite linear',
        meteor: 'meteor 5s linear infinite',
        'shimmer-slide':
          'shimmer-slide var(--speed) ease-in-out infinite alternate',
        'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}
