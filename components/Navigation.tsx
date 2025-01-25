// components/Navigation.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
    { href: '/', label: 'Home' },
    { href: '/events', label: 'Events' },
    { 
        href: '/guides',
        label: 'Learn',
        dropdown: [
            { href: '/guides/political-parties', label: 'Political Parties' },
            { href: '/guides/political-movements', label: 'Political Movements' },
            { href: '/guides/voting', label: 'Voting Guide' },
            { href: '/guides/electoral-college', label: 'Electoral College' },
        ]
    },
    { 
        href: '/presidents',
        label: 'Presidents',
        dropdown: [  
            { href: '/presidents/donald-trump?n=47', label: 'Donald Trump' },
            { href: '/presidents/joe-biden?n=46', label: 'Joe Biden' },
            { href: '/presidents/barack-obama?n=44', label: 'Barack Obama' },
            { href: '/presidents/george-w-bush?n=43', label: 'George W. Bush' },
            { href: '/presidents/bill-clinton?n=42', label: 'Bill Clinton' },
            { href: '/presidents', label: 'View All Presidents →' },
        ]
    },];

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };
    
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`sticky top-0 z-50 bg-blue-800 text-white transition-shadow duration-200
            ${isScrolled ? 'shadow-lg' : ''}`}>
            <div className="container mx-auto flex justify-between items-center py-6 px-4">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold">
                    Next President Election
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {NAV_ITEMS.map((item) => (
                        <div key={item.href} className="relative group">
                            <Link
                                href={item.href}
                                className={`text-lg hover:text-blue-200 transition py-2 flex items-center gap-1
                                    ${isActive(item.href) ? 'text-blue-200 font-medium' : ''}`}
                                onMouseEnter={() => item.dropdown && setActiveDropdown(item.href)}
                            >
                                {item.label}
                                {item.dropdown && <ChevronDown className="w-4 h-4" />}
                            </Link>
                            
                            {/* Dropdown Menu */}
                            {item.dropdown && (
                                <div 
                                    className={`absolute top-full left-0 bg-blue-700 py-2 rounded-lg shadow-lg w-64
                                        transition-opacity duration-150 ${activeDropdown === item.href ? 'opacity-100' : 'opacity-0 invisible'}`}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    {item.dropdown.map((dropdownItem) => (
                                        <Link
                                            key={dropdownItem.href}
                                            href={dropdownItem.href}
                                            className={`block px-4 py-2 hover:bg-blue-600 transition
                                                ${isActive(dropdownItem.href) ? 'bg-blue-600' : ''}`}
                                        >
                                            {dropdownItem.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden z-50"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Navigation Overlay */}
                {isMenuOpen && (
                    <div
                        className="fixed inset-0 bg-blue-800 z-40 md:hidden"
                        onClick={toggleMenu}
                    >
                        <div
                            className="flex flex-col items-center justify-center h-full space-y-8"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {NAV_ITEMS.map((item) => (
                                <div key={item.href} className="flex flex-col items-center">
                                    <Link
                                        href={item.href}
                                        className={`text-2xl hover:text-blue-200 transition mb-2
                                            ${isActive(item.href) ? 'text-blue-200 font-medium' : ''}`}
                                        onClick={toggleMenu}
                                    >
                                        {item.label}
                                    </Link>
                                    {item.dropdown && (
                                        <div className="flex flex-col items-center space-y-4 mt-4">
                                            {item.dropdown.map((dropdownItem) => (
                                                <Link
                                                    key={dropdownItem.href}
                                                    href={dropdownItem.href}
                                                    className={`text-lg hover:text-blue-200 transition
                                                        ${isActive(dropdownItem.href) ? 'text-blue-200' : ''}`}
                                                    onClick={toggleMenu}
                                                >
                                                    {dropdownItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
