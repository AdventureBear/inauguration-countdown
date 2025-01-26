export default function GlossaryPage() {
    const BackToTop = () => (
        <a href="#top" className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-1">
            ↑ Back to top
        </a>
    );

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div id="top"></div>
            <h1 className="text-3xl font-bold text-blue-800 dark:text-blue-400 mb-6">Political Glossary</h1>
            
            {/* Quick Jump Section */}
            <div className="mb-12 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Quick Jump to Terms</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    <a href="#civil-rights" className="text-blue-600 dark:text-blue-400 hover:underline">Civil Rights</a>
                    <a href="#coalition-building" className="text-blue-600 dark:text-blue-400 hover:underline">Coalition Building</a>
                    <a href="#constitutional-originalism" className="text-blue-600 dark:text-blue-400 hover:underline">Constitutional Originalism</a>
                    <a href="#electoral-college" className="text-blue-600 dark:text-blue-400 hover:underline">Electoral College</a>
                    <a href="#federalism" className="text-blue-600 dark:text-blue-400 hover:underline">Federalism</a>
                    <a href="#fiscal-conservatism" className="text-blue-600 dark:text-blue-400 hover:underline">Fiscal Conservatism</a>
                    <a href="#grassroots" className="text-blue-600 dark:text-blue-400 hover:underline">Grassroots Activism</a>
                    <a href="#nationalism" className="text-blue-600 dark:text-blue-400 hover:underline">Economic Nationalism</a>
                    <a href="#nonviolent-resistance" className="text-blue-600 dark:text-blue-400 hover:underline">Nonviolent Resistance</a>
                    <a href="#polarization" className="text-blue-600 dark:text-blue-400 hover:underline">Political Polarization</a>
                    <a href="#populist" className="text-blue-600 dark:text-blue-400 hover:underline">Populist Movement</a>
                    <a href="#progressive" className="text-blue-600 dark:text-blue-400 hover:underline">Progressive Movement</a>
                    <a href="#protectionism" className="text-blue-600 dark:text-blue-400 hover:underline">Protectionism</a>
                    <a href="#realignment" className="text-blue-600 dark:text-blue-400 hover:underline">Political Realignment</a>
                    <a href="#social-conservatism" className="text-blue-600 dark:text-blue-400 hover:underline">Social Conservatism</a>
                    <a href="#social-justice" className="text-blue-600 dark:text-blue-400 hover:underline">Social Justice</a>
                    <a href="#states-rights" className="text-blue-600 dark:text-blue-400 hover:underline">States&apos; Rights</a>
                </div>
            </div>

            {/* Terms and Definitions */}
            <div className="space-y-8">
                <div id="civil-rights" className="scroll-mt-16">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Civil Rights</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">The rights of citizens to political and social freedom and equality. Includes protections for voting rights, equal treatment under law, and freedom from discrimination.</p>
                    <BackToTop />
                </div>

                <div id="coalition-building" className="scroll-mt-16">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Coalition Building</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">The process of forming alliances between different political groups or interests to achieve common goals or increase political influence.</p>
                    <BackToTop />
                </div>

                <div id="constitutional-originalism" className="scroll-mt-16">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Constitutional Originalism</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">A legal philosophy that interprets the Constitution as it was understood at the time it was ratified, emphasizing the original meaning and intent of the framers.</p>
                    <BackToTop />
                </div>

                <div id="electoral-college" className="scroll-mt-16">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Electoral College</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">The system used to elect the U.S. President, where states are allocated electoral votes based on their congressional representation. A candidate needs 270 electoral votes to win.</p>
                    <BackToTop />
                </div>

                <div id="federalism" className="scroll-mt-16">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Federalism</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">A system of government where power is divided between a central authority and constituent political units (states). Defines the relationship between federal and state governments.</p>
                    <BackToTop />
                </div>

                <div id="fiscal-conservatism" className="scroll-mt-16">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Fiscal Conservatism</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">A political-economic philosophy advocating for lower taxes, reduced government spending, minimal debt, and free market policies.</p>
                    <BackToTop />
                </div>

                <div id="grassroots" className="scroll-mt-16">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Grassroots Activism</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">Political action that originates from ordinary people at the local level, rather than being orchestrated by traditional power structures or political organizations.</p>
                    <BackToTop />
                </div>

                <div id="nationalism" className="scroll-mt-16">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Economic Nationalism</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">Policies that emphasize domestic control of the economy, labor, and capital formation, often through protectionist policies or restrictions on foreign ownership.</p>
                    <BackToTop />
                </div>

                <div id="nonviolent-resistance" className="scroll-mt-16">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Nonviolent Resistance</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">A strategy for social change that rejects the use of violence, instead using methods such as civil disobedience, boycotts, strikes, and peaceful protests.</p>
                    <BackToTop />
                </div>

                <div id="polarization" className="scroll-mt-16">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Political Polarization</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">The divergence of political attitudes away from the center toward ideological extremes, often resulting in increased partisan division and decreased political compromise.</p>
                    <BackToTop />
                </div>

                <div id="populist" className="scroll-mt-16">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Populist Movement</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">Political movements that appeal to ordinary people who feel their concerns are disregarded by established elite groups. Can emerge from either left-wing or right-wing ideologies.</p>
                    <BackToTop />
                </div>

                <div id="progressive" className="scroll-mt-16">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Progressive Movement</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">Political philosophy advocating for social reform, economic regulation, environmental protection, and expansion of democratic processes. Emphasizes government action to address social and economic inequalities.</p>
                    <BackToTop />
                </div>

                <div id="protectionism" className="scroll-mt-16">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Protectionism</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">Economic policy that restricts international trade through tariffs, quotas, and other regulations to protect domestic industries from foreign competition.</p>
                    <BackToTop />
                </div>

                <div id="realignment" className="scroll-mt-16">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Political Realignment</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">A dramatic change in the political system characterized by a durable new pattern of voting behavior, party coalitions, or policy regime. Often follows significant historical events or social changes.</p>
                    <BackToTop />
                </div>

                <div id="social-conservatism" className="scroll-mt-16">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Social Conservatism</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">Political ideology that emphasizes traditional values, religious beliefs, and established social institutions. Often focuses on issues of family, morality, and cultural stability.</p>
                    <BackToTop />
                </div>

                <div id="social-justice" className="scroll-mt-16">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Social Justice</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">The concept of fair and just relations between the individual and society, often focusing on the distribution of wealth, opportunities, and privileges within a society.</p>
                    <BackToTop />
                </div>

                <div id="states-rights" className="scroll-mt-16">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">States&apos; Rights</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">Political position that emphasizes the rights and powers retained by state governments rather than the federal government, based on the 10th Amendment to the Constitution.</p>
                    <BackToTop />
                </div>
            </div>

            <div className="mt-12 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                    This glossary is regularly updated to reflect current political terminology and movements. 
                    Terms are defined based on their common usage in American political discourse.
                </p>
            </div>
        </div>
    );
} 