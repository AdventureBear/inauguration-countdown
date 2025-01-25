export default function DemocraticPartyPage() {
    return (
        <article className="max-w-4xl mx-auto px-4 py-8 prose dark:prose-invert prose-blue">
            <h1>The Democratic Party</h1>
            
            <div className="not-prose mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                    Founded in 1828, the Democratic Party is the oldest active political party in the United States 
                    and one of the oldest political parties in the world.
                </p>
            </div>

            <h2>Origins and Early Years (1828-1860)</h2>
            <p>
                The Democratic Party emerged from the Jeffersonian Democratic-Republican Party, formally organizing 
                during Andrew Jackson&apos;s presidential campaign. The party initially championed:
            </p>
            <ul>
                <li>States&apos; rights and limited federal government</li>
                <li>Agrarian and frontier interests</li>
                <li>Opposition to the national bank</li>
                <li>Popular democracy (for white men)</li>
            </ul>

            <h2>Civil War and Reconstruction Era (1860-1896)</h2>
            <p>
                The party split over slavery leading to the Civil War. During this period:
            </p>
            <ul>
                <li>Northern Democrats opposed the Civil War</li>
                <li>Southern Democrats supported the Confederacy</li>
                <li>Post-war party opposed Reconstruction policies</li>
                <li>Supported white supremacy in the South</li>
            </ul>

            <h2>Progressive Era (1896-1932)</h2>
            <div className="mb-6">
                <p>
                    Under William Jennings Bryan and Woodrow Wilson, the party embraced progressivism:
                </p>
                <ul>
                    <li>Anti-trust legislation</li>
                    <li>Labor rights and unions</li>
                    <li>Women&apos;s suffrage</li>
                    <li>Federal Reserve System</li>
                    <li>Income tax</li>
                </ul>
            </div>

            <h2>New Deal Coalition (1932-1968)</h2>
            <div className="mb-6">
                <p>
                    Franklin D. Roosevelt&apos;s New Deal transformed the party:
                </p>
                <ul>
                    <li>Social Security and welfare programs</li>
                    <li>Strong labor unions</li>
                    <li>Urban political machines</li>
                    <li>Civil rights legislation (later)</li>
                </ul>
            </div>

            <h2>Modern Era (1968-Present)</h2>
            <div className="mb-6">
                <p>
                    The party has evolved to champion:
                </p>
                <ul>
                    <li>Civil rights and social justice</li>
                    <li>Environmental protection</li>
                    <li>Universal healthcare</li>
                    <li>Progressive taxation</li>
                    <li>LGBTQ+ rights</li>
                    <li>Immigration reform</li>
                </ul>
            </div>

            <h2>Key Historical Figures</h2>
            <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Andrew Jackson</h3>
                    <p className="text-sm">Party founder and 7th President. Championed populist democracy and states&apos; rights.</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Franklin D. Roosevelt</h3>
                    <p className="text-sm">32nd President. Created the New Deal and modern liberalism.</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Lyndon B. Johnson</h3>
                    <p className="text-sm">36th President. Passed Civil Rights Act and created Great Society programs.</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Barack Obama</h3>
                    <p className="text-sm">44th President. First African American president, passed healthcare reform.</p>
                </div>
            </div>

            <h2>Major Platform Shifts</h2>
            <div className="not-prose">
                <div className="relative">
                    <div className="absolute h-full w-0.5 bg-blue-200 dark:bg-blue-800 left-2.5"></div>
                    <div className="space-y-6">
                        <div className="relative pl-8">
                            <div className="absolute left-0 w-5 h-5 rounded-full bg-blue-500"></div>
                            <h3 className="text-lg font-bold">1860s: Civil War Split</h3>
                            <p className="text-sm">Party divided over slavery and states&apos; rights</p>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute left-0 w-5 h-5 rounded-full bg-blue-500"></div>
                            <h3 className="text-lg font-bold">1896: Progressive Turn</h3>
                            <p className="text-sm">Embraced economic populism and regulation</p>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute left-0 w-5 h-5 rounded-full bg-blue-500"></div>
                            <h3 className="text-lg font-bold">1932: New Deal Coalition</h3>
                            <p className="text-sm">Shifted to support strong federal government and labor</p>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute left-0 w-5 h-5 rounded-full bg-blue-500"></div>
                            <h3 className="text-lg font-bold">1964: Civil Rights</h3>
                            <p className="text-sm">Embraced civil rights, lost Southern white support</p>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute left-0 w-5 h-5 rounded-full bg-blue-500"></div>
                            <h3 className="text-lg font-bold">1992: New Democrats</h3>
                            <p className="text-sm">Moved toward center on economic issues</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h2 className="mt-0">Current State</h2>
                <p>
                    Today&apos;s Democratic Party is a center-left coalition supporting progressive social policies, 
                    environmental protection, and regulated capitalism with strong social safety nets. The party 
                    draws support from urban areas, minorities, young voters, and educated professionals.
                </p>
            </div>
        </article>
    )
} 