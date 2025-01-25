export default function PoliticalPartiesPage() {
    return (
        <article className="max-w-4xl mx-auto px-4 py-8 prose dark:prose-invert prose-blue">
            <h1>American Political Parties: A Historical Guide</h1>
            
            <div className="not-prose mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                    The United States has seen several major political parties rise and fall throughout its history, 
                    with positions and platforms evolving significantly over time.
                </p>
            </div>

            <h2>Current Major Parties</h2>
            
            <div className="not-prose grid gap-6 mb-12">
                <div className="p-6 border border-blue-100 dark:border-blue-900 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Democratic Party</h3>
                    <p className="text-sm mb-3">Founded: 1828</p>
                    <div className="mb-4">
                        <h4 className="font-semibold mb-2">Key Eras:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Jeffersonian Era (1828-1860): States&apos; rights, limited government</li>
                            <li>Civil War & Reconstruction (1860-1896): Southern interests</li>
                            <li>Progressive Era (1896-1932): Urban reform, labor rights</li>
                            <li>New Deal Coalition (1932-1968): Social programs, civil rights</li>
                            <li>Modern Era (1968-present): Social liberalism, progressive policies</li>
                        </ul>
                    </div>
                    <a href="/guides/political-parties/democratic" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                        Read more about the Democratic Party →
                    </a>
                </div>

                <div className="p-6 border border-red-100 dark:border-red-900 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Republican Party</h3>
                    <p className="text-sm mb-3">Founded: 1854</p>
                    <div className="mb-4">
                        <h4 className="font-semibold mb-2">Key Eras:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Lincoln Era (1854-1877): Anti-slavery, strong federal government</li>
                            <li>Gilded Age (1877-1901): Pro-business, industrialization</li>
                            <li>Progressive Republican Era (1901-1932): Trust-busting, conservation</li>
                            <li>Conservative Coalition (1932-1968): Anti-New Deal, states%apos; rights</li>
                            <li>Modern Era (1968-present): Social conservatism, free market economics</li>
                        </ul>
                    </div>
                    <a href="/guides/political-parties/republican" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                        Read more about the Republican Party →
                    </a>
                </div>
            </div>

            <h2>Historical Parties</h2>
            
            <div className="not-prose grid gap-4 mb-12">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-1">Federalist Party</h3>
                    <p className="text-sm mb-2">Active: 1789-1824</p>
                    <p className="text-sm mb-2">Key positions: Strong federal government, pro-British foreign policy, urban and commercial interests</p>
                    <p className="text-sm">Notable figures: Alexander Hamilton, John Adams</p>
                </div>

                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-1">Whig Party</h3>
                    <p className="text-sm mb-2">Active: 1833-1856</p>
                    <p className="text-sm mb-2">Key positions: Modernization, economic protectionism, moral reform</p>
                    <p className="text-sm">Notable figures: Henry Clay, Daniel Webster</p>
                </div>

                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-1">Progressive Party</h3>
                    <p className="text-sm mb-2">Active: 1912-1920</p>
                    <p className="text-sm mb-2">Key positions: Anti-corruption, regulation of large corporations, social welfare</p>
                    <p className="text-sm">Notable figures: Theodore Roosevelt</p>
                </div>
            </div>

            <h2>Notable Third Parties</h2>
            <ul>
                <li>Green Party (1984-present)</li>
                <li>Libertarian Party (1971-present)</li>
                <li>Reform Party (1995-present)</li>
                <li>American Independent Party (1967-present)</li>
            </ul>

            <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h2 className="mt-0">Understanding Party Evolution</h2>
                <p>
                    American political parties have undergone significant transformations throughout history. 
                    The positions and constituencies of both major parties have shifted dramatically, 
                    particularly around key moments like the Civil War, the Great Depression, and the Civil Rights Movement.
                </p>
                <p>
                    For example, the Republican Party of Lincoln%apos;s era championed federal power and civil rights, 
                    positions more commonly associated with modern Democrats. Similarly, the Democratic Party%apos;s 
                    historical support for states%apos; rights and limited government now more closely aligns with 
                    modern Republican positions.
                </p>
            </div>
        </article>
    )
} 