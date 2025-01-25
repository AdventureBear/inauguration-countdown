// app/layout.tsx
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from "@/components/Navigation";
import Footer from '@/components/Footer'

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
            {
                url: '/icon.png',
                sizes: '32x32',
                type: 'image/png',
            },
            {
                url: '/icon-192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                url: '/icon-512.png',
                sizes: '512x512',
                type: 'image/png',
            }
        ],
        apple: [
            {
                url: '/apple-icon.png',
                sizes: '180x180',
                type: 'image/png',
            }
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

export async function generateImageMetadata() {
    return [
        {
            contentType: 'image/png',
            size: { width: 192, height: 192 },
            id: 'icon-192',
        },
        {
            contentType: 'image/png',
            size: { width: 512, height: 512 },
            id: 'icon-512',
        },
        {
            contentType: 'image/png',
            size: { width: 32, height: 32 },
            id: 'icon',
        },
        {
            contentType: 'image/png',
            size: { width: 180, height: 180 },
            id: 'apple-icon',
        },
    ]
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} min-h-screen flex flex-col`}>
                <main className="flex-grow">
                    <Navigation />
                    <main className="container mx-auto px-4 py-8">
                        {children}
                    </main>
                </main>
                <Footer />
            </body>
        </html>
    );
}
