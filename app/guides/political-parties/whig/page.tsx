export default function WhigPartyPage() {
    return (
        <article className="max-w-4xl mx-auto px-4 py-8 prose dark:prose-invert prose-blue">
            <h1>The Whig Party</h1>
            
            <div className="not-prose mb-8 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <p className="text-sm text-purple-800 dark:text-purple-200">
                    Active: 1833-1856. The Whig Party formed in opposition to Andrew Jackson&apos;s policies, 
                    championing modernization and moral reform in American society.
                </p>
            </div>

            <h2>Origins and Name</h2>
            <p>
                Named after the British Whigs who opposed absolute monarchy, the American Whig Party emerged 
                in opposition to President Andrew Jackson, whom they viewed as an authoritarian &quot;King Andrew.&quot;
            </p>

            <h2>Core Principles</h2>
            <ul>
                <li>Congressional supremacy over presidential power</li>
                <li>Modernization and economic development</li>
                <li>Federal funding for infrastructure (&quot;internal improvements&quot;)</li>
                <li>Protective tariffs</li>
                <li>National Bank</li>
                <li>Public education</li>
                <li>Moral reform and temperance</li>
            </ul>

            <h2>Key Leaders</h2>
            <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Henry Clay</h3>
                    <p className="text-sm">Party founder, &quot;The Great Compromiser,&quot; architect of the American System</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Daniel Webster</h3>
                    <p className="text-sm">Famous orator, champion of nationalism and the Union</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">William Henry Harrison</h3>
                    <p className="text-sm">First Whig president (1841), died after one month in office</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Zachary Taylor</h3>
                    <p className="text-sm">Military hero and second successful Whig president (1849-1850)</p>
                </div>
            </div>

            <h2>The American System</h2>
            <p>
                Henry Clay&apos;s comprehensive economic program included:
            </p>
            <div className="not-prose grid gap-4 mb-8">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Infrastructure</h3>
                    <p className="text-sm">Federal funding for roads, canals, and railroads</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Protective Tariffs</h3>
                    <p className="text-sm">To promote American manufacturing</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">National Bank</h3>
                    <p className="text-sm">To provide stable currency and promote commerce</p>
                </div>
            </div>

            <h2>Electoral Success</h2>
            <div className="not-prose">
                <div className="relative">
                    <div className="absolute h-full w-0.5 bg-purple-200 dark:bg-purple-800 left-2.5"></div>
                    <div className="space-y-6">
                        <div className="relative pl-8">
                            <div className="absolute left-0 w-5 h-5 rounded-full bg-purple-500"></div>
                            <h3 className="text-lg font-bold">1840</h3>
                            <p className="text-sm">William Henry Harrison elected president</p>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute left-0 w-5 h-5 rounded-full bg-purple-500"></div>
                            <h3 className="text-lg font-bold">1848</h3>
                            <p className="text-sm">Zachary Taylor elected president</p>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute left-0 w-5 h-5 rounded-full bg-purple-500"></div>
                            <h3 className="text-lg font-bold">1850</h3>
                            <p className="text-sm">Millard Fillmore becomes president after Taylor&apos;s death</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2>Decline and Dissolution</h2>
            <p>
                The party collapsed in the 1850s due to several factors:
            </p>
            <ul>
                <li>Internal divisions over slavery</li>
                <li>Compromise of 1850 controversy</li>
                <li>Rise of the Republican Party</li>
                <li>Death of key leaders (Clay and Webster in 1852)</li>
                <li>Kansas-Nebraska Act of 1854</li>
            </ul>

            <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h2 className="mt-0">Legacy</h2>
                <p>
                    Though the party dissolved, many Whig principles and members transferred to the new Republican Party. 
                    Their vision of modernization, economic development, and moral reform influenced American politics 
                    for generations. Abraham Lincoln began his political career as a Whig before becoming a Republican.
                </p>
                <p>
                    The Whigs&apos; emphasis on checks and balances, opposition to executive overreach, and support for 
                    economic development continue to influence American political discourse.
                </p>
            </div>
        </article>
    )
} 