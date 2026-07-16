import HomeClient from './HomeClient';

export const metadata = {
  title: 'FCML - Home',
  description: 'FCML India - Home page'
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'FCML India',
    url: 'https://fcml-mock-website.vercel.app',
    logo: 'https://fcml-mock-website.vercel.app/logo.png',
    description: 'FCML India - Home page'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}