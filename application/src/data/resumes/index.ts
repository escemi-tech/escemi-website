import resumeEn from './resume.en.json';
import resumeFr from './resume.fr.json';

const RESUMES = {
    en: resumeEn,
    fr: resumeFr,
} as const;

export type ResumeLocale = keyof typeof RESUMES;
export type Resume = (typeof RESUMES)[ResumeLocale];
export type ResumeProfile = Resume['basics']['profiles'][number];
export type ResumeImpactMetric = NonNullable<Resume['meta']>['impact'][number];
export type ResumeProject = Resume['projects'][number];
export type ResumeSkill = Resume['skills'][number];
export type ResumeService = NonNullable<Resume['meta']>['services'][number];

const DEFAULT_LOCALE: ResumeLocale = 'fr';

const profilesByLocale: Record<ResumeLocale, Record<string, ResumeProfile>> = Object.keys(RESUMES).reduce(
    (acc, key) => {
        const locale = key as ResumeLocale;
        acc[locale] = (RESUMES[locale].basics?.profiles ?? []).reduce((profiles, profile) => {
            profiles[profile.network.toLowerCase()] = profile;
            return profiles;
        }, {} as Record<string, ResumeProfile>);
        return acc;
    },
    {} as Record<ResumeLocale, Record<string, ResumeProfile>>
);

function resolveLocale(locale?: ResumeLocale): ResumeLocale {
    if (locale && locale in RESUMES) {
        return locale;
    }

    return DEFAULT_LOCALE;
}

export function getResume(locale?: ResumeLocale): Resume {
    return RESUMES[resolveLocale(locale)];
}

export function getProfileUrl(network: string, locale?: ResumeLocale): string | undefined {
    const map = profilesByLocale[resolveLocale(locale)];
    return map?.[network.toLowerCase()]?.url;
}

export function getPrimaryWebsite(locale?: ResumeLocale): string | undefined {
    return getResume(locale).basics?.url;
}

export function getImpactMetrics(locale?: ResumeLocale): ResumeImpactMetric[] {
    return getResume(locale).meta?.impact ?? [];
}

export function getFeaturedProjects(locale?: ResumeLocale, limit?: number): ResumeProject[] {
    const featured = (getResume(locale).projects ?? []).filter((project) => project.featured);
    if (typeof limit === 'number') {
        return featured.slice(0, limit);
    }

    return featured;
}

export function getSkillSummaries(locale?: ResumeLocale): ResumeSkill[] {
    return getResume(locale).skills ?? [];
}

export function getServices(locale?: ResumeLocale): ResumeService[] {
    return getResume(locale).meta?.services ?? [];
}