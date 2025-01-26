'use client';

import { President } from '@/types/types';
import { useState, useRef, MouseEvent } from 'react';

const TIMELINE_START = 1789; // First presidency
const TIMELINE_END = new Date().getFullYear() +4;
// const TIMELINE_WIDTH = 100; // percentage

interface TimelineProps {
    president1: President | null;
    president2: President | null;
}

export const COLORS = {
    president1: {
        bar: 'bg-teal-400',
        barHover: 'hover:bg-teal-300',
        tooltip: 'bg-teal-500',
        tooltipText: 'text-teal-100',
        card: 'border-l-4 border-teal-400'
    },
    president2: {
        bar: 'bg-sky-400',
        barHover: 'hover:bg-sky-300',
        tooltip: 'bg-sky-500',
        tooltipText: 'text-sky-100',
        card: 'border-l-4 border-sky-400'
    }
};

export default function PresidentialTimeline({ president1, president2 }: TimelineProps) {
  

    const [currentYear, setCurrentYear] = useState<number | null>(null);
    const timelineRef = useRef<HTMLDivElement>(null);
    if (!president1 || !president2) return null;
    const timelineRange = TIMELINE_END - TIMELINE_START;
    
    const getPositionPercent = (year: number) => {
        return ((year - TIMELINE_START) / (TIMELINE_END - TIMELINE_START)) * 100;
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (timelineRef.current) {
            const rect = timelineRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const percentage = (x / rect.width) * 100;
            const year = Math.round(TIMELINE_START + (percentage / 100) * timelineRange);
            
            if (year >= TIMELINE_START && year <= TIMELINE_END) {
                setCurrentYear(year);
            }
        }
    };

    const handleMouseLeave = () => {
        setCurrentYear(null);
    };

    const yearMarkers = [1800, 1850, 1900, 1950, 2000];

    return (
        <div className="bg-gray-900 rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-6 text-center text-white">Timeline Comparison</h3>
            
            <div 
                ref={timelineRef}
                className="relative h-[120px]"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                {/* Current Year Indicator */}
                {currentYear && (
                    <div 
                        className="absolute top-0 h-full w-[1px] bg-gray-400 z-10 pointer-events-none"
                        style={{
                            left: `${getPositionPercent(currentYear)}%`
                        }}
                    >
                        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 
                                      bg-gray-700 text-white px-2 py-1 rounded text-sm">
                            {currentYear}
                        </div>
                    </div>
                )}

                {/* Year Markers */}
                {yearMarkers.map(year => (
                    <div 
                        key={year}
                        className="absolute text-gray-400 text-sm"
                        style={{ 
                            left: `${getPositionPercent(year)}%`,
                            top: '60px',
                            transform: 'translate(-50%, -50%)'
                        }}
                    >
                        <div className="h-3 w-[1px] bg-gray-600 mb-1 mx-auto" />
                        {year}
                    </div>
                ))}

                {/* Main Timeline Line */}
                <div className="absolute w-full h-[1px] bg-gray-600 top-[60px]" />

                {/* President 1 - Above line */}
                <div className="absolute w-full top-[20px]">
                    {president1.terms.map((term, index) => (
                        <div
                            key={index}
                            className={`absolute h-6 rounded group transition-colors duration-200 
                                     ${COLORS.president1.bar} ${COLORS.president1.barHover}`}
                            style={{
                                left: `${getPositionPercent(term.yearStart)}%`,
                                width: `${getPositionPercent(term.yearEnd || TIMELINE_END) - getPositionPercent(term.yearStart)}%`
                            }}
                        >
                            <div className={`hidden group-hover:block absolute -top-6 
                                        left-0 px-2 py-1 rounded text-xs whitespace-nowrap z-20
                                        ${COLORS.president1.tooltip} text-white`}>
                                <div className="font-medium mb-0.5">{president1.name}</div>
                                <div>{term.yearStart}-{term.yearEnd || 'Present'}</div>
                                <div className={COLORS.president1.tooltipText}>{term.party}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* President 2 - Below line */}
                <div className="absolute w-full top-[80px]">
                    {president2.terms.map((term, index) => (
                        <div
                            key={index}
                            className={`absolute h-6 rounded group transition-colors duration-200 
                                     ${COLORS.president2.bar} ${COLORS.president2.barHover}`}
                            style={{
                                left: `${getPositionPercent(term.yearStart)}%`,
                                width: `${getPositionPercent(term.yearEnd || TIMELINE_END) - getPositionPercent(term.yearStart)}%`
                            }}
                        >
                            <div className={`hidden group-hover:block absolute -bottom-20 
                                        left-0 px-2 py-1 rounded text-xs whitespace-nowrap z-20
                                        ${COLORS.president2.tooltip} text-white`}>
                                <div className="font-medium mb-0.5">{president2.name}</div>
                                <div>{term.yearStart}-{term.yearEnd || 'Present'}</div>
                                <div className={COLORS.president2.tooltipText}>{term.party}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 