import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme ({
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.800',

        variant: {
          checkbox: "#FFC632"
        }
      }
    }
  }
})