import { useState, useEffect } from 'react';

interface timeLeft {
    days: number
    hours: number
    minutes: number
    seconds: number
}

// const eventDate = "2029-01-20"

    const calculateTimeLeft = (eventDate: string) => {
        const now:Date = new Date();
        const target:Date = new Date(eventDate);
        const difference = target.getTime() - now.getTime();

        let timeLeft: timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / 1000 / 60) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            timeLeft = { days, hours, minutes, seconds };
        }
        return timeLeft
    };

    // Initial calculation

const useCountdown = (eventDate: string) => {
    const [timeLeft, setTimeLeft] = useState<timeLeft>(calculateTimeLeft(eventDate))

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(eventDate));
        }, 1000);

        return () => clearInterval(timer);
    }, [eventDate]);

    return timeLeft;
}

export default useCountdown