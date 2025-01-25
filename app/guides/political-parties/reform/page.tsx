export default function ReformPartyPage() {
    return (
        <article className="max-w-4xl mx-auto px-4 py-8 prose dark:prose-invert prose-blue">
            <h1>The Reform Party</h1>
            
            <div className="not-prose mb-8 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <p className="text-sm text-purple-800 dark:text-purple-200">
                    Active: 1995-present. Founded by Ross Perot, the Reform Party emerged as a centrist 
                    alternative focused on fiscal responsibility, political reform, and trade policy.
                </p>
            </div>

            <h2>Origins and Formation</h2>
            <p>
                The Reform Party grew out of Ross Perot's independent 1992 presidential campaign, which received 
                19% of the popular vote - the highest third-party result since 1912. Perot officially founded 
                the party in 1995 for his 1996 presidential run.
            </p>

            <h2>Core Principles</h2>
            <div className="not-prose grid gap-4 mb-8">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Economic Reform</h3>
                    <ul className="list-disc pl-5 mb-0">
                        <li>Balanced budget</li>
                        <li>Deficit reduction</li>
                        <li>Trade reform</li>
                        <li>Campaign finance reform</li>
                    </ul>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Political Reform</h3>
                    <ul className="list-disc pl-5 mb-0">
                        <li>Term limits</li>
                        <li>Lobbying restrictions</li>
                        <li>Direct democracy initiatives</li>
                        <li>Electoral reform</li>
                    </ul>
                </div>
            </div>

            <h2>Notable Candidates</h2>
            <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Ross Perot (1996)</h3>
                    <p className="text-sm">Party founder, received 8.4% of popular vote</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Pat Buchanan (2000)</h3>
                    <p className="text-sm">Conservative commentator, controversial nomination led to party split</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Jesse Ventura</h3>
                    <p className="text-sm">Former Minnesota Governor (1999-2003), most successful Reform Party officeholder</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Donald Trump</h3>
                    <p className="text-sm">Briefly sought Reform Party nomination in 2000 before withdrawing</p>
                </div>
            </div>

            <h2>Key Moments</h2>
            <div className="not-prose">
                <div className="relative">
                    <div className="absolute h-full w-0.5 bg-purple-200 dark:bg-purple-800 left-2.5"></div>
                    <div className="space-y-6">
                        <div className="relative pl-8">
                            <div className="absolute left-0 w-5 h-5 rounded-full bg-purple-500"></div>
                            <h3 className="text-lg font-bold">1995</h3>
                            <p className="text-sm">Party founded by Ross Perot</p>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute left-0 w-5 h-5 rounded-full bg-purple-500"></div>
                            <h3 className="text-lg font-bold">1998</h3>
                            <p className="text-sm">Jesse Ventura elected Governor of Minnesota</p>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute left-0 w-5 h-5 rounded-full bg-purple-500"></div>
                            <h3 className="text-lg font-bold">2000</h3>
                            <p className="text-sm">Internal conflicts lead to party split</p>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute left-0 w-5 h-5 rounded-full bg-purple-500"></div>
                            <h3 className="text-lg font-bold">2004</h3>
                            <p className="text-sm">Party influence significantly diminished</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2>Major Issues and Campaigns</h2>
            <ul>
                <li>Opposition to NAFTA and free trade agreements</li>
                <li>National debt reduction</li>
                <li>Government reform and accountability</li>
                <li>Campaign finance reform</li>
                <li>Direct democracy initiatives</li>
            </ul>

            <h2>Legacy and Impact</h2>
            <div className="not-prose grid gap-4 mb-8">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Trade Policy</h3>
                    <p className="text-sm">Influenced debate on NAFTA and globalization</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Deficit Politics</h3>
                    <p className="text-sm">Brought national debt into political spotlight</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Electoral Reform</h3>
                    <p className="text-sm">Advanced discussion of alternative voting methods</p>
                </div>
            </div>

            <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h2 className="mt-0">Current Status</h2>
                <p>
                    While still technically active, the Reform Party has significantly declined from its 1990s 
                    peak. However, many of its core issues - particularly regarding trade policy, political reform, 
                    and fiscal responsibility - continue to influence American political discourse.
                </p>
                <p>
                    The party's emphasis on populist economic nationalism and political outsider status 
                    foreshadowed later political developments, including aspects of both the Tea Party movement 
                    and Donald Trump's 2016 presidential campaign.
                </p>
            </div>
        </article>
    )
} 