// app/layout.tsx
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from "@/components/Navigation";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
    metadataBase: new URL('https://www.nextpresidentialelection.us'),
    title: {
        default: 'US Presidential Inauguration 2029 Countdown',
        template: '%s | Inauguration 2029'
    },
    description: 'Countdown to the 2029 US Presidential Inauguration with timeline, events, and historical information',
    keywords: [
        'US Presidential Inauguration',
        'Election 2028',
        'Presidential Transition',
        'Inauguration Countdown'
    ],
    manifest: '/manifest.json',
    icons: {
        icon: [
            { url: '/icon.png', type: 'image/png' },
            { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
            { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
        ],
        apple: [
            { url: '/apple-icon.png', type: 'image/png', sizes: '180x180' },
        ],
    },
    openGraph: {
        title: 'US Presidential Inauguration 2029 Countdown',
        description: 'Track the journey to the next US Presidential Inauguration',
        type: 'website',
        url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nextpresidentialelection.us',
        images: [
            {
                url: '/opengraph-image.png',
                width: 1200,
                height: 630,
                alt: 'Next Presidential Election',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'US Presidential Inauguration 2029 Countdown',
        description: 'Track the journey to the next US Presidential Inauguration'
    },
    robots: {
        index: true,
        follow: true
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Navigation />
        <main className="container mx-auto px-4 py-8">
            {children}
        </main>
        </body>
        </html>
    );
}
