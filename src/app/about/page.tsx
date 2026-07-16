import AboutClient from './AboutClient';

export const metadata = {
  title: 'FCML - About',
  description: 'FCML India - About page'
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About FCML',
    description: 'FCML India - About page',
    url: 'https://fcml-mock-website.vercel.app/about',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutClient />
    </>
  );
}