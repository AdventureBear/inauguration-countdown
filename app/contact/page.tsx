'use client';

export default function ContactPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-blue-800 dark:text-blue-400 mb-6">Contact Us</h1>
            
            <div className="space-y-6">
                <p className="text-gray-600 dark:text-gray-300">
                    Have questions or feedback? Email us at:
                </p>

                <div className="p-6 bg-white dark:bg-gray-800/30 rounded-lg border border-gray-200 
                            dark:border-gray-700">
                    <p className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                        info@nextpresidentialelection.us
                    </p>
                    
                    <h2 className="text-lg font-semibold mb-3">We're here to help with:</h2>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        <li>• Historical data corrections</li>
                        <li>• Educational resources and study guides</li>
                        <li>• General questions about the site</li>
                        <li>• Press inquiries</li>
                    </ul>
                </div>
            </div>
        </div>
    );
} 