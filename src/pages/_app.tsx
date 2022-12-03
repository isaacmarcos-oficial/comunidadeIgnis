import { AppProps } from 'next/app'
import { PrismicProvider } from '@prismicio/react';

import { ChakraProvider } from '@chakra-ui/react'
import { linkResolver, repositoryName } from '../services/prismic';
import { Link } from '@chakra-ui/react';
import { PrismicPreview } from '@prismicio/next';

import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={({ href, children, ...props }) => (
          <Link href={href}>
            <a {...props}>
              {children}
            </a>
          </Link>
        )}
      >
        <PrismicPreview repositoryName={repositoryName} >
          <Component {...pageProps} />
        </PrismicPreview>
      </PrismicProvider>
    </ChakraProvider>
  )
}

export default MyApp