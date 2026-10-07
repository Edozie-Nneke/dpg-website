import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://dogaripropertygroup.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'Dogari Property Group | Real Estate Advisory & Investment',
    template: '%s | Dogari Property Group',
  },

  description:
    'Dogari Property Group is a premium real estate advisory and investment firm helping buyers, investors, property owners and developers make smarter property decisions across Lagos and Abuja.',

  applicationName: 'Dogari Property Group',

  authors: [
    {
      name: 'Dogari Property Group',
      url: siteUrl,
    },
  ],

  creator: 'Dogari Property Group',
  publisher: 'Dogari Property Group',

  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: siteUrl,
    siteName: 'Dogari Property Group',

    title: 'Dogari Property Group | Real Estate Advisory & Investment',

    description:
      'Trusted real estate advisory, investment opportunities and property services across Lagos and Abuja.',

    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dogari Property Group - Invest Smarter. Own Better.',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Dogari Property Group | Real Estate Advisory & Investment',

    description:
      'Trusted real estate advisory, investment opportunities and property services across Lagos and Abuja.',

    images: ['/og-image.jpg'],
  },

  icons: {
    icon: [
      {
        url: '/favicon.ico',
      },
      {
        url: '/favicon-16x16.png',
        type: 'image/png',
        sizes: '16x16',
      },
      {
        url: '/favicon-32x32.png',
        type: 'image/png',
        sizes: '32x32',
      },
    ],

    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },

  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#0B2D4A',
  colorScheme: 'light',
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',

  name: 'Dogari Property Group',

  url: siteUrl,

  logo: `${siteUrl}/logo.png`,

  description:
    'Dogari Property Group is a real estate advisory and investment company helping clients make smarter property decisions across Lagos and Abuja.',

  slogan: 'Invest Smarter. Own Better.',

  areaServed: [
    {
      '@type': 'City',
      name: 'Lagos',
    },
    {
      '@type': 'City',
      name: 'Abuja',
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang='en-NG'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>

      <body className='w-full min-h-full flex flex-col'>{children}</body>
    </html>
  );
}
