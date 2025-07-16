import { Metadata } from "next";
// export function buildMetadata(title: string): Metadata {
//     return {
//       title: `${title} | ${process.env.APP_NAME}`,
//       description: process.env.Description_APP,
//     };
//   }


export function buildMetadata(title: string): Metadata {
  const appName = process.env.APP_NAME || 'Brownyrollz CDN';
  const description = process.env.Description_APP || 'Notting CDN App';
  const fullTitle = `${title} | ${appName}`;

  return {
    title: fullTitle,
    description: description,
    keywords: ['cdn', 'cloud', 'shorturl', 'sharelink','Brownyrollz','Kittisak Udomsri'],
    authors: [{ name: 'Brownyrollz Bamz Kittisak Udomsri', url: 'https://brownyrollz.in.th' }],
    creator: 'Bamz Kittisak Udomsri',
    publisher: 'Brownyrollz',
    robots: {
      index: true,
      follow: true,
      nocache: false,
    },
    themeColor: '#ffffff',
    openGraph: {
      title: fullTitle,
      description: description,
      url: 'https://riko.brownyrollz.in.th',
      siteName: appName,
      images: [
        {
          url: 'https://riko.brownyrollz.com/og-image/og-image.jpg',
          width: 1200,
          height: 630,
          alt: appName,
        },
      ],
      locale: 'th_TH',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: description,
      creator: '@brownyrollz',
      images: ['https://riko.brownyrollz.in.th/og-image/twitter-image.jpg'],
    },
    metadataBase: new URL('https://riko.brownyrollz.in.th'),
    alternates: {
      canonical: '/',
    },
  };
}
