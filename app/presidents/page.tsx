// app/presidents/page.tsx
import presidents from '../../data/presidents.json';
import President from "@/components/President";

export const metadata = {
    title: 'US Presidents Historical List',
    description: 'Complete list of US Presidents with their inauguration dates'
};

export default function PresidentsPage() {
    return (
        <section className="mt-12">
            <h1 className="text-3xl font-bold mb-6">Who are all of the Former US Presidents?</h1>
            <div className="flex flex-col gap-4">
                {presidents.presidents.map((president) => (
                    <President key={president.name} president={president} />
                ))}
            </div>
        </section>
    );
}
