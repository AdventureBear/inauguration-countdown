'use client';

import { useState, useEffect } from 'react';


    // Initial calculation

const useCountdown = (targetDate: string) => {
    const [timeLeft, setTimeLeft] = useState<Record<string, number> | null>(null);

    useEffect(() => {
        function calculateTime() {
            const target = new Date(targetDate).getTime();
            const now = Date.now();
            const difference = target - now;

            if (difference <= 0) {
                setTimeLeft(null);
                return;
            }

            setTimeLeft({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000)
            });
        }

        calculateTime();
        const timer = setInterval(calculateTime, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return timeLeft;
}

export default useCountdown