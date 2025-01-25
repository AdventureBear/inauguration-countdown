export default function GreenPartyPage() {
    return (
        <article className="max-w-4xl mx-auto px-4 py-8 prose dark:prose-invert prose-blue">
            <h1>The Green Party</h1>
            
            <div className="not-prose mb-8 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <p className="text-sm text-green-800 dark:text-green-200">
                    Active: 1984-present. The Green Party of the United States focuses on environmentalism, 
                    social justice, grassroots democracy, and non-violence.
                </p>
            </div>

            <h2>Four Pillars</h2>
            <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Ecological Wisdom</h3>
                    <p className="text-sm">Environmental protection, sustainability, renewable energy</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Social Justice</h3>
                    <p className="text-sm">Economic equality, racial justice, feminism, LGBTQ+ rights</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Grassroots Democracy</h3>
                    <p className="text-sm">Direct democracy, electoral reform, decentralization</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Non-Violence</h3>
                    <p className="text-sm">Peace, disarmament, conflict resolution</p>
                </div>
            </div>

            <h2>Key Policy Positions</h2>
            <div className="not-prose grid gap-4 mb-8">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Environmental</h3>
                    <ul className="list-disc pl-5 mb-0">
                        <li>Green New Deal</li>
                        <li>100% renewable energy by 2030</li>
                        <li>Ban fracking</li>
                        <li>Carbon tax</li>
                    </ul>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Economic</h3>
                    <ul className="list-disc pl-5 mb-0">
                        <li>Universal basic income</li>
                        <li>Medicare for All</li>
                        <li>Free public education</li>
                        <li>Break up big banks</li>
                    </ul>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Political Reform</h3>
                    <ul className="list-disc pl-5 mb-0">
                        <li>Ranked choice voting</li>
                        <li>Abolish Electoral College</li>
                        <li>Public campaign financing</li>
                        <li>End corporate personhood</li>
                    </ul>
                </div>
            </div>

            <h2>Notable Presidential Candidates</h2>
            <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Ralph Nader (2000)</h3>
                    <p className="text-sm">Consumer advocate. Received 2.7% of popular vote, often discussed in context of Bush v. Gore election.</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Jill Stein (2012, 2016)</h3>
                    <p className="text-sm">Physician and activist. Received 1.1% of popular vote in 2016.</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Howie Hawkins (2020)</h3>
                    <p className="text-sm">Party co-founder and trade unionist.</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Cynthia McKinney (2008)</h3>
                    <p className="text-sm">Former Democratic Congresswoman from Georgia.</p>
                </div>
            </div>

            <h2>Electoral History</h2>
            <div className="not-prose">
                <div className="relative">
                    <div className="absolute h-full w-0.5 bg-green-200 dark:bg-green-800 left-2.5"></div>
                    <div className="space-y-6">
                        <div className="relative pl-8">
                            <div className="absolute left-0 w-5 h-5 rounded-full bg-green-500"></div>
                            <h3 className="text-lg font-bold">1984</h3>
                            <p className="text-sm">Party founded</p>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute left-0 w-5 h-5 rounded-full bg-green-500"></div>
                            <h3 className="text-lg font-bold">1996</h3>
                            <p className="text-sm">First presidential campaign (Ralph Nader)</p>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute left-0 w-5 h-5 rounded-full bg-green-500"></div>
                            <h3 className="text-lg font-bold">2000</h3>
                            <p className="text-sm">Highest vote percentage (2.7%)</p>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute left-0 w-5 h-5 rounded-full bg-green-500"></div>
                            <h3 className="text-lg font-bold">2016</h3>
                            <p className="text-sm">Achieved ballot access in majority of states</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h2 className="mt-0">Current Status and Impact</h2>
                <p>
                    While the Green Party has not won major national offices, it has succeeded in local elections 
                    and has influenced national discourse on environmental issues, social justice, and electoral reform. 
                    The party has been particularly successful in pushing environmental concerns into mainstream political debate.
                </p>
                <p>
                    The party continues to advocate for radical environmental and social justice policies, often 
                    pushing the Democratic Party to take stronger positions on these issues. It maintains ballot 
                    access in many states and regularly fields candidates at all levels of government.
                </p>
            </div>
        </article>
    )
} 