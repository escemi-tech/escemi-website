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

export type LocaleCopy = {
    meta: MetaCopy;
};

export const UI_COPY: Record<Locale, LocaleCopy> = {
    fr: {
        meta: {
            title: '',
            description:
                '',
        },

    },
    en: {
        meta: {
            title: '',
            description:
                '',
        }
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
