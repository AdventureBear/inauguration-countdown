import { MetadataRoute } from 'next';
import presidents from '@/data/presidents.json';
import events from '@/data/events.json';
import { President} from '@/types/types';
import { slugify } from '@/utils/slugify';

// Add type for changeFrequency
type ChangeFreq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.nextpresidentialelection.us';

    // Static Routes
    const staticRoutes = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily' as ChangeFreq,
            priority: 1
        },
        {
            url: `${baseUrl}/events`,
            lastModified: new Date(),
            changeFrequency: 'daily' as ChangeFreq,
            priority: 0.8
        },
        {
            url: `${baseUrl}/guides`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as ChangeFreq,
            priority: 0.8
        },
        {
            url: `${baseUrl}/presidents`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as ChangeFreq,
            priority: 0.8
        },
        {
          url: `${baseUrl}/presidents/living`,
          lastModified: new Date(),
        },
        {
          url: `${baseUrl}/presidents/historical`,
          lastModified: new Date(),
        },
        {
            url: `${baseUrl}/compare/presidents`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as ChangeFreq,
            priority: 0.8,
        },
        {
          url: `${baseUrl}/changelog`,
          lastModified: new Date(),
        },
    ];

    // Guide Routes
    const guideRoutes = [
        // Main Guide Categories
        {
            url: `${baseUrl}/guides/political-parties`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as ChangeFreq,
            priority: 0.7
        },
        {
            url: `${baseUrl}/guides/political-movements`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as ChangeFreq,
            priority: 0.7
        },
        {
            url: `${baseUrl}/guides/electoral-college`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as ChangeFreq,
            priority: 0.7
        },
        {
            url: `${baseUrl}/guides/voting`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as ChangeFreq,
            priority: 0.7
        },
        // Political Movement Subcategories
        {
            url: `${baseUrl}/guides/political-movements/abolitionist`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as ChangeFreq,
            priority: 0.6
        },
        {
            url: `${baseUrl}/guides/political-movements/anti-federalist`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as ChangeFreq,
            priority: 0.6
        },
        {
            url: `${baseUrl}/guides/political-movements/civil-rights`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as ChangeFreq,
            priority: 0.6
        },
        {
            url: `${baseUrl}/guides/political-movements/conservative`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as ChangeFreq,
            priority: 0.6
        },
        {
            url: `${baseUrl}/guides/political-movements/environmental`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as ChangeFreq,
            priority: 0.6
        },
        {
            url: `${baseUrl}/guides/political-movements/anti-war`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as ChangeFreq,
            priority: 0.6
        },
        {
            url: `${baseUrl}/guides/political-movements/democratic-republican-societies`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as ChangeFreq,
            priority: 0.6
        },
        {
            url: `${baseUrl}/guides/political-movements/environmental`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as ChangeFreq,
            priority: 0.6
        },
        {
            url: `${baseUrl}/guides/political-movements/labor`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as ChangeFreq,
            priority: 0.6
        },
        {
            url: `${baseUrl}/guides/political-movements/modern-progressive`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as ChangeFreq,
            priority: 0.6
        }, {
            url: `${baseUrl}/guides/political-movements/regulators`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as ChangeFreq,
            priority: 0.6
        },
        {
            url: `${baseUrl}/guides/political-movements/sons-of-liberty`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as ChangeFreq,
            priority: 0.6
        },
        {
            url: `${baseUrl}/guides/political-movements/tea-party`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as ChangeFreq,
            priority: 0.6
        },
        {
            url: `${baseUrl}/guides/political-movements/temperance`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as ChangeFreq,
            priority: 0.6
        },
        {
            url: `${baseUrl}/guides/political-movements/women-suffrage`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as ChangeFreq,
            priority: 0.6
        },
        // Political Party Subcategories
        {
            url: `${baseUrl}/guides/political-parties/democratic`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as ChangeFreq,
            priority: 0.6
        },
        {
            url: `${baseUrl}/guides/political-parties/republican`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as ChangeFreq,
            priority: 0.6
        },
        {
            url: `${baseUrl}/guides/political-parties/whig`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as ChangeFreq,
            priority: 0.6
        },
        {
            url: `${baseUrl}/guides/political-parties/federalist`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as ChangeFreq,
            priority: 0.6
        },
        {
            url: `${baseUrl}/guides/political-parties/green`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as ChangeFreq,
            priority: 0.6
        },
        {
            url: `${baseUrl}/guides/political-parties/libertarian`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as ChangeFreq,
            priority: 0.6
        },
        {
            url: `${baseUrl}/guides/political-parties/reform`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as ChangeFreq,
            priority: 0.6
        },
        // Electoral College Subcategories
        {
            url: `${baseUrl}/guides/electoral-college/`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as ChangeFreq,
            priority: 0.6
        },
        // Voting Subcategories
        {
            url: `${baseUrl}/guides/voting/`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as ChangeFreq,
            priority: 0.6
        },
        
    ];

    // Dynamic president routes
    const presidentRoutes = presidents.presidents.map((president: President) => ({
        url: `${baseUrl}/presidents/${slugify(president.name)}?n=${president.number}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as ChangeFreq,
        priority: 0.6
    }));

    // Dynamic Event Routes
    const eventRoutes = events.events.map((event) => ({
        url: `${baseUrl}/events/${event.id}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as ChangeFreq,
        priority: 0.7
    }));



    // Utility Pages
    const utilityRoutes = [
        {
            url: `${baseUrl}/privacy`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as ChangeFreq,
            priority: 0.3
        },
        {
            url: `${baseUrl}/attributions`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as ChangeFreq,
            priority: 0.3
        },
    ];

    return [
        ...staticRoutes,
        ...guideRoutes,
        ...presidentRoutes,
        ...eventRoutes,
        ...utilityRoutes,
    ];
} 