import Link from "next/link";
import {slugify} from "@/utils/slugify";

interface PresidentProps {
    president: {
        number: number[]; // Handles non-consecutive terms
        name: string;
        birthDate: string;
        placeOfBirth: string;
        deathDate?: string; // Optional for living presidents
        placeOfDeath?: string; // Optional for living presidents
        burialLocation?: string; // Optional for presidents not yet buried
        terms: Term[];
        significantEvents: SignificantEvent[]; // Major events during presidency
    };
}

interface Term {
    inaugurationDate: string;
    electedOn: string;
    yearStart: number;
    yearEnd: number;
    completedTerm: boolean;
    reasonForIncompletion?: string; // E.g., "Assassination", "Resignation"
    party: string; // Moved to Term to account for party changes
    opponents: string[]; // Supports multiple opponents
    runningMate: string;
}

interface SignificantEvent {
    title: string; // Short description of the event
    date: string; // When the event occurred
    description: string; // Detailed explanation of the event
    relatedToPresident: boolean; // Whether the event is directly tied to the president
}

const President = ({president}: PresidentProps) => {
    return (
        <Link
            key={`${president.name}-${president.terms[0].yearStart}`}
            href={`presidents/${slugify(president.name)}`}
            className="bg-blue-50 dark:bg-gray-800 dark:text-blue-400 rounded-lg p-3 shadow transition
               hover:bg-blue-100 dark:hover:bg-gray-700
               hover:shadow-md dark:hover:shadow-lg"
        >
            <h2 className="font-bold mb-2">
                {president.number}. {president.name}
            </h2>
            <div className="text-sm text-blue-600 dark:text-blue-300">
                <p>{`Served ${president.terms.length} ${president.terms.length === 1 ? 'Term' : 'Terms'} `}</p>

                {president.terms.map((term) => (
                    <p key={term.yearStart}>{`${term.yearStart} through ${term.yearEnd}`}</p>
                ))}

            </div>
        </Link>
    )
}
export default President
