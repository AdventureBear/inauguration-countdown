// components/Navigation.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
    { href: '/', label: 'Home' },
    { href: '/events', label: 'Timeline' },
    { href: '/presidents', label: 'Presidents' },
    { href: '/guides', label: 'Guides' }
];

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="bg-blue-800 text-white">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold">
                    Election 2028
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-6">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="hover:text-blue-200 transition"
                        >
                            {item.label}
                        </Link>
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
                            className="flex flex-col items-center justify-center h-full space-y-6"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {NAV_ITEMS.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-2xl hover:text-blue-200 transition"
                                    onClick={toggleMenu}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
