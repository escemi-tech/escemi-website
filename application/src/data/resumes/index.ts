import resumeCommon from './resume.common.json';
import resumeEn from './resume.en.json';
import resumeFr from './resume.fr.json';

type ResumeCommon = typeof resumeCommon;
type ResumeLocaleData = typeof resumeEn;
type ResumeBasics = ResumeCommon['basics'] & ResumeLocaleData['basics'];
type ResumeProjectMerged = ResumeCommon['projects'][number] & ResumeLocaleData['projects'][number];
type ResumeWorkMerged = ResumeCommon['work'][number] & ResumeLocaleData['work'][number];
type ResumeCertificateMerged = ResumeCommon['certificates'][number] & ResumeLocaleData['certificates'][number];

type ResumeMerged = Omit<ResumeCommon, 'basics' | 'projects' | 'work' | 'certificates'> &
    Omit<ResumeLocaleData, 'basics' | 'projects' | 'work' | 'certificates'> & {
        basics: ResumeBasics;
        projects: ResumeProjectMerged[];
        work: ResumeWorkMerged[];
        certificates: ResumeCertificateMerged[];
    };

type ResumeArrayItem = Record<string, unknown> & { id?: string | null };

function mergeArray(base: readonly ResumeArrayItem[] = [], override: readonly ResumeArrayItem[] = []): ResumeArrayItem[] {
    if (!base.length) {
        return [...override];
    }
    if (!override.length) {
        return [...base];
    }

    const hasId = (item: ResumeArrayItem): item is ResumeArrayItem & { id: string } => typeof item.id === 'string';

    if (base.every(hasId) && override.every(hasId)) {
        const baseMap = new Map(base.map((item) => [item.id, item]));
        const merged = override.map((item) => ({
            ...baseMap.get(item.id),
            ...item,
        }));
        const overrideIds = new Set(override.map((item) => item.id));
        base.forEach((item) => {
            if (!overrideIds.has(item.id)) {
                merged.push(item);
            }
        });
        return merged;
    }

    return override
        .map((item, index) => ({
            ...(base[index] ?? {}),
            ...item,
        }))
        .concat(base.slice(override.length));
}

function mergeResumeData(base: ResumeCommon, override: ResumeLocaleData): ResumeMerged {
    const baseLocale = base as unknown as Partial<ResumeLocaleData>;
    return {
        ...base,
        ...override,
        basics: {
            ...base.basics,
            ...override.basics,
        },
        meta: {
            ...(baseLocale.meta ?? {}),
            ...(override.meta ?? {}),
        },
        awards: mergeArray(baseLocale.awards ?? [], override.awards ?? []) as ResumeMerged['awards'],
        certificates: mergeArray(base.certificates ?? [], override.certificates ?? []) as ResumeMerged['certificates'],
        education: mergeArray(baseLocale.education ?? [], override.education ?? []) as ResumeMerged['education'],
        interests: mergeArray(baseLocale.interests ?? [], override.interests ?? []) as ResumeMerged['interests'],
        publications: mergeArray(baseLocale.publications ?? [], override.publications ?? []) as ResumeMerged['publications'],
        references: mergeArray(baseLocale.references ?? [], override.references ?? []) as ResumeMerged['references'],
        skills: mergeArray(baseLocale.skills ?? [], override.skills ?? []) as ResumeMerged['skills'],
        volunteer: mergeArray(baseLocale.volunteer ?? [], override.volunteer ?? []) as ResumeMerged['volunteer'],
        work: mergeArray(base.work ?? [], override.work ?? []) as ResumeMerged['work'],
        projects: mergeArray(base.projects ?? [], override.projects ?? []) as ResumeMerged['projects'],
    };
}

export type ResumeLocale = 'en' | 'fr';

const RESUMES: Record<ResumeLocale, ResumeMerged> = {
    en: mergeResumeData(resumeCommon, resumeEn),
    fr: mergeResumeData(resumeCommon, resumeFr),
};
export type Resume = ResumeMerged;
export type ResumeProfile = ResumeBasics['profiles'][number];
export type ResumeImpactMetric = NonNullable<Resume['meta']>['impact'][number];
export type ResumeProject = ResumeProjectMerged;
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