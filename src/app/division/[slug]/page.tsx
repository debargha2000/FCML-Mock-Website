import DivisionClient from './DivisionClient';
import { DIVISIONS } from '../../../data/site';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const div = DIVISIONS.find(d => d.slug === resolvedParams.slug);
  if (!div) return { title: 'Not Found' };
  return {
    title: `FCML - ${div.name}`,
    description: `Explore FCML's luxury ${div.name} collection.`,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const div = DIVISIONS.find(d => d.slug === resolvedParams.slug);

  if (!div) {
    return <div>Not Found</div>;
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `FCML - ${div.name}`,
    description: `Explore FCML's luxury ${div.name} collection.`,
    url: `https://fcml-mock-website.vercel.app/division/${div.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DivisionClient slug={resolvedParams.slug} />
    </>
  );
}