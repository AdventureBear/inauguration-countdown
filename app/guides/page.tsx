import fs from 'fs';
import path from 'path';

interface GuideSection {
    title: string;
    slug: string;
    subPages?: GuideSection[];
}

function getGuideTitle(slug: string): string {
    // Convert slug to title (e.g., "electoral-college" -> "Electoral College")
    return slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

function getGuideSections(): GuideSection[] {
    const guidesDir = path.join(process.cwd(), 'app/guides');
    const entries = fs.readdirSync(guidesDir, { withFileTypes: true });
    
    const sections: GuideSection[] = [];
    
    for (const entry of entries) {
        if (entry.isDirectory() && !entry.name.startsWith('_')) {
            const subDir = path.join(guidesDir, entry.name);
            const subEntries = fs.readdirSync(subDir, { withFileTypes: true });
            
            const subPages: GuideSection[] = [];
            
            for (const subEntry of subEntries) {
                if (subEntry.isDirectory() && !subEntry.name.startsWith('_')) {
                    subPages.push({
                        title: getGuideTitle(subEntry.name),
                        slug: `${entry.name}/${subEntry.name}`,
                    });
                }
            }
            
            sections.push({
                title: getGuideTitle(entry.name),
                slug: entry.name,
                subPages: subPages.length > 0 ? subPages : undefined,
            });
        }
    }
    
    return sections;
}

export default function GuidesPage() {
    const sections = getGuideSections();
    
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Guides</h1>
            
            <div className="grid gap-8">
                {sections.map((section) => (
                    <div key={section.slug} className="space-y-4">
                        <a 
                            href={`/guides/${section.slug}`}
                            className="text-2xl font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            {section.title}
                        </a>
                        
                        {section.subPages && (
                            <div className="pl-6 border-l-2 border-gray-200 dark:border-gray-700 space-y-3">
                                {section.subPages.map((subPage) => (
                                    <a
                                        key={subPage.slug}
                                        href={`/guides/${subPage.slug}`}
                                        className="block text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                    >
                                        {subPage.title}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            
            <div className="mt-12 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h2 className="text-xl font-semibold mb-2">About Our Guides</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    These guides provide comprehensive information about the American political system, 
                    including detailed explanations of electoral processes, political parties, and key 
                    concepts in American democracy.
                </p>
            </div>
        </div>
    );
} 