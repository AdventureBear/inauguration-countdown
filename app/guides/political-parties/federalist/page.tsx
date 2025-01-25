export default function FederalistPartyPage() {
    return (
        <article className="max-w-4xl mx-auto px-4 py-8 prose dark:prose-invert prose-blue">
            <h1>The Federalist Party</h1>
            
            <div className="not-prose mb-8 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <p className="text-sm text-gray-800 dark:text-gray-200">
                    Active: 1789-1824. America&apos;s first political party, the Federalists championed a strong central 
                    government and close ties with Great Britain.
                </p>
            </div>

            <h2>Origins and Philosophy</h2>
            <p>
                The Federalist Party emerged from the coalition that supported the ratification of the Constitution. 
                Led by Alexander Hamilton, John Adams, and other founding fathers, they believed in:
            </p>
            <ul>
                <li>Strong federal government</li>
                <li>National banking system</li>
                <li>Industrial and commercial development</li>
                <li>Pro-British foreign policy</li>
                <li>Rule by educated elites</li>
            </ul>

            <h2>Key Achievements</h2>
            <div className="not-prose grid gap-4 mb-8">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Financial System</h3>
                    <p className="text-sm">Established the First Bank of the United States and federal taxation</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Foreign Policy</h3>
                    <p className="text-sm">Jay&apos;s Treaty with Britain, maintaining peace and trade</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Judicial System</h3>
                    <p className="text-sm">Established federal courts and judicial review</p>
                </div>
            </div>

            <h2>Notable Leaders</h2>
            <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Alexander Hamilton</h3>
                    <p className="text-sm">First Secretary of Treasury, architect of financial system</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">John Adams</h3>
                    <p className="text-sm">Second President, only Federalist to hold presidency</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">John Marshall</h3>
                    <p className="text-sm">Chief Justice, established judicial review</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">John Jay</h3>
                    <p className="text-sm">First Chief Justice, negotiated Jay&apos;s Treaty</p>
                </div>
            </div>

            <h2>Decline and Legacy</h2>
            <div className="mb-6">
                <p>
                    The party declined due to several factors:
                </p>
                <ul>
                    <li>Opposition to War of 1812</li>
                    <li>Hartford Convention and accusations of treason</li>
                    <li>Rise of Democratic-Republicans</li>
                    <li>Perception as elitist and anti-democratic</li>
                </ul>
            </div>

            <div className="not-prose">
                <div className="relative">
                    <div className="absolute h-full w-0.5 bg-gray-200 dark:bg-gray-700 left-2.5"></div>
                    <div className="space-y-6">
                        <div className="relative pl-8">
                            <div className="absolute left-0 w-5 h-5 rounded-full bg-gray-500"></div>
                            <h3 className="text-lg font-bold">1787-88</h3>
                            <p className="text-sm">Support for Constitution ratification</p>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute left-0 w-5 h-5 rounded-full bg-gray-500"></div>
                            <h3 className="text-lg font-bold">1789-1797</h3>
                            <p className="text-sm">Hamilton&apos;s financial system implemented</p>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute left-0 w-5 h-5 rounded-full bg-gray-500"></div>
                            <h3 className="text-lg font-bold">1798</h3>
                            <p className="text-sm">Alien and Sedition Acts controversy</p>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute left-0 w-5 h-5 rounded-full bg-gray-500"></div>
                            <h3 className="text-lg font-bold">1814</h3>
                            <p className="text-sm">Hartford Convention marks beginning of end</p>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute left-0 w-5 h-5 rounded-full bg-gray-500"></div>
                            <h3 className="text-lg font-bold">1824</h3>
                            <p className="text-sm">Party effectively dissolves</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h2 className="mt-0">Historical Impact</h2>
                <p>
                    Though short-lived, the Federalist Party established many foundational elements of American 
                    government, including a strong federal system, national financial infrastructure, and an 
                    independent judiciary. Their vision of a strong central government continues to influence 
                    American political debate.
                </p>
            </div>
        </article>
    )
} 