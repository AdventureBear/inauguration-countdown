import { MetadataRoute } from 'next';
import presidents from '@/data/presidents.json';
import { slugify } from '@/utils/slugify';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.nextpresidentialelection.us';

    // Static routes
    const routes = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/events`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
    ];

    // Dynamic president routes
    const presidentRoutes = presidents.presidents.map(president => ({
        url: `${baseUrl}/presidents/${slugify(president.name)}?n=${president.number}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...routes, ...presidentRoutes];
} 