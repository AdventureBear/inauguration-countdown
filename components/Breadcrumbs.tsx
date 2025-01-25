'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight } from 'lucide-react'

export default function Breadcrumbs() {
    const pathname = usePathname()
    
    // Skip rendering breadcrumbs on homepage
    if (pathname === '/') return null
    
    const pathSegments = pathname.split('/').filter(segment => segment)
    
    // Generate breadcrumb items with proper formatting
    const breadcrumbs = pathSegments.map((segment, index) => {
        const href = '/' + pathSegments.slice(0, index + 1).join('/')
        const label = segment
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
        
        return { href, label }
    })
    
    return (
        <nav className="max-w-6xl mx-auto px-4 py-8">
            <ol className="flex flex-wrap items-center text-base text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                    <Link 
                        href="/" 
                        className="hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                    >
                        Home
                    </Link>
                </li>
                {breadcrumbs.map((breadcrumb, index) => (
                    <li key={breadcrumb.href} className="flex items-center">
                        <ChevronRight className="w-5 h-5 mx-3" />
                        {index === breadcrumbs.length - 1 ? (
                            <span className="text-gray-900 dark:text-gray-100 font-medium">
                                {breadcrumb.label}
                            </span>
                        ) : (
                            <Link 
                                href={breadcrumb.href}
                                className="hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                            >
                                {breadcrumb.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    )
}