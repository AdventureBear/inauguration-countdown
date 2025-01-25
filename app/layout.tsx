// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from "@/components/Navigation";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
    title: 'US Presidential Inauguration 2029 Countdown',
    description: 'Countdown to the 2029 US Presidential Inauguration with timeline, events, and historical information',
    keywords: [
        'US Presidential Inauguration',
        'Election 2028',
        'Presidential Transition',
        'Inauguration Countdown'
    ],
    openGraph: {
        title: 'US Presidential Inauguration 2029 Countdown',
        description: 'Track the journey to the next US Presidential Inauguration',
        type: 'website',
        url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
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
    metadataBase: new URL('https://www.nextpresidentialelection.us'),
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
