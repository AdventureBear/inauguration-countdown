import { glossaryTerms } from './glossary';
import { presidentTerms } from './presidents';
import { partyTerms } from './parties';
import { movementTerms } from './movements';

export type LinkTerm = {
    readonly id: string;
    readonly term: string;
    readonly variations?: readonly string[];
    readonly type: 'glossary' | 'president' | 'party' | 'movement';
    readonly href: string;
};

export const allTerms = [
    ...glossaryTerms,
    ...presidentTerms,
    ...partyTerms,
    ...movementTerms,
] as const; 