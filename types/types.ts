export type President = {
    number: number[]; // Handles non-consecutive terms
    name: string;
    birthDate: string;
    placeOfBirth: string;
    deathDate?: string; // Optional for living presidents
    placeOfDeath?: string; // Optional for living presidents
    burialLocation?: string; // Optional for presidents not yet buried
    terms: Term[];
    significantEvents: SignificantEvent[]; // Major events during presidency
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