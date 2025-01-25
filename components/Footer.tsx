import Link from "next/link"
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="relative bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden">
                <Image
                    src="/us-flag.jpg"
                    alt=""
                    fill
                    className="object-cover opacity-[0.3] dark:opacity-[0.02]"
                    priority={false}
                />
            </div>

            {/* Content */}
            <div className="relative max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Political Guides Section */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-gray-100">Political Guides</h3>
                        <ul className="space-y-2">
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
                        <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-gray-100">Political Movements</h3>
                        <ul className="space-y-2">
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

                    {/* Events & Elections Section */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-gray-100">Events & Elections</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/events" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                    Upcoming Events
                                </Link>
                            </li>
                            <li>
                                <Link href="/events/presidential" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                    Presidential Election
                                </Link>
                            </li>
                            <li>
                                <Link href="/events/primaries" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                    Primary Elections
                                </Link>
                            </li>
                            <li>
                                <Link href="/events/debates" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                    Debates
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Presidents Section */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-gray-100">Presidents</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/presidents" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                    All Presidents
                                </Link>
                            </li>
                            <li>
                                <Link href="/presidents/joe-biden" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                    Joe Biden
                                </Link>
                            </li>
                            <li>
                                <Link href="/presidents/donald-trump" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                    Donald Trump
                                </Link>
                            </li>
                            <li>
                                <Link href="/presidents/barack-obama" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                    Barack Obama
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
                    <div className="mb-4 space-x-6">
                        <Link href="/privacy" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                            Privacy Policy
                        </Link>
                        <Link href="/attributions" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                            Attributions
                        </Link>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                        © {new Date().getFullYear()} Next Presidential Election. All rights reserved.
                    </p>
                    <div className="mt-4 text-xs text-gray-500 dark:text-gray-500">
                        American Eagle by Raymond from <a 
                            href="https://thenounproject.com/browse/icons/term/american-eagle/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            title="American Eagle Icons"
                            className="hover:text-blue-600 dark:hover:text-blue-400"
                        >
                            Noun Project
                        </a> (CC BY 3.0)
                    </div>
                </div>
            </div>
        </footer>
    )
} 