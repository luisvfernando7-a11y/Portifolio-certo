import { MetadataRoute } from 'next';
import {routing, ORIGIN, localePath} from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
    return routing.locales.map(locale => ({
        url: `${ORIGIN}${localePath(locale)}`,
        alternates: {languages: {
            'pt-BR': `${ORIGIN}/`, en: `${ORIGIN}/en`, es: `${ORIGIN}/es`, 'x-default': `${ORIGIN}/`,
        }},
    }))
}
