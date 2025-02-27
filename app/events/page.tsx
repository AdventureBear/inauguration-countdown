// app/events/page.tsx
// import Link from 'next/link';
import Events from "@/components/Events";


export const metadata = {
    title: 'Election 2028 Timeline',
    description: 'Key events and dates for the 2028 US Presidential Election'
};

export default function EventsPage() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Election 2028 Timeline</h1>
            <div className="space-y-4">
               <Events />
            </div>
        </div>
    );
}