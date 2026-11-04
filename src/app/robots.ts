import { MetadataRoute } from 'next';
import {ORIGIN} from '@/i18n/routing';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `${ORIGIN}/sitemap.xml`,
    }
}
