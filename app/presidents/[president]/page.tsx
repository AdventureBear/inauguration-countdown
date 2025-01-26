import React from 'react'
import presidents from "@/data/presidents.json";
import {slugify} from "@/utils/slugify";
import {notFound} from "next/navigation";
import type { Metadata } from 'next';
import {  Term } from '@/types/types';
import Link from 'next/link';

interface Props {
    params: Promise<{ president: string }>;
    searchParams: Promise<{ n?: string }>;
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
    const { n } = await searchParams;
    const { president: presidentSlug } = await params;
    
    let president;
    if (n) 
        {
     president = presidents.presidents.find(e => 
        slugify(e.name) === presidentSlug && 
        e.number[0] === parseInt(n ?? "0")
    );    }
    else {
        president = presidents.presidents.find(e => 
            slugify(e.name) === presidentSlug
        );
    }

    if (!president) return { title: 'President Not Found' };
    
    return {
        title: `${president.name} - ${president.number}${getOrdinal(president.number[0])} US President`,
        description: `Learn about ${president.name}'s presidency, terms in office, and significant events.`
    };
}

function getOrdinal(n: number): string {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
}

function getAdjacentPresidents(currentNumber: number) {
    const sortedPresidents = [...presidents.presidents].sort((a, b) => a.number[0] - b.number[0]);
    const currentIndex = sortedPresidents.findIndex(p => p.number[0] === currentNumber);
    
    return {
        previous: currentIndex > 0 ? sortedPresidents[currentIndex - 1] : null,
        next: currentIndex < sortedPresidents.length - 1 ? sortedPresidents[currentIndex + 1] : null
    };
}

function calculateAge(birthDate: string, endDate: string): number {
    const birth = new Date(birthDate);
    const end = new Date(endDate);
    let age = end.getFullYear() - birth.getFullYear();
    const monthDiff = end.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && end.getDate() < birth.getDate())) {
        age--;
    }
    
    return age;
}

export default async function PresidentPage({ params, searchParams }: Props) {
    const {  president: presidentSlug } = await params;
    const { n } = await searchParams;
    let president;
    if (n) 
        {
     president = presidents.presidents.find(e => 
        slugify(e.name) === presidentSlug && 
        e.number[0] === parseInt(n ?? "0")
    );    }
    else {
        president = presidents.presidents.find(e => 
            slugify(e.name) === presidentSlug
        );
    }


   
    
    if (!president) return notFound();

    const { previous, next } = getAdjacentPresidents(president.number[0]);

    return (
        <article className="max-w-4xl mx-auto">
            <header className="mb-8 text-center">
                <h1 className="text-4xl font-bold text-blue-800 dark:text-blue-400 mb-2">{president.name}</h1>
                <p className="text-2xl text-gray-600 dark:text-gray-300">
                    {president.number}{getOrdinal(president.number[0])} President of the United States
                </p>
            </header>
            {/* compare button */}
            <div className="mb-6 flex justify-end">
                <Link 
                    href={`/compare/presidents?p1=${president.number[0]}`}
                    className="inline-flex items-center px-4 py-2 bg-blue-500/70 hover:bg-blue-600/90 
                             text-white rounded-lg transition-colors duration-200"
                >
                    <svg className="w-4 h-4 mr-2 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Compare
                </Link>
            </div>
            <nav className="flex justify-between mb-8">
                {previous && (
                    <a
                        href={`/presidents/${slugify(previous.name)}?n=${previous.number}`}
                        className="flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
                    >
                        ← {previous.number}{getOrdinal(previous.number[0])} President: {previous.name}
                    </a>
                )}
                {next && (
                    <a
                        href={`/presidents/${slugify(next.name)}?n=${next.number}`}
                        className="flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700 ml-auto"
                    >
                        {next.number}{getOrdinal(next.number[0])} President: {next.name} →
                    </a>
                )}
            </nav>

            <section className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-6">Personal Information</h2>
                    <dl className="space-y-4">
                        <div>
                            <dt className="font-semibold text-gray-600 dark:text-gray-300">Born</dt>
                            <dd className="text-lg">{new Date(president.birthDate).toLocaleDateString()} in {president.placeOfBirth}</dd>
                        </div>
                        
                        {president.deathDate && (
                            <>
                                <div>
                                    <dt className="font-semibold text-gray-600 dark:text-gray-300">Died</dt>
                                    <dd className="text-lg">
                                        {new Date(president.deathDate).toLocaleDateString()} in {president.placeOfDeath}
                                        <span className="text-gray-500 dark:text-gray-400 ml-2">
                                            (Age {calculateAge(president.birthDate, president.deathDate)})
                                        </span>
                                    </dd>
                                </div>
                            </>
                        )}
                        
                        {president.burialLocation && (
                            <div>
                                <dt className="font-semibold text-gray-600 dark:text-gray-300">Burial Location</dt>
                                <dd className="text-lg">{president.burialLocation}</dd>
                            </div>
                        )}
                    </dl>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-6">Term in Office</h2>
                    <dl className="space-y-4">
                        <div>
                            <dt className="font-semibold text-gray-600 dark:text-gray-300">Party</dt>
                            <dd className="text-lg">{president.terms[0].party}</dd>
                        </div>
                        <div>
                            <dt className="font-semibold text-gray-600 dark:text-gray-300">Years</dt>
                            <dd className="text-lg">{president.terms[0].yearStart} - {president.terms[0].yearEnd || 'Present'}</dd>
                        </div>
                        <div>
                            <dt className="font-semibold text-gray-600 dark:text-gray-300">Running Mate</dt>
                            <dd className="text-lg">{president.terms[0].runningMate}</dd>
                        </div>
                        {(() => {
                            const term: Term = president.terms[0];
                            return (
                                <>
                                    <div>
                                        <dt className="font-semibold text-gray-600 dark:text-gray-300">Age When Elected</dt>
                                        <dd className="text-lg">{calculateAge(president.birthDate, term.electedOn)}</dd>
                                    </div>
                                    {term.completedTerm === false && term.reasonForIncompletion && (
                                        <div>
                                            <dt className="font-semibold text-red-600 dark:text-red-400">Term Ended Early</dt>
                                            <dd className="text-lg text-red-600 dark:text-red-400">{term.reasonForIncompletion}</dd>
                                        </div>
                                    )}
                                </>
                            );
                        })()}
                    </dl>
                </div>
            </section>

            {president.significantEvents.length > 0 && (
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-6">Significant Events</h2>
                    <div className="grid gap-6">
                        {president.significantEvents.map(event => (
                            <div key={event.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-300 mb-2">{event.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                    {new Date(event.date).toLocaleDateString()}
                                </p>
                                <p className="text-gray-700 dark:text-gray-200">{event.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </article>
    );
}

