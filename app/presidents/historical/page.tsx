'use client';

import React from 'react';
import AutoLink from '@/components/AutoLink';
import Link from 'next/link';
import presidentsData from '@/data/presidents.json';
import PresidentCard from '@/components/PresidentCard';

export default function HistoricalPresidentsPage() {
    // Filter and sort logic remains the same
    const historicalPresidents = presidentsData.presidents
        .filter(president => president.deathDate)
        .sort((a, b) => new Date(b.terms[0].inaugurationDate).getTime() - new Date(a.terms[0].inaugurationDate).getTime())
        .filter((president, index, self) => 
            index === self.findIndex((p) => p.name === president.name)
        );

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <AutoLink>
                <h1 className="text-3xl font-bold mb-6">The Legacy of America&apos;s Past Presidents</h1>
                
                <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg mb-8">
                    <p className="text-lg mb-4">
                    
                    From George Washington to Jimmy Carter, {historicalPresidents.length} presidents—now no longer living—have shaped the course of American history, guiding the nation through times of peace and war, prosperity and hardship, innovation and upheaval. These leaders played pivotal roles in defining democracy, expanding the country&apos;s influence, and responding to the ever-evolving challenges of their time. Whether forging a new republic, leading through civil war and reconstruction, or navigating the complexities of the modern world, each has left an enduring impact on the nation&apos;s identity. Their decisions and legacies continue to influence America today, serving as both lessons and inspirations for future generations.
                    </p>
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                        Listed in reverse chronological order, most recent first.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {historicalPresidents.map(president => (
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
                    <h3 className="text-xl font-semibold mb-4">Historical Legacy</h3>
                    <p className="mb-4">
                        Each president faced unique challenges and opportunities that shaped their legacy and 
                        the nation&apos;s development. Their combined influence has guided America through its evolution 
                        from a fledgling republic to a global superpower.
                    </p>
                    <Link href="/presidents/living" 
                        className="text-blue-600 dark:text-blue-400 hover:underline">
                        View Living Presidents →
                    </Link>
                </div>
            </AutoLink>
        </div>
    );
} 