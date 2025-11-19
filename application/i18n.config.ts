export const SUPPORTED_LOCALES = ['fr', 'en'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'fr';

export const LOCALE_LABELS: Record<Locale, string> = {
    fr: 'Francais',
    en: 'English',
};

export const SITE_NAME = 'ESCEMI';

export type MetaCopy = {
    title: string;
    description: string;
};

export type LinkCopy = {
    label: string;
    href: string;
};

export type HeroCopy = {
    heading: string;
    body: string;
    primaryCta: LinkCopy;
    secondaryCta: LinkCopy;
};

export type NewsCopy = {
    title: string;
    body: string;
    linkLabel: string;
    href: string;
};

export type LocaleCopy = {
    meta: MetaCopy;
    hero: HeroCopy;
    news: NewsCopy;
};

export const UI_COPY: Record<Locale, LocaleCopy> = {
    fr: {
        meta: {
            title: 'ESCEMI — Conseil data et IA',
            description:
                'Studio francais dedie aux experiences data et aux produits assistes par l IA pour les equipes marketing.',
        },
        hero: {
            heading: 'Engineering Intelligence',
            body:
                'Strategic AI & software consulting',
            primaryCta: {
                label: 'Parler a un expert',
                href: 'https://escemi.fr/contact',
            },
            secondaryCta: {
                label: 'Voir nos projets',
                href: 'https://escemi.fr',
            },
        },
        news: {
            title: 'Des playbooks orientes resultats',
            body:
                'Chaque mission demarre par un cadrage data, suivi de sprints courts pour prouver la valeur avant l industrialisation.',
            linkLabel: 'Explorer notre approche',
            href: 'https://escemi.fr',
        },
    },
    en: {
        meta: {
            title: 'ESCEMI — Data and AI consulting',
            description:
                'Paris based studio building data informed journeys and AI assisted products for go to market teams.',
        },
        hero: {
            heading: 'Engineering Intelligence',
            body:
                'Strategic AI & software consulting',
            primaryCta: {
                label: 'Talk with a specialist',
                href: 'https://escemi.fr/en/contact',
            },
            secondaryCta: {
                label: 'See recent work',
                href: 'https://escemi.fr/en',
            },
        },
        news: {
            title: 'Playbooks focused on outcomes',
            body:
                'Every engagement starts with a lean data assessment, then quick validation sprints before scaling inside your stack.',
            linkLabel: 'Review the method',
            href: 'https://escemi.fr/en',
        },
    },
};

export function isLocale(value: string | undefined): value is Locale {
    return Boolean(value && SUPPORTED_LOCALES.includes(value as Locale));
}

export function resolveLocale(value?: string): Locale {
    if (isLocale(value)) {
        return value;
    }

    return DEFAULT_LOCALE;
}

export function getCopyForLocale(value?: string): LocaleCopy {
    const locale = resolveLocale(value);
    return UI_COPY[locale];
}
