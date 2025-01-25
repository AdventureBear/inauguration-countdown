export default function PrivacyPage() {
    return (
        <div className="max-w-4xl mx-auto prose dark:prose-invert">
            <h1 className="text-3xl font-bold text-blue-800 dark:text-blue-400 mb-6">Privacy Policy</h1>
            
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-300 mb-4">Data Collection</h2>
                <p>This website does not collect any personal information from visitors. We do not use cookies, analytics, or any third-party tracking tools.</p>
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