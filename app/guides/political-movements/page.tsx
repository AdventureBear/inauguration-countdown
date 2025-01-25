import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function PoliticalMovementsPage() {
    const cardStyle = "relative p-4 border border-gray-200 dark:border-gray-700 rounded-lg transition-all hover:border-blue-500 dark:hover:border-blue-400 group";
    const readMoreStyle = "absolute top-4 right-4 text-sm text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 flex items-center gap-1 no-underline";
    const titleStyle = "text-lg font-bold mb-2 text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300";

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
                <div className={cardStyle}>
                    <Link href="/guides/political-movements/tea-party" className={readMoreStyle}>
                        Read more <ArrowUpRight className="w-4 h-4" />
                    </Link>
                    <Link href="/guides/political-movements/tea-party" className="no-underline">
                        <h3 className={titleStyle}>Tea Party Movement (2009-2016)</h3>
                    </Link>
                    <p className="text-sm mb-2">Associated with: Republican Party</p>
                    <ul className="list-disc pl-5 mb-0">
                        <li>Fiscal conservatism</li>
                        <li>Opposition to government spending</li>
                        <li>Constitutional originalism</li>
                        <li>Opposition to Affordable Care Act</li>
                    </ul>
                </div>

                <div className={cardStyle}>
                    <Link href="/guides/political-movements/modern-progressive" className={readMoreStyle}>
                        Read more <ArrowUpRight className="w-4 h-4" />
                    </Link>
                    <Link href="/guides/political-movements/modern-progressive" className="no-underline">
                        <h3 className={titleStyle}>Progressive Movement (2016-Present)</h3>
                    </Link>
                    <p className="text-sm mb-2">Associated with: Democratic Party</p>
                    <ul className="list-disc pl-5 mb-0">
                        <li>Medicare for All</li>
                        <li>Green New Deal</li>
                        <li>Economic inequality focus</li>
                        <li>College debt relief</li>
                    </ul>
                </div>

                <div className={cardStyle}>
                    <Link href="/guides/political-movements/maga" className={readMoreStyle}>
                        Read more <ArrowUpRight className="w-4 h-4" />
                    </Link>
                    <Link href="/guides/political-movements/maga" className="no-underline">
                        <h3 className={titleStyle}>MAGA Movement (2015-Present)</h3>
                    </Link>
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
                <div className={cardStyle}>
                    <Link href="/guides/political-movements/religious-right" className={readMoreStyle}>
                        Read more <ArrowUpRight className="w-4 h-4" />
                    </Link>
                    <Link href="/guides/political-movements/religious-right" className="no-underline">
                        <h3 className={titleStyle}>Religious Right (1970s-Present)</h3>
                    </Link>
                    <p className="text-sm mb-2">Associated with: Republican Party</p>
                    <ul className="list-disc pl-5 mb-0">
                        <li>Social conservatism</li>
                        <li>Pro-life advocacy</li>
                        <li>School prayer support</li>
                        <li>Traditional family values</li>
                    </ul>
                </div>

                <div className={cardStyle}>
                    <Link href="/guides/political-movements/new-left" className={readMoreStyle}>
                        Read more <ArrowUpRight className="w-4 h-4" />
                    </Link>
                    <Link href="/guides/political-movements/new-left" className="no-underline">
                        <h3 className={titleStyle}>New Left (1960s-1970s)</h3>
                    </Link>
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
                <div className={cardStyle}>
                    <Link href="/guides/political-movements/civil-rights" className={readMoreStyle}>
                        Read more <ArrowUpRight className="w-4 h-4" />
                    </Link>
                    <Link href="/guides/political-movements/civil-rights" className="no-underline">
                        <h3 className={titleStyle}>Civil Rights Movement (1954-1968)</h3>
                    </Link>
                    <p className="text-sm mb-2">Associated with: Initially bipartisan, later Democratic Party</p>
                    <ul className="list-disc pl-5 mb-0">
                        <li>Racial equality</li>
                        <li>Voting rights</li>
                        <li>Desegregation</li>
                        <li>Economic justice</li>
                    </ul>
                </div>

                <div className={cardStyle}>
                    <Link href="/guides/political-movements/progressive" className={readMoreStyle}>
                        Read more <ArrowUpRight className="w-4 h-4" />
                    </Link>
                    <Link href="/guides/political-movements/progressive" className="no-underline">
                        <h3 className={titleStyle}>Progressive Movement (1890s-1920s)</h3>
                    </Link>
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
                <div className={cardStyle}>
                    <Link href="/guides/political-movements/abolitionist" className={readMoreStyle}>
                        Read more <ArrowUpRight className="w-4 h-4" />
                    </Link>
                    <Link href="/guides/political-movements/abolitionist" className="no-underline">
                        <h3 className={titleStyle}>Abolitionist Movement (1830s-1860s)</h3>
                    </Link>
                    <p className="text-sm mb-2">Associated with: Republican Party, Free Soil Party</p>
                    <ul className="list-disc pl-5 mb-0">
                        <li>End to slavery</li>
                        <li>Equal rights</li>
                        <li>Social reform</li>
                    </ul>
                </div>

                <div className={cardStyle}>
                    <Link href="/guides/political-movements/temperance" className={readMoreStyle}>
                        Read more <ArrowUpRight className="w-4 h-4" />
                    </Link>
                    <Link href="/guides/political-movements/temperance" className="no-underline">
                        <h3 className={titleStyle}>Temperance Movement (1820s-1920s)</h3>
                    </Link>
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
                <div className={cardStyle}>
                    <Link href="/guides/political-movements/anti-federalist" className={readMoreStyle}>
                        Read more <ArrowUpRight className="w-4 h-4" />
                    </Link>
                    <Link href="/guides/political-movements/anti-federalist" className="no-underline">
                        <h3 className={titleStyle}>Anti-Federalist Movement (1780s)</h3>
                    </Link>
                    <p className="text-sm mb-2">Associated with: Later Democratic-Republican Party</p>
                    <ul className="list-disc pl-5 mb-0">
                        <li>Opposition to Constitution without Bill of Rights</li>
                        <li>States&apos; rights advocacy</li>
                        <li>Fear of centralized power</li>
                        <li>Protection of individual liberties</li>
                    </ul>
                </div>

                <div className={cardStyle}>
                    <Link href="/guides/political-movements/sons-of-liberty" className={readMoreStyle}>
                        Read more <ArrowUpRight className="w-4 h-4" />
                    </Link>
                    <Link href="/guides/political-movements/sons-of-liberty" className="no-underline">
                        <h3 className={titleStyle}>Sons of Liberty (1760s-1770s)</h3>
                    </Link>
                    <p className="text-sm mb-2">Associated with: Pre-party Revolutionary movement</p>
                    <ul className="list-disc pl-5 mb-0">
                        <li>Opposition to British taxation</li>
                        <li>Colonial rights</li>
                        <li>Revolutionary organization</li>
                        <li>Protest coordination (Boston Tea Party)</li>
                    </ul>
                </div>

                <div className={cardStyle}>
                    <Link href="/guides/political-movements/democratic-republican-societies" className={readMoreStyle}>
                        Read more <ArrowUpRight className="w-4 h-4" />
                    </Link>
                    <Link href="/guides/political-movements/democratic-republican-societies" className="no-underline">
                        <h3 className={titleStyle}>Democratic-Republican Societies (1790s)</h3>
                    </Link>
                    <p className="text-sm mb-2">Associated with: Democratic-Republican Party</p>
                    <ul className="list-disc pl-5 mb-0">
                        <li>Opposition to aristocratic tendencies</li>
                        <li>Support for French Revolution</li>
                        <li>Democratic reforms</li>
                        <li>Opposition to Hamilton&apos;s financial system</li>
                    </ul>
                </div>

                <div className={cardStyle}>
                    <Link href="/guides/political-movements/regulators" className={readMoreStyle}>
                        Read more <ArrowUpRight className="w-4 h-4" />
                    </Link>
                    <Link href="/guides/political-movements/regulators" className="no-underline">
                        <h3 className={titleStyle}>Regulators Movement (1760s-1771)</h3>
                    </Link>
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