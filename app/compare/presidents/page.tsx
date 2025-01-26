'use client';

import { COLORS } from '@/components/PresidentialTimeline';
import { useState } from 'react';
import { President, Term } from '@/types/types';
import presidents from '@/data/presidents.json';
import PresidentialTimeline from '@/components/PresidentialTimeline';

export default function ComparePresidents() {
    const [president1, setPresident1] = useState<President | null>(null);
    const [president2, setPresident2] = useState<President | null>(null);

    const getLatestTerm = (terms: Term[]): Term | null => {
        return terms.length > 0 ? terms[terms.length - 1] : null;
    };

    const getYearsInOffice = (terms: Term[]): string => {
        return terms.map(term => `${term.yearStart}-${term.yearEnd || 'Present'}`).join(', ');
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Compare Presidents</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <select 
                    className="w-full p-3 border rounded-lg shadow-sm dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    onChange={(e) => {
                        const found = presidents.presidents.find(p => p.number[0] === parseInt(e.target.value));
                        setPresident1(found || null);
                    }}
                >
                    <option value="">Select First President</option>
                    {presidents.presidents.map((president) => (
                        <option key={president.number[0]} value={president.number[0]}>
                            {president.name}
                        </option>
                    ))}
                </select>

                <select 
                    className="w-full p-3 border rounded-lg shadow-sm dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    onChange={(e) => {
                        const found = presidents.presidents.find(p => p.number[0] === parseInt(e.target.value));
                        setPresident2(found || null);
                    }}
                >
                    <option value="">Select Second President</option>
                    {presidents.presidents.map((president) => (
                        <option key={president.number[0]} value={president.number[0]}>
                            {president.name}
                        </option>
                    ))}
                </select>
            </div>

            {president1 && president2 && (
                <div className="space-y-8">
                    <PresidentialTimeline president1={president1} president2={president2} />
                    {/* Basic Info Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 
                                     border border-gray-200 dark:border-gray-700 ${COLORS.president1.card}`}>
                            <h2 className="text-2xl font-bold mb-4 text-center border-b pb-2">{president1.name}</h2>
                            <div className="space-y-3">
                                <p><span className="font-semibold">Years in Office:</span> {getYearsInOffice(president1.terms)}</p>
                                <p><span className="font-semibold">Birth:</span> {president1.birthDate}</p>
                                <p><span className="font-semibold">Birth Place:</span> {president1.placeOfBirth}</p>
                                <p><span className="font-semibold">Party:</span> {getLatestTerm(president1.terms)?.party}</p>
                                <p><span className="font-semibold">Running Mate:</span> {getLatestTerm(president1.terms)?.runningMate}</p>
                            </div>
                        </div>

                        <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 
                                     border border-gray-200 dark:border-gray-700 ${COLORS.president2.card}`}>
                            <h2 className="text-2xl font-bold mb-4 text-center border-b pb-2">{president2.name}</h2>
                            <div className="space-y-3">
                                <p><span className="font-semibold">Years in Office:</span> {getYearsInOffice(president2.terms)}</p>
                                <p><span className="font-semibold">Birth:</span> {president2.birthDate}</p>
                                <p><span className="font-semibold">Birth Place:</span> {president2.placeOfBirth}</p>
                                <p><span className="font-semibold">Party:</span> {getLatestTerm(president2.terms)?.party}</p>
                                <p><span className="font-semibold">Running Mate:</span> {getLatestTerm(president2.terms)?.runningMate}</p>
                            </div>
                        </div>
                    </div>

                    {/* Terms Comparison */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                        <h3 className="text-2xl font-bold mb-6 text-center border-b pb-2">Terms in Office</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[president1, president2].map((president, presIndex) => (
                                <div key={presIndex} className="space-y-4">
                                    {president.terms.map((term, index) => (
                                        <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                            <h4 className="font-bold mb-2">Term {index + 1}</h4>
                                            <div className="space-y-2">
                                                <p><span className="font-semibold">Years:</span> {term.yearStart}-{term.yearEnd || 'Present'}</p>
                                                <p><span className="font-semibold">Party:</span> {term.party}</p>
                                                <p><span className="font-semibold">Opponents:</span> {term.opponents.join(', ')}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Significant Events */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                        <h3 className="text-2xl font-bold mb-6 text-center border-b pb-2">Significant Events</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[president1, president2].map((president, presIndex) => (
                                <div key={presIndex} className="space-y-4">
                                    <h4 className="text-xl font-bold text-center mb-4">{president.name}</h4>
                                    {president.significantEvents.map((event, index) => (
                                        <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                            <h5 className="font-bold mb-2">{event.title}</h5>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{new Date(event.date).toLocaleDateString()}</p>
                                            <p className="text-sm">{event.description}</p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
} 