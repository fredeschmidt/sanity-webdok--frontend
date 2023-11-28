import sanityClient from '@sanity/client';

export default ({ app }, inject) => {
  const client = sanityClient({
    projectId: '8pwnpbac',
    dataset: 'production',
    useCdn: true,
  });

  // Gør sanity klienten tilgængelig i hele applikationen
  inject('sanity', client);
};