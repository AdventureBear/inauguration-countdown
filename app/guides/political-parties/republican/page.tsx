export default function RepublicanPartyPage() {
    return (
        <article className="max-w-4xl mx-auto px-4 py-8 prose dark:prose-invert prose-blue">
            <h1>The Republican Party</h1>
            
            <div className="not-prose mb-8 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <p className="text-sm text-red-800 dark:text-red-200">
                    Founded in 1854, the Republican Party emerged from the anti-slavery movement and 
                    quickly became a major force in American politics, earning the nickname &quot;Grand Old Party&quot; (GOP).
                </p>
            </div>

            <h2>Origins and Lincoln Era (1854-1877)</h2>
            <p>
                The Republican Party formed from a coalition of anti-slavery activists, former Whigs, and Free Soil Party members. Early positions included:
            </p>
            <ul>
                <li>Opposition to slavery expansion</li>
                <li>Support for free labor and free soil</li>
                <li>Modernization and industrialization</li>
                <li>Strong federal government</li>
                <li>Protective tariffs</li>
            </ul>

            <h2>Gilded Age (1877-1901)</h2>
            <p>
                After the Civil War, the party shifted focus:
            </p>
            <ul>
                <li>Pro-business policies</li>
                <li>Industrial expansion</li>
                <li>Gold standard</li>
                <li>High tariffs</li>
                <li>Civil service reform</li>
            </ul>

            <h2>Progressive Republican Era (1901-1932)</h2>
            <div className="mb-6">
                <p>
                    Under Theodore Roosevelt and others, the party embraced progressive reforms:
                </p>
                <ul>
                    <li>Trust-busting</li>
                    <li>Conservation of natural resources</li>
                    <li>Food and drug regulation</li>
                    <li>Corporate oversight</li>
                </ul>
            </div>

            <h2>Conservative Coalition (1932-1968)</h2>
            <div className="mb-6">
                <p>
                    In opposition to the New Deal, the party realigned:
                </p>
                <ul>
                    <li>Opposition to federal expansion</li>
                    <li>Anti-communist stance</li>
                    <li>Free market economics</li>
                    <li>States&apos; rights advocacy</li>
                </ul>
            </div>

            <h2>Modern Era (1968-Present)</h2>
            <div className="mb-6">
                <p>
                    The party has evolved to champion:
                </p>
                <ul>
                    <li>Lower taxes</li>
                    <li>Deregulation</li>
                    <li>Strong national defense</li>
                    <li>Social conservatism</li>
                    <li>Second Amendment rights</li>
                    <li>Limited government</li>
                </ul>
            </div>

            <h2>Key Historical Figures</h2>
            <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Abraham Lincoln</h3>
                    <p className="text-sm">First Republican president. Led Union through Civil War, abolished slavery.</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Theodore Roosevelt</h3>
                    <p className="text-sm">26th President. Champion of Progressive Era reforms and conservation.</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Ronald Reagan</h3>
                    <p className="text-sm">40th President. Defined modern conservatism and supply-side economics.</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Dwight D. Eisenhower</h3>
                    <p className="text-sm">34th President. Moderate Republican who continued New Deal programs.</p>
                </div>
            </div>

            <h2>Major Platform Shifts</h2>
            <div className="not-prose">
                <div className="relative">
                    <div className="absolute h-full w-0.5 bg-red-200 dark:bg-red-800 left-2.5"></div>
                    <div className="space-y-6">
                        <div className="relative pl-8">
                            <div className="absolute left-0 w-5 h-5 rounded-full bg-red-500"></div>
                            <h3 className="text-lg font-bold">1854: Formation</h3>
                            <p className="text-sm">Founded on anti-slavery platform</p>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute left-0 w-5 h-5 rounded-full bg-red-500"></div>
                            <h3 className="text-lg font-bold">1896: Pro-Business Shift</h3>
                            <p className="text-sm">Aligned with industrial and financial interests</p>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute left-0 w-5 h-5 rounded-full bg-red-500"></div>
                            <h3 className="text-lg font-bold">1932: Opposition to New Deal</h3>
                            <p className="text-sm">Embraced limited government and free market principles</p>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute left-0 w-5 h-5 rounded-full bg-red-500"></div>
                            <h3 className="text-lg font-bold">1964: Southern Strategy</h3>
                            <p className="text-sm">Appeals to Southern conservatives on states&apos; rights</p>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute left-0 w-5 h-5 rounded-full bg-red-500"></div>
                            <h3 className="text-lg font-bold">1980: Reagan Revolution</h3>
                            <p className="text-sm">Conservative coalition of social and fiscal policies</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h2 className="mt-0">Current State</h2>
                <p>
                    Today&apos;s Republican Party is a center-right coalition advocating for conservative social values, 
                    free market economics, deregulation, and strong national defense. The party draws strong support 
                    from rural areas, evangelical Christians, and business interests.
                </p>
            </div>
        </article>
    )
} 