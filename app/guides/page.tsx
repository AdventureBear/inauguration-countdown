import Link from "next/link";
import { 
    Users, 
    Flag,
    Building2, 
    Vote
} from "lucide-react";

export default function GuidesPage() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                Understanding American Politics
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Clear guides to help you understand how American politics works
            </p>
            
            {/* Visual Category Cards */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
                {/* Political Parties Card */}
                <div className="p-6 rounded-xl bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 flex items-center gap-2">
                        <Flag className="w-6 h-6" />
                        Political Parties
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Learn about America&apos;s major political parties, their history, beliefs, and how they 
                        shape our democracy. From the Democratic and Republican parties to influential 
                        third parties.
                    </p>
                    <Link 
                        href="/guides/political-parties" 
                        className="block p-3 rounded-lg bg-white/60 dark:bg-gray-800/60 hover:bg-white dark:hover:bg-gray-800 transition-all text-center text-blue-600 dark:text-blue-400"
                    >
                        View All Parties
                    </Link>
                </div>

                {/* Political Movements Card */}
                <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 flex items-center gap-2">
                        <Users className="w-6 h-6" />
                        Political Movements
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Explore the major movements that changed American politics, from Civil Rights 
                        to the Tea Party. Understand how grassroots activism shapes our nation&apos;s 
                        political landscape.
                    </p>
                    <Link 
                        href="/guides/political-movements" 
                        className="block p-3 rounded-lg bg-white/60 dark:bg-gray-800/60 hover:bg-white dark:hover:bg-gray-800 transition-all text-center text-blue-600 dark:text-blue-400"
                    >
                        View All Movements
                    </Link>
                </div>

                {/* Electoral College Card */}
                <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 flex items-center gap-2">
                        <Building2 className="w-6 h-6" />
                        Electoral College
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Understand how America elects its president through the Electoral College system. 
                        Learn about its history, how it works, and why it matters in modern elections.
                    </p>
                    <Link 
                        href="/guides/electoral-college" 
                        className="block p-3 rounded-lg bg-white/60 dark:bg-gray-800/60 hover:bg-white dark:hover:bg-gray-800 transition-all text-center text-blue-600 dark:text-blue-400"
                    >
                        View Electoral College Guide
                    </Link>
                </div>

                {/* Voting Guide Card */}
                <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 flex items-center gap-2">
                        <Vote className="w-6 h-6" />
                        Voting Guide
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Everything you need to know about voting in American elections. From registration 
                        and voting rights to the different types of elections and how they work.
                    </p>
                    <Link 
                        href="/guides/voting" 
                        className="block p-3 rounded-lg bg-white/60 dark:bg-gray-800/60 hover:bg-white dark:hover:bg-gray-800 transition-all text-center text-blue-600 dark:text-blue-400"
                    >
                        View Voting Guide
                    </Link>
                </div>
            </div>

            <div className="mt-12 p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">About These Guides</h2>
                <p className="text-gray-600 dark:text-gray-300">
                    These guides help explain how American politics and government work. We try to keep things 
                    clear and simple, while still being accurate. We&apos;re constantly adding new topics and 
                    updating existing ones to help you better understand our political system.
                </p>
            </div>
        </div>
    )
} 