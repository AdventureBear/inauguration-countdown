import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/admin/', '/_next/', '/private/']
        },
        sitemap: 'https://www.nextpresidentialelection.us/sitemap.xml',
        host: 'https://www.nextpresidentialelection.us'
    }
} 