import React from 'react';
import Link from 'next/link';

interface PresidentCardProps {
    id: string;
    name: string;
    number: string;
    termStart: string;
    termEnd?: string;
    birth?: string;
    death?: string;
}

export default function PresidentCard({ id, name, number, termStart, termEnd, birth, death }: PresidentCardProps) {
    // Improved ordinal logic
    const getOrdinal = (num: string) => {
        const n = parseInt(num);
        if (n > 10 && n < 14) return 'th'; // Handle 11th, 12th, 13th
        const lastDigit = n % 10;
        switch (lastDigit) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    };

    return (
        <div className="relative bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            {/* President number with blue background */}
            <div className="absolute top-3 right-4 px-3 py-1 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                <span className="text-lg font-bold text-blue-700 dark:text-blue-300">
                    {number}{getOrdinal(number)}
                </span>
            </div>
            
            <h2 className="text-xl font-semibold mb-1 pr-24">{name}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {termStart}-
                {termEnd || 'Present'} • 
                {birth && ` ${new Date(birth).getFullYear()}-`}
                {death && `${new Date(death).getFullYear()}`}
            </p>
            <div className="flex justify-between items-center">
                <Link href={`/presidents/${id}`}
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                    View full profile →
                </Link>
               
            </div>
        </div>
    );
} 