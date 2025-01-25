import Link from "next/link";

export default function PoliticalMovementsPage() {
    return (
        <article className="max-w-4xl mx-auto px-4 py-8 prose dark:prose-invert prose-blue">
            <h1>Major Political Movements in U.S. History</h1>
            
            <div className="not-prose mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                    Political movements have often driven significant changes in American politics, 
                    influencing or transforming existing parties rather than forming new ones.
                </p>
            </div>

            <h2>Modern Era (2000-Present)</h2>
            <div className="not-prose grid gap-4 mb-8">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg transition-all hover:border-blue-500 dark:hover:border-blue-400 group">
                    <Link href="/guides/political-movements/tea-party" className="no-underline">
                        <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            Tea Party Movement (2009-2016)
                        </h3>
                    </Link>
                    <p className="text-sm mb-2">Associated with: Republican Party</p>
                    <ul className="list-disc pl-5 mb-0">
                        <li>Fiscal conservatism</li>
                        <li>Opposition to government spending</li>
                        <li>Constitutional originalism</li>
                        <li>Opposition to Affordable Care Act</li>
                    </ul>
                </div>

                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <Link href="/guides/political-movements/progressive"><h3 className="text-lg font-bold mb-2">Progressive Movement (2016-Present)</h3></Link>
                    <p className="text-sm mb-2">Associated with: Democratic Party</p>
                    <ul className="list-disc pl-5 mb-0">
                        <li>Medicare for All</li>
                        <li>Green New Deal</li>
                        <li>Economic inequality focus</li>
                        <li>College debt relief</li>
                    </ul>
                </div>

                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <Link href="/guides/political-movements/maga"><h3 className="text-lg font-bold mb-2">MAGA Movement (2015-Present)</h3></Link>
                    <p className="text-sm mb-2">Associated with: Republican Party</p>
                    <ul className="list-disc pl-5 mb-0">
                        <li>America First policies</li>
                        <li>Immigration restriction</li>
                        <li>Trade protectionism</li>
                        <li>Opposition to establishment politics</li>
                    </ul>
                </div>
            </div>

            <h2>Late 20th Century</h2>
            <div className="not-prose grid gap-4 mb-8">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <Link href="/guides/political-movements/religious-right"><h3 className="text-lg font-bold mb-2">Religious Right (1970s-Present)</h3></Link>
                    <p className="text-sm mb-2">Associated with: Republican Party</p>
                    <ul className="list-disc pl-5 mb-0">
                        <li>Social conservatism</li>
                        <li>Pro-life advocacy</li>
                        <li>School prayer support</li>
                        <li>Traditional family values</li>
                    </ul>
                </div>

                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <Link href="/guides/political-movements/new-left"><h3 className="text-lg font-bold mb-2">New Left (1960s-1970s)</h3></Link>
                    <p className="text-sm mb-2">Associated with: Democratic Party</p>
                    <ul className="list-disc pl-5 mb-0">
                        <li>Anti-war activism</li>
                        <li>Civil rights</li>
                        <li>Feminism</li>
                        <li>Environmentalism</li>
                    </ul>
                </div>
            </div>

            <h2>Early-Mid 20th Century</h2>
            <div className="not-prose grid gap-4 mb-8">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <Link href="/guides/political-movements/civil-rights"><h3 className="text-lg font-bold mb-2">Civil Rights Movement (1954-1968)</h3></Link>
                    <p className="text-sm mb-2">Associated with: Initially bipartisan, later Democratic Party</p>
                    <ul className="list-disc pl-5 mb-0">
                        <li>Racial equality</li>
                        <li>Voting rights</li>
                        <li>Desegregation</li>
                        <li>Economic justice</li>
                    </ul>
                </div>

                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <Link href="/guides/political-movements/progressive"><h3 className="text-lg font-bold mb-2">Progressive Movement (1890s-1920s)</h3></Link>
                    <p className="text-sm mb-2">Associated with: Both Republican and Democratic Parties</p>
                    <ul className="list-disc pl-5 mb-0">
                        <li>Anti-corruption</li>
                        <li>Labor rights</li>
                        <li>Women&apos;s suffrage</li>
                        <li>Trust-busting</li>
                    </ul>
                </div>
            </div>

            <h2>19th Century</h2>
            <div className="not-prose grid gap-4 mb-8">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <Link href="/guides/political-movements/abolitionist"><h3 className="text-lg font-bold mb-2">Abolitionist Movement (1830s-1860s)</h3></Link>
                    <p className="text-sm mb-2">Associated with: Republican Party, Free Soil Party</p>
                    <ul className="list-disc pl-5 mb-0">
                        <li>End to slavery</li>
                        <li>Equal rights</li>
                        <li>Social reform</li>
                    </ul>
                </div>

                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <Link href="/guides/political-movements/temperance"><h3 className="text-lg font-bold mb-2">Temperance Movement (1820s-1920s)</h3></Link>
                    <p className="text-sm mb-2">Associated with: Both major parties</p>
                    <ul className="list-disc pl-5 mb-0">
                        <li>Prohibition of alcohol</li>
                        <li>Social reform</li>
                        <li>Women&apos;s rights</li>
                    </ul>
                </div>
            </div>

            <h2>18th Century</h2>
            <div className="not-prose grid gap-4 mb-8">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <Link href="/guides/political-movements/anti-federalist"><h3 className="text-lg font-bold mb-2">Anti-Federalist Movement (1780s)</h3></Link>
                    <p className="text-sm mb-2">Associated with: Later Democratic-Republican Party</p>
                    <ul className="list-disc pl-5 mb-0">
                        <li>Opposition to Constitution without Bill of Rights</li>
                        <li>States&apos; rights advocacy</li>
                        <li>Fear of centralized power</li>
                        <li>Protection of individual liberties</li>
                    </ul>
                </div>

                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <Link href="/guides/political-movements/sons-of-liberty"><h3 className="text-lg font-bold mb-2">Sons of Liberty (1760s-1770s)</h3></Link>
                    <p className="text-sm mb-2">Associated with: Pre-party Revolutionary movement</p>
                    <ul className="list-disc pl-5 mb-0">
                        <li>Opposition to British taxation</li>
                        <li>Colonial rights</li>
                        <li>Revolutionary organization</li>
                        <li>Protest coordination (Boston Tea Party)</li>
                    </ul>
                </div>

                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <Link href="/guides/political-movements/democratic-republican-societies"><h3 className="text-lg font-bold mb-2">Democratic-Republican Societies (1790s)</h3></Link>
                    <p className="text-sm mb-2">Associated with: Democratic-Republican Party</p>
                    <ul className="list-disc pl-5 mb-0">
                        <li>Opposition to aristocratic tendencies</li>
                        <li>Support for French Revolution</li>
                        <li>Democratic reforms</li>
                        <li>Opposition to Hamilton&apos;s financial system</li>
                    </ul>
                </div>

                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <Link href="/guides/political-movements/regulators"><h3 className="text-lg font-bold mb-2">Regulators Movement (1760s-1771)</h3></Link>
                    <p className="text-sm mb-2">Associated with: Pre-Revolutionary colonial politics</p>
                    <ul className="list-disc pl-5 mb-0">
                        <li>Opposition to colonial corruption</li>
                        <li>Tax reform</li>
                        <li>Local government accountability</li>
                        <li>Frontier settlers&apos; rights</li>
                    </ul>
                </div>
            </div>

            <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h2 className="mt-0">Impact on American Politics</h2>
                <p>
                    These movements often achieved their goals by influencing existing parties rather than 
                    forming new ones. Many significant changes in American politics - from abolition to civil 
                    rights to environmental protection - began as grassroots movements before being adopted 
                    by major parties.
                </p>
            </div>
        </article>
    )
} 