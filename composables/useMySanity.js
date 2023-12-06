import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: '8pwnpbac', // Dit projekt ID
  dataset: 'production', // Dit dataset
  useCdn: true,
});

export const useMySanity = () => {
  return client;
};