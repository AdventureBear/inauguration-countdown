export interface President {
    number: number[]; // Handles non-consecutive terms
    name: string;
    birthDate: string;
    placeOfBirth: string;
    deathDate: string | null;
    placeOfDeath: string | null;
    burialLocation: string | null;
    terms: Term[];
    significantEvents: SignificantEvent[]; // Major events during presidency
}

export interface Term {
    inaugurationDate: string;
    electedOn: string;
    yearStart: number;
    yearEnd: number | null;
    completedTerm: boolean | null;
    reasonForIncompletion?: string;
    party: string;
    opponents: string[];
    runningMate: string;
}

interface SignificantEvent {
    title: string; // Short description of the event
    date: string; // When the event occurred
    description: string; // Detailed explanation of the event
    relatedToPresident: boolean; // Whether the event is directly tied to the president
}

export interface GuideSection {
    title: string;
    slug: string;
    subPages?: GuideSection[];
}