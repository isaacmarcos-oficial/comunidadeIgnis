import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      // '100': '#EDF2F7',
      // "300": '#A0AEC0',
      // "500": '',
      // "700": '#1A202C',
      // "850": '#777',

      '100': '#E1E1E6',
      '300': '#858599',
      '500': '#454545',
      '600': '#323238',
      '800': '#202024',
      '850': '#171923',
      '900': '#121214'
    },

    yellow: {
      '500': '#FFC632',
      '700': '#B78221',
      '800': '#996a11'
    }
  },

  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.800',

        a: {
          _hover:{ textDecoration: "none" }
          
        },

        variant: {
          checkbox: "yellow.500",
          gold:"yellow.700"
        }
      }
    }
  }
})