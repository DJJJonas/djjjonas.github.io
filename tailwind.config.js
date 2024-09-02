/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  "extend": {
    "fontFamily": {
      "sans": [
        "var(--font-sans)",
        "sans-serif"
      ]
    },
    "colors": {
      "background": "#F0F0F0",
      "foreground": "#000000",
      "neutral": {
        "50": "#fafafa",
        "100": "#f4f4f4",
        "200": "#e6e6e6",
        "300": "#d4d4d4",
        "400": "#a2a2a2",
        "500": "#727272",
        "600": "#535353",
        "700": "#404040",
        "800": "#272727",
        "900": "#181818"
      },
      "brand": {
        "50": "#fafaf9",
        "100": "#dcdcdb",
        "200": "#bab8b7",
        "300": "#9b9795",
        "400": "#6e6662",
        "500": "#473d38",
        "600": "#2c2620",
        "700": "#1e1712",
        "800": "#0d0807",
        "900": "#060302"
      },
      "highlight": {
        "50": "#fafafa",
        "100": "#f3f3f3",
        "200": "#e2e2e2",
        "300": "#d0d0d0",
        "400": "#9f9f9f",
        "500": "#6f6f6f",
        "600": "#4f4f4f",
        "700": "#3d3d3d",
        "800": "#232323",
        "900": "#151515"
      }
    },
    "borderRadius": {
      "sm": "0.0833rem",
      "default": "0.1667rem",
      "md": "0.25rem",
      "lg": "0.5rem",
      "xl": "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem"
    },
    "keyframes": {
      "accordion-down": {
        "from": {
          "height": "0"
        },
        "to": {
          "height": "var(--radix-accordion-content-height)"
        }
      },
      "accordion-up": {
        "from": {
          "height": "var(--radix-accordion-content-height)"
        },
        "to": {
          "height": "0"
        }
      }
    },
    "animation": {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out"
    }
  }
},  
  plugins: [require("tailwindcss-animate")],
};