export default function AttributionsPage() {
    return (
        <article className="max-w-4xl mx-auto px-4 py-8 prose dark:prose-invert">
            <h1>Sources & Attributions</h1>
            
            <p className="lead">
                This site relies on authoritative sources to provide accurate information about American politics. 
                Below are the key references used in creating our content.
            </p>

            <h2>Political Movements</h2>
            <ul>
                <li>Civil Rights Movement
                    <ul>
                        <li><a href="https://www.loc.gov/collections/civil-rights-history-project/" target="_blank" rel="noopener noreferrer">Library of Congress Civil Rights History Project</a></li>
                        <li><a href="https://www.archives.gov/research/civil-rights" target="_blank" rel="noopener noreferrer">National Archives: Civil Rights Movement Records</a></li>
                        <li><a href="https://kinginstitute.stanford.edu/" target="_blank" rel="noopener noreferrer">Stanford&apos;s Martin Luther King, Jr. Research and Education Institute</a></li>
                    </ul>
                </li>
                <li>Environmental Movement
                    <ul>
                        <li><a href="https://www.epa.gov/history" target="_blank" rel="noopener noreferrer">Environmental Protection Agency Historical Publications</a></li>
                        <li><a href="https://www.nrdc.org/history-environmental-movement" target="_blank" rel="noopener noreferrer">Environmental Defense Fund Historical Archives</a></li>
                    </ul>
                </li>
                <li>Conservative Movement
                    <ul>
                        <li><a href="https://www.heritage.org/archives" target="_blank" rel="noopener noreferrer">Heritage Foundation Historical Documents</a></li>
                        <li><a href="https://www.nationalreview.com/archives/" target="_blank" rel="noopener noreferrer">National Review Archives</a></li>
                    </ul>
                </li>
                <li>Anti-War Movement
                    <ul>
                        <li><a href="https://www.archives.gov/research/military/vietnam-war" target="_blank" rel="noopener noreferrer">National Archives: Vietnam War Records</a></li>
                        <li><a href="https://www.si.edu/spotlight/vietnam-war" target="_blank" rel="noopener noreferrer">Smithsonian Collections: Anti-War Movement</a></li>
                    </ul>
                </li>
            </ul>

            <h2>Political Parties</h2>
            <ul>
                <li><a href="https://www.loc.gov/collections/political-parties/" target="_blank" rel="noopener noreferrer">Library of Congress: Political Party Materials</a></li>
                <li><a href="https://americanhistory.si.edu/political-history" target="_blank" rel="noopener noreferrer">Smithsonian Political History Collections</a></li>
            </ul>

            <h2>Government Resources</h2>
            <ul>
                <li><a href="https://www.archives.gov/" target="_blank" rel="noopener noreferrer">National Archives and Records Administration (NARA)</a></li>
                <li><a href="https://www.congress.gov/" target="_blank" rel="noopener noreferrer">Congress.gov</a></li>
                <li><a href="https://www.whitehousehistory.org/" target="_blank" rel="noopener noreferrer">The White House Historical Association</a></li>
                <li><a href="https://www.fec.gov/" target="_blank" rel="noopener noreferrer">Federal Election Commission</a></li>
                <li><a href="https://www.eac.gov/" target="_blank" rel="noopener noreferrer">United States Election Assistance Commission</a></li>
            </ul>

            <h2>Academic Sources</h2>
            <ul>
                <li><a href="https://www.apsanet.org/" target="_blank" rel="noopener noreferrer">American Political Science Association Resources</a></li>
                <li><a href="https://crsreports.congress.gov/" target="_blank" rel="noopener noreferrer">Congressional Research Service Reports</a></li>
                <li><a href="https://www.hks.harvard.edu/research-insights" target="_blank" rel="noopener noreferrer">Harvard Kennedy School&apos;s American Politics Research</a></li>
            </ul>

            <h2>Image Credits</h2>
            <ul>
                <li><a href="https://www.loc.gov/pictures/" target="_blank" rel="noopener noreferrer">Library of Congress Digital Collections</a></li>
                <li><a href="https://catalog.archives.gov/advancedsearch" target="_blank" rel="noopener noreferrer">National Archives Digital Collections</a></li>
                <li><a href="https://collections.si.edu/search/" target="_blank" rel="noopener noreferrer">Smithsonian Institution Images</a></li>
            </ul>

            <h2>Icons & Design Elements</h2>
            <div className="not-prose">
                <div className="mt-4 text-xs text-gray-500 dark:text-gray-500">
                    American Eagle by Raymond from <a 
                        href="https://thenounproject.com/browse/icons/term/american-eagle/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        title="American Eagle Icons"
                        className="hover:text-blue-600 dark:hover:text-blue-400"
                    >
                        Noun Project
                    </a> (CC BY 3.0)
                </div>
            </div>

            <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h2 className="mt-0">Note on Usage</h2>
                <p>
                    All content on this site is intended for educational purposes. We strive to provide 
                    accurate, nonpartisan information about American politics and history. While we draw 
                    from these authoritative sources, any errors or omissions are our own. If you notice 
                    any inaccuracies, please contact us for correction.
                </p>
            </div>
        </article>
    )
} 