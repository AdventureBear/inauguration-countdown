
// app/events/[slug]/page.tsx
import events from '../../../data/events.json';
import { notFound } from 'next/navigation';
import {slugify} from "@/utils/slugify";
import Countdown from "@/components/Countdown";

interface Props {
    params: Promise<{ slug: string }>;
}


export async function generateMetadata({ params }: Props) {
    const { slug } = await params;

    const event = events.events.find(e => slugify(e.title) === slug);

    if (!event) return { title: 'Event Not Found' };

    return {
        title: `${event.title} - Countdown and Details`,
        description: event.description,
        openGraph: {
            title: event.title,
            description: event.description,
            url: `https://nextpresidentialelection.us/events/${slug}`,
            type: 'article',
            images: [
                {
                    url: `https://nextpresidentialelection.us/images/events/${slug}.jpg`,
                    width: 1200,
                    height: 630,
                    alt: event.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: event.title,
            description: event.description,
            images: [`https://nextpresidentialelection.us/images/events/${slug}.jpg`],
        },
        alternates: {
            canonical: `https://nextpresidentialelection.us/events/${slug}`,
        },
    };
}


export default async function EventDetailPage({ params }: Props) {
    const { slug } = await params;
    const event = events.events.find(e => slugify(e.title) === slug);

    if (!event) return notFound();

    return (
        <>
            <div className="container flex flex-col justify-center mx-auto px-4 py-8 leading-6">
                <h1 className="text-center text-3xl font-bold mb-4">Countdown to the {event.title}</h1>
                <p className="text-center text-xl mb-8">
                    {event.exact ? event.date : `Around ${new Date(event.date).toLocaleDateString()}, exact date not yet set`}
                </p>
                <Countdown  eventDate={event.date} />
                <div className="prose prose-blue dark:prose-invert max-w-none mt-8 leading-8" dangerouslySetInnerHTML={{ __html: event.description }} />
            </div>

        </>
    );
}
