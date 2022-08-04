import * as prismic from '@prismicio/client'
import { enableAutoPreviews } from '@prismicio/next'
import { GetServerSideProps, NextApiRequest } from 'next';

export const endpoint = "https://comunidadeignis.prismic.io/api/v2"
export const repositoryName = prismic.getRepositoryName(endpoint);

interface PrismaProps {
  req: NextApiRequest;
  previewData: GetServerSideProps;
}

// Update the Link Resolver to match your project's route structure
export function linkResolver(doc) {
  switch (doc.type) {
    case 'homepage':
      return '/'
    case 'page':
      return `/${doc.uid}`
    default:
      return null
  }
}

interface PrismicResolver {
  [key: string]: any;
}

// This factory function allows smooth preview setup
export function createClient(config: PrismicResolver ) {
  const client = prismic.createClient(endpoint, {
    ...config,
  })

  enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  })

  return client
}
