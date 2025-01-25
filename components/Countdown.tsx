'use client';

import React from 'react';
import useCountdown from "@/app/hooks/useCountdown";

// const INAUGURATION_DATE = '2029-01-20';

interface EventProps {
    eventDate: string
}

export default function Countdown({eventDate}: EventProps) {
    const timeLeft = useCountdown(eventDate);

    // console.log(timeLeft);
    // Object.entries(timeLeft).map((entry) => {
    //     console.log(entry[0])
    // })

    if (!timeLeft) {
        return (
            <div className="text-center text-gray-500 dark:text-gray-300">
               Event is completed
            </div>
        );
    }

    return (
        <div className="flex mb-2 justify-center rounded-lg font-bold text-blue-800 text-4xl text-center">
            {Object.entries(timeLeft).map((entry) => (
                <div key={`${entry[0]}${entry[1]}`} className="p-8 mx-4 bg-blue-50 dark:bg-gray-800 dark:text-blue-400 rounded-lg shadow-lg">
                    <div className="">{entry[1]}</div>
                    <div className="text-sm text-blue-600 dark:text-blue-300">{entry[0].toUpperCase()}</div>
                </div>
            ))}
        </div>
    );
}