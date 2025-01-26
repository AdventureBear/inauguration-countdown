export default function PrivacyPage() {
    return (
        <div className="max-w-4xl mx-auto prose dark:prose-invert">
            <h1 className="text-3xl font-bold text-blue-800 dark:text-blue-400 mb-6">Privacy Policy</h1>
            
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-300 mb-4">Data Collection</h2>
                <p>This website uses Vercel Web Analytics, a privacy-focused analytics solution. We collect minimal, anonymous data about page views and do not use cookies or track individual users. The following anonymous information may be collected:</p>
                <ul>
                    <li>Page URLs visited</li>
                    <li>Referrer information</li>
                    <li>General location (country/region)</li>
                    <li>Device type and browser information</li>
                </ul>
                <p>This data is used only for aggregated statistics and cannot identify individual users. No personal information or cross-site tracking is performed.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-300 mb-4">Search Engine Indexing</h2>
                <p>We use Google Search Console to monitor and maintain our website&apos;s presence in Google Search results. This service helps us understand how Google views our site and optimize its visibility. The data collected includes:</p>
                <ul>
                    <li>Search terms that lead to our site</li>
                    <li>Click-through rates from search results</li>
                    <li>Site indexing status</li>
                    <li>Technical search optimization metrics</li>
                </ul>
                <p>This information is used solely for improving our site&apos;s search visibility and does not involve tracking individual users.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-300 mb-4">Corrections</h2>
                <p>If you notice any inaccuracies in our historical data, please email: 
                    <a href="mailto:corrections@nextpresidentialelection.us" className="text-blue-600 dark:text-blue-400 ml-1">
                        corrections@nextpresidentialelection.us
                    </a>
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-300 mb-4">Updates</h2>
                <p>This privacy policy was last updated on January 25, 2025.</p>
            </section>
        </div>
    );
} 