export default function ElectoralCollegePage() {
    return (
        <article className="max-w-4xl mx-auto px-4 py-8 prose dark:prose-invert prose-blue">
            <h1>Understanding the Electoral College</h1>
            
            <div className="not-prose mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                    Quick Facts: The Electoral College consists of 538 electors. A candidate needs at least 270 electoral votes to win the presidency.
                </p>
            </div>

            <h2>What is the Electoral College?</h2>
            <p>
                The Electoral College is the system used in United States presidential elections where electors, 
                representing each state, cast the official votes for president. This system was established by 
                Article II, Section 1, Clause 2 of the U.S. Constitution and modified by the 12th and 23rd Amendments.
            </p>

            <h2>How Does it Work?</h2>
            <ol>
                <li>Each state gets electoral votes equal to its total number of Senators (2) and Representatives (varies by population)</li>
                <li>The District of Columbia gets 3 electoral votes (23rd Amendment)</li>
                <li>In most states, the candidate who wins the popular vote gets all of that state's electoral votes</li>
                <li>Maine and Nebraska use a district system, splitting their electoral votes</li>
            </ol>

            <h2>Electoral Votes by State</h2>
            <div className="not-prose overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead>
                        <tr className="bg-gray-50 dark:bg-gray-800">
                            <th className="px-4 py-2">State</th>
                            <th className="px-4 py-2">Electoral Votes</th>
                            <th className="px-4 py-2">Population (2020)</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        <tr>
                            <td className="px-4 py-2">California</td>
                            <td className="px-4 py-2">54</td>
                            <td className="px-4 py-2">39.5M</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">Texas</td>
                            <td className="px-4 py-2">40</td>
                            <td className="px-4 py-2">29.1M</td>
                        </tr>
                        {/* Add more states */}
                    </tbody>
                </table>
            </div>

            <h2>Historical Context</h2>
            <p>
                The Electoral College was created as a compromise between election of the president by a vote in Congress 
                and election of the president by a popular vote of qualified citizens. The Founding Fathers established 
                this system to balance the interests of both large and small states.
            </p>

            <h2>Recent Examples</h2>
            <ul>
                <li>2020: Joe Biden (306) def. Donald Trump (232)</li>
                <li>2016: Donald Trump (304) def. Hillary Clinton (227)</li>
                <li>2012: Barack Obama (332) def. Mitt Romney (206)</li>
                <li>2008: Barack Obama (365) def. John McCain (173)</li>
            </ul>

            <h2>Common Questions</h2>
            <div className="space-y-4">
                <details className="not-prose p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <summary className="font-semibold cursor-pointer">
                        Can a candidate win without the popular vote?
                    </summary>
                    <p className="mt-2">
                        Yes. This has happened five times in U.S. history: 1824, 1876, 1888, 2000, and 2016.
                    </p>
                </details>
                
                <details className="not-prose p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <summary className="font-semibold cursor-pointer">
                        What happens if no candidate reaches 270 electoral votes?
                    </summary>
                    <p className="mt-2">
                        The House of Representatives chooses the president from among the top three candidates, 
                        with each state delegation getting one vote.
                    </p>
                </details>
            </div>
        </article>
    )
} 