// app/presidents/page.tsx


import React from 'react';
import AutoLink from '@/components/AutoLink';
import Link from 'next/link';
import presidentsData from '@/data/presidents.json';
import PresidentCard from '@/components/PresidentCard';

export const metadata = {
    title: 'US Presidents Historical List',
    description: 'Complete list of US Presidents with their inauguration dates'
};

export default function AllPresidentsPage() {
    const allPresidents = presidentsData.presidents
        .sort((a, b) => new Date(b.terms[0].yearStart).getTime() - new Date(a.terms[0].yearStart).getTime())
        .filter((president, index, self) => 
            index === self.findIndex((p) => p.name === president.name)
        );

    // Get the current president (first in the sorted list)
    const currentPresident = allPresidents[0];

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <AutoLink>
                <h1 className="text-3xl font-bold mb-6">All U.S. Presidents</h1>
                
                <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg mb-8">
                    <p className="text-lg mb-4">
                        From George Washington to {currentPresident.name}, {allPresidents.length} individuals have served as 
                        President of the United States, leading the nation through its evolution from a 
                        fledgling republic to a global superpower.
                    </p>
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                        Listed in reverse chronological order, most recent first.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {allPresidents.map(president => (
                        <PresidentCard
                            key={president.number[0]}
                            id={president.number[0].toString()}
                            name={president.name}
                            number={president.number[0].toString()}
                            termStart={president.terms[0].yearStart.toString()}
                            termEnd={president.terms[0].yearEnd?.toString()}
                            birth={president.birthDate}
                            death={president.deathDate || undefined}
                        />
                    ))}
                </div>

                <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Presidential History</h3>
                    <p className="mb-4">
                        Each president has faced unique challenges and opportunities, contributing to the 
                        rich tapestry of American history. Explore their stories, legacies, and the eras 
                        they shaped.
                    </p>
                    <div className="space-x-4">
                        <Link href="/presidents/living" 
                            className="text-blue-600 dark:text-blue-400 hover:underline">
                            View Living Presidents →
                        </Link>
                        <Link href="/presidents/historical" 
                            className="text-blue-600 dark:text-blue-400 hover:underline">
                            View Historical Presidents →
                        </Link>
                    </div>
                </div>
            </AutoLink>
        </div>
    );
}
