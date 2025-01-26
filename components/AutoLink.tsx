'use client';

import React from 'react';
import { allTerms, type LinkTerm } from '@/data/links';

export default function AutoLink({ children }: { children: React.ReactNode }) {
    const usedTerms = new Set<string>();

    const processText = (text: string): React.ReactNode => {
        console.log('Processing text:', text);
        const elements: React.ReactNode[] = [];
        let currentIndex = 0;
        
        // Find all possible matches first
        const allMatches = [];
        
        for (const item of allTerms) {
            const { id, term, variations = [] } = item as LinkTerm;
            if (usedTerms.has(id)) continue;
            
            const terms = [term, ...variations];
            for (const t of terms) {
                const escapedTerm = t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const regex = new RegExp(`\\b${escapedTerm}\\b`, 'gi');
                let match;
                while ((match = regex.exec(text)) !== null) {
                    allMatches.push({
                        index: match.index,
                        length: match[0].length,
                        text: match[0],
                        id,
                        type: item.type,
                        href: item.href
                    });
                }
            }
        }
        
        // Sort matches by index
        allMatches.sort((a, b) => a.index - b.index);
        
        // Process matches in order
        for (const match of allMatches) {
            if (usedTerms.has(match.id)) continue;
            
            if (match.index > currentIndex) {
                elements.push(text.slice(currentIndex, match.index));
            }
            
            elements.push(
                <a 
                    key={match.id}
                    href={match.href}
                    target={match.type === 'glossary' ? '_blank' : undefined}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                    {match.text}
                </a>
            );
            
            currentIndex = match.index + match.length;
            usedTerms.add(match.id);
        }
        
        if (currentIndex < text.length) {
            elements.push(text.slice(currentIndex));
        }
        
        return <>{elements}</>;
    };

    const processNode = (node: React.ReactNode): React.ReactNode => {
        console.log('Processing node type:', typeof node); // Debug log
        
        if (typeof node === 'string') {
            return processText(node);
        }

        if (React.isValidElement(node)) {
            const element = node as React.ReactElement<{ children?: React.ReactNode }>;
            const children = React.Children.map(element.props.children, processNode);
            return React.cloneElement(element, element.props, children);
        }

        return node;
    };

    return <>{processNode(children)}</>;
} 