// app/page.tsx
import Countdown from "@/components/Countdown"
import Link from "next/link"
import { Calendar,  BookOpen, History } from "lucide-react"

export default function Home() {
    return (
        <main className="max-w-6xl mx-auto px-4 py-8">
            {/* Existing Countdown Component */}
            <h1 className="text-center text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">
            Countdown to the Next US Presidential Inauguration
            </h1>
            <Countdown eventDate="2029-01-20"/>

            {/* Categories Section */}
            <div className="max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
                    Explore American Politics
                </h2>
                
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Events Card */}
                    <div className="p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 shadow-sm">
                        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 flex items-center gap-2">
                            <Calendar className="w-6 h-6" />
                            Upcoming Election Events
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Events leading up to the next US President election. Stay informed about upcoming elections, debates, primaries, 
                            and other important political events across the United States.
                        </p>
                        <Link 
                            href="/events" 
                            className="block p-3 rounded-lg bg-white/60 dark:bg-gray-800/60 hover:bg-white dark:hover:bg-gray-800 transition-all text-center text-blue-600 dark:text-blue-400"
                        >
                            View All Events
                        </Link>
                    </div>

                    {/* Past Presidents Card */}
                    <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 shadow-sm">
                        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 flex items-center gap-2">
                            <History className="w-6 h-6" />
                            Past Presidents
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Explore the history of American leadership through our 
                            comprehensive guides about past U.S. Presidents and their legacies.
                        </p>
                        <Link 
                            href={`/presidents`}
                            className="block p-3 rounded-lg bg-white/60 dark:bg-gray-800/60 hover:bg-white dark:hover:bg-gray-800 transition-all text-center text-blue-600 dark:text-blue-400"
                        >
                            View Past Presidents
                        </Link>
                    </div>

                    {/* Political Guides Card */}
                    <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 shadow-sm">
                        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 flex items-center gap-2">
                            <BookOpen className="w-6 h-6" />
                            Political Guides
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Learn about political parties, movements, voting, and how 
                            American democracy works through our clear, simple guides.
                        </p>
                        <Link 
                            href="/guides" 
                            className="block p-3 rounded-lg bg-white/60 dark:bg-gray-800/60 hover:bg-white dark:hover:bg-gray-800 transition-all text-center text-blue-600 dark:text-blue-400"
                        >
                            View All Guides
                        </Link>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-600 dark:text-gray-300">
                        Stay informed about American politics with our regularly updated guides and events calendar.
                    </p>
                </div>
            </div>
        </main>
    )
}