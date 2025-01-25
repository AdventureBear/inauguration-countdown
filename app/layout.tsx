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
    description: 'Countdown to the end of Trump\'s second term with days remaining until the 2029 US Presidential Inauguration',
    keywords: [
        'End of Trump\'s second term',
        'US Presidential Inauguration',
        'Election 2028',
        'Presidential Transition',
        'Inauguration Countdown'
    ],
    openGraph: {
        title: 'Next Presidential Election Countdown',
        description: 'Track the countdown to the next US Presidential Inauguration in 2029',
        url: 'https://www.nextpresidentialelection.us',
        siteName: 'Next Presidential Election',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Next Presidential Election Countdown',
        description: 'Track the countdown to the next US Presidential Inauguration in 2029',
    },
    robots: {
        index: true,
        follow: true,
    },
    manifest: '/manifest.json'
};

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
