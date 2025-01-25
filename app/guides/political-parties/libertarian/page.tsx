export default function LibertarianPartyPage() {
    return (
        <article className="max-w-4xl mx-auto px-4 py-8 prose dark:prose-invert prose-blue">
            <h1>The Libertarian Party</h1>
            
            <div className="not-prose mb-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    Active: 1971-present. The Libertarian Party is America's third-largest political party, 
                    advocating for minimal government, free markets, civil liberties, and non-interventionist foreign policy.
                </p>
            </div>

            <h2>Core Principles</h2>
            <div className="not-prose grid gap-4 mb-8">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Individual Rights</h3>
                    <ul className="list-disc pl-5 mb-0">
                        <li>Personal freedom and responsibility</li>
                        <li>Property rights</li>
                        <li>Privacy rights</li>
                        <li>Second Amendment rights</li>
                    </ul>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Economic Freedom</h3>
                    <ul className="list-disc pl-5 mb-0">
                        <li>Free market capitalism</li>
                        <li>Opposition to taxation</li>
                        <li>Deregulation</li>
                        <li>End the Federal Reserve</li>
                    </ul>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Limited Government</h3>
                    <ul className="list-disc pl-5 mb-0">
                        <li>Reduce federal power</li>
                        <li>End drug prohibition</li>
                        <li>Non-interventionist foreign policy</li>
                        <li>Eliminate government subsidies</li>
                    </ul>
                </div>
            </div>

            <h2>Notable Presidential Candidates</h2>
            <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Gary Johnson (2012, 2016)</h3>
                    <p className="text-sm">Former New Mexico Governor. Received 3.3% of popular vote in 2016, the party's best showing.</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Ron Paul (1988)</h3>
                    <p className="text-sm">Former U.S. Representative, later influenced Republican Party as presidential candidate.</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Jo Jorgensen (2020)</h3>
                    <p className="text-sm">Academic and entrepreneur, received 1.2% of popular vote.</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Ed Clark (1980)</h3>
                    <p className="text-sm">Received 1.1% of popular vote, record-setting at the time.</p>
                </div>
            </div>

            <h2>Electoral Performance</h2>
            <div className="not-prose">
                <div className="relative">
                    <div className="absolute h-full w-0.5 bg-yellow-200 dark:bg-yellow-800 left-2.5"></div>
                    <div className="space-y-6">
                        <div className="relative pl-8">
                            <div className="absolute left-0 w-5 h-5 rounded-full bg-yellow-500"></div>
                            <h3 className="text-lg font-bold">1971</h3>
                            <p className="text-sm">Party founded in Colorado</p>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute left-0 w-5 h-5 rounded-full bg-yellow-500"></div>
                            <h3 className="text-lg font-bold">1980</h3>
                            <p className="text-sm">First major electoral showing with Ed Clark</p>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute left-0 w-5 h-5 rounded-full bg-yellow-500"></div>
                            <h3 className="text-lg font-bold">2012</h3>
                            <p className="text-sm">Gary Johnson receives 1% of popular vote</p>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute left-0 w-5 h-5 rounded-full bg-yellow-500"></div>
                            <h3 className="text-lg font-bold">2016</h3>
                            <p className="text-sm">Record 3.3% of popular vote</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2>Current Platform Highlights</h2>
            <ul>
                <li>End the war on drugs</li>
                <li>Protect civil liberties</li>
                <li>Reform immigration system</li>
                <li>Reduce military intervention</li>
                <li>Support free trade</li>
                <li>Protect gun rights</li>
                <li>Reform healthcare through free market</li>
                <li>Reduce government spending</li>
            </ul>

            <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h2 className="mt-0">Current Status</h2>
                <p>
                    The Libertarian Party maintains ballot access in most states and regularly fields candidates 
                    at all levels of government. While it hasn't won major national offices, it has succeeded in 
                    local elections and has influenced national political discourse on issues of individual liberty, 
                    government overreach, and fiscal policy.
                </p>
                <p>
                    The party continues to advocate for reducing government power and protecting individual rights, 
                    often serving as a bridge between conservative fiscal policy and liberal social policy.
                </p>
            </div>
        </article>
    )
} 