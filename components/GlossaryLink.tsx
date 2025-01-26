'use client';

import React from 'react';

type GlossaryTerm = {
    id: string;
    term: string;
    variations?: string[];
};

const glossaryTerms: GlossaryTerm[] = [
    { id: 'civil-rights', term: 'Civil Rights', variations: ['civil right', 'civil rights'] },
    { id: 'coalition-building', term: 'Coalition Building', variations: ['coalition', 'coalition building'] },
    { id: 'constitutional-originalism', term: 'Constitutional Originalism', variations: ['originalism', 'originalist'] },
    { id: 'electoral-college', term: 'Electoral College' },
    { id: 'federalism', term: 'Federalism', variations: ['federal system'] },
    { id: 'fiscal-conservatism', term: 'Fiscal Conservatism', variations: ['fiscal conservative'] },
    { id: 'grassroots', term: 'Grassroots Activism', variations: ['grassroots'] },
    { id: 'nationalism', term: 'Economic Nationalism' },
    { id: 'nonviolent-resistance', term: 'Nonviolent Resistance', variations: ['nonviolent protest'] },
    { id: 'polarization', term: 'Political Polarization', variations: ['polarization', 'polarized'] },
    { id: 'populist', term: 'Populist Movement', variations: ['populist', 'populism'] },
    { id: 'progressive', term: 'Progressive Movement', variations: ['progressive'] },
    { id: 'protectionism', term: 'Protectionism', variations: ['protectionist'] },
    { id: 'realignment', term: 'Political Realignment', variations: ['realignment'] },
    { id: 'social-conservatism', term: 'Social Conservatism', variations: ['social conservative'] },
    { id: 'social-justice', term: 'Social Justice' },
    { id: 'states-rights', term: "States' Rights", variations: ['states rights', 'state rights'] },
];

export default function GlossaryLink({ children }: { children: React.ReactNode }) {
    const processText = (text: string): React.ReactNode => {
        let lastIndex = 0;
        const elements: React.ReactNode[] = [];
        const usedTerms = new Set<string>();
        
        // Sort terms by length (longest first) to prevent partial matches
        const sortedTerms = [...glossaryTerms].sort((a, b) => 
            (b.term.length + (b.variations?.join('').length || 0)) - 
            (a.term.length + (a.variations?.join('').length || 0))
        );

        while (lastIndex < text.length) {
            let matched = false;
            
            for (const { id, term, variations } of sortedTerms) {
                if (usedTerms.has(id)) continue;
                
                const terms = [term, ...(variations || [])];
                for (const t of terms) {
                    const regex = new RegExp(`\\b${t}\\b`, 'gi');
                    regex.lastIndex = lastIndex;
                    const match = regex.exec(text);
                    
                    if (match && match.index === lastIndex) {
                        console.log(`Matched: ${match[0]} at index ${lastIndex}`);
                        elements.push(
                            <a 
                                key={id}
                                href={`/glossary#${id}`}
                                target="_blank"
                                className="text-blue-600 dark:text-blue-400 hover:underline"
                            >
                                {match[0]}
                            </a>
                        );
                        lastIndex = regex.lastIndex;
                        usedTerms.add(id);
                        matched = true;
                        break;
                    }
                }
                if (matched) break;
            }
            
            if (!matched) {
                const nextSpace = text.indexOf(' ', lastIndex + 1);
                const end = nextSpace === -1 ? text.length : nextSpace;
                console.log(`Unmatched: "${text.slice(lastIndex, end)}" at index ${lastIndex}`);
                elements.push(text.slice(lastIndex, end));
                lastIndex = end;
            }

            // Move past any spaces
            while (text[lastIndex] === ' ') {
                elements.push(' ');
                lastIndex++;
            }
        }
        
        return <>{elements}</>;
    };

    const processNode = (node: React.ReactNode): React.ReactNode => {
        if (typeof node === 'string') {
            console.log('Processing text:', node);
            return processText(node);
        }

        if (React.isValidElement(node)) {
            const element = node as React.ReactElement<{ children?: React.ReactNode }>;
            if (!element.props.children) {
                return element;
            }
            const children = React.Children.map(element.props.children, processNode);
            return React.cloneElement(element, element.props, children);
        }

        if (Array.isArray(node)) {
            return node.map(child => processNode(child));
        }

        return node;
    };

    return <>{processNode(children)}</>;
} 