'use client';

import { useState, useEffect } from 'react';


    // Initial calculation

const useCountdown = (targetDate: string) => {
    const [timeLeft, setTimeLeft] = useState<Record<string, number> | null>(null);
    const [isLoading, setIsLoading] = useState(true); // Add loading state

    const target = new Date(targetDate).getTime();
    useEffect(() => {
        
        function calculateTime() {
            
            const now = Date.now();
            const difference = target - now;

            if (difference <= 0) {
                setTimeLeft(null);
                
            }else {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000)
                });
            }

            setIsLoading(false); // Update loading state
        }

        calculateTime();
        const timer = setInterval(calculateTime, 1000);

        return () => clearInterval(timer);
    }, [target]);

    return { timeLeft, isLoading };
}

export default useCountdown