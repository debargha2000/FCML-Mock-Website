import ContactClient from './ContactClient';

export const metadata = {
  title: 'FCML - Contact',
  description: 'FCML India - Contact page'
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact FCML',
    description: 'FCML India - Contact page',
    url: 'https://fcml-mock-website.vercel.app/contact',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactClient />
    </>
  );
}