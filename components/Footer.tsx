import Link from "next/link"

export default function Footer() {
    return (
        <footer className="mt-auto py-8 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Political Guides Section */}
                    <div>
                        <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-gray-100">Political Guides</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link href="/guides" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                    All Guides
                                </Link>
                            </li>
                            <li>
                                <Link href="/guides/political-parties" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                    Political Parties
                                </Link>
                            </li>
                            <li>
                                <Link href="/guides/political-movements" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                    Political Movements
                                </Link>
                            </li>
                            <li>
                                <Link href="/guides/electoral-college" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                    Electoral College
                                </Link>
                            </li>
                            <li>
                                <Link href="/guides/voting" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                    Voting Guide
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Political Movements Section */}
                    <div>
                        <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-gray-100">Political Movements</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link href="/guides/political-movements/civil-rights" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                    Civil Rights Movement
                                </Link>
                            </li>
                            <li>
                                <Link href="/guides/political-movements/conservative" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                    Conservative Movement
                                </Link>
                            </li>
                            <li>
                                <Link href="/guides/political-movements/environmental" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                    Environmental Movement
                                </Link>
                            </li>
                            <li>
                                <Link href="/guides/political-movements/anti-war" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                    Anti-War Movement
                                </Link>
                            </li>
                            <li>
                                <Link href="/guides/political-movements/tea-party" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                    Tea Party Movement
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* About Section */}
                    <div>
                        <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-gray-100">About</h3>
                        <ul className="space-y-1">
                            <li><Link href="/privacy" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                Privacy Policy
                            </Link></li>
                            <li><Link href="/contact" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                Contact
                            </Link></li>
                            <li><Link href="/attributions" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                Attributions
                            </Link></li>
                            <li><Link className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                                href="https://thenounproject.com/browse/icons/term/american-eagle/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                title="American Eagle Icons"
                            >
                                Noun Project
                            </Link> (CC BY 3.0)</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
                    <p className="text-center text-gray-600 dark:text-gray-400">
                        © {new Date().getFullYear()} Next Presidential Election. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
} 