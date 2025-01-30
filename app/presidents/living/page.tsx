'use client';

import React from 'react';
import AutoLink from '@/components/AutoLink';
import Link from 'next/link';
import presidentsData from '@/data/presidents.json';
import PresidentCard from '@/components/PresidentCard';

export default function LivingPresidentsPage() {
    const livingPresidents = presidentsData.presidents
        .filter(president => !president.deathDate)
        .sort((a, b) => new Date(b.terms[0].yearStart).getTime() - new Date(a.terms[0].yearStart).getTime())
        .filter((president, index, self) => 
            index === self.findIndex((p) => p.name === president.name)
        );

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <AutoLink>
                <h1 className="text-3xl font-bold mb-6">Living U.S. Presidents</h1>
                
                <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg mb-8">
                    <p className="text-lg mb-4">
                        There {livingPresidents.length === 1 ? 'is' : 'are'} currently {livingPresidents.length} living U.S. 
                        {livingPresidents.length === 1 ? ' president' : ' presidents'}, spanning over 
                        {livingPresidents.length > 0 ? ' multiple decades' : ' recent years'} of American 
                        presidential history.
                    </p>
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                        Listed in order of presidency, most recent first.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {livingPresidents.map(president => (
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
                    <h3 className="text-xl font-semibold mb-4">Historical Context</h3>
                    <p className="mb-4">
                        The living presidents represent different political parties, ideologies, 
                        and approaches to governance, offering a unique window into American political diversity.
                    </p>
                    <Link href="/presidents/historical" 
                        className="text-blue-600 dark:text-blue-400 hover:underline">
                        View Historical Presidents →
                    </Link>
                </div>
            </AutoLink>
        </div>
    );
} 