import ShopClient from './ShopClient';

export const metadata = {
  title: 'FCML - Shop',
  description: 'FCML India - Shop page'
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'FCML Shop',
    description: 'FCML India - Shop page',
    url: 'https://fcml-mock-website.vercel.app/shop',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ShopClient />
    </>
  );
}