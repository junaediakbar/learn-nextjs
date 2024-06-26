'use client';
import Head from 'next/head';
import { usePathname } from 'next/navigation';

export default function Seo(props: any) {
  const asPath = usePathname();
  const meta = {
    title: 'Campuspedia Academy',
    description: 'Campuspedia academy tugas APSI B09 2021',
    image: 'https://theodorusclarence.com/favicon/large-og.jpg',
    type: 'website',
    robots: 'follow, index',
    ...props,
  };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='robots' content={meta.robots} />
      <meta content={meta.description} name='description' />
      <meta
        property='og:url'
        content={`https://theodorusclarence.com${asPath}`}
      />
      <link rel='canonical' href={`https://theodorusclarence.com${asPath}`} />
      {/* Open Graph */}
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content='Theodorus Clarence' />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta name='image' property='og:image' content={meta.image} />
      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@th_clarence' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />
      {meta.date && (
        <>
          <meta property='article:published_time' content={meta.date} />
          <meta
            name='publish_date'
            property='og:publish_date'
            content={meta.date}
          />
          <meta
            name='author'
            property='article:author'
            content='Theodorus Clarence'
          />
        </>
      )}
    </Head>
  );
}
