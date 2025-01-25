'use client';

import React, { useState, useEffect } from 'react';
import useCountdown from "@/app/hooks/useCountdown";

// const INAUGURATION_DATE = '2029-01-20';

interface EventProps {
    eventDate: string
}

export default function Countdown({eventDate}: EventProps) {
    const timeLeft = useCountdown(eventDate);

    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true)
    }, []);

    // console.log(timeLeft);
    // Object.entries(timeLeft).map((entry) => {
    //     console.log(entry[0])
    // })


    if (!isClient) return null

    if (!timeLeft) {
        return (
            <div className="text-center text-gray-500 dark:text-gray-300">
               Event is completed
            </div>
        );
    }

    return (
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 p-2 md:p-4 rounded-lg font-bold text-blue-800">
            {Object.entries(timeLeft).map((entry) => (
                <div 
                    key={`${entry[0]}${entry[1]}`} 
                    className="flex flex-col items-center justify-center p-3 md:p-8 
                             bg-blue-50 dark:bg-gray-800 dark:text-blue-400 
                             rounded-lg shadow-lg min-w-[80px] md:min-w-[120px]"
                >
                    <div className="text-2xl md:text-4xl">{entry[1]}</div>
                    <div className="text-xs md:text-sm text-blue-600 dark:text-blue-300 mt-1">
                        {entry[0].toUpperCase()}
                    </div>
                </div>
            ))}
        </div>
    );
}