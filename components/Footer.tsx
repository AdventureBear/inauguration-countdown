export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="mt-16 py-8 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                    <div className="mb-4 sm:mb-0">
                        © {currentYear} Next Presidential Election. All rights reserved.
                    </div>
                    <nav>
                        <ul className="flex space-x-6">
                            <li>
                                <a 
                                    href="/privacy" 
                                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="mailto:corrections@nextpresidentialelection.us" 
                                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    Submit Corrections
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="mt-4 text-xs text-center text-gray-500 dark:text-gray-500">
                    American Eagle by Raymond from <a href="https://thenounproject.com/browse/icons/term/american-eagle/" target="_blank" rel="noopener noreferrer" title="American Eagle Icons" className="hover:text-blue-600 dark:hover:text-blue-400">Noun Project</a> (CC BY 3.0)
                </div>
            </div>
        </footer>
    );
} 