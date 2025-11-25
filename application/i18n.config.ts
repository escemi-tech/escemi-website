import { getImpactMetrics, getResume, getSkillSummaries } from './src/data/resumes';

export const SUPPORTED_LOCALES = ['fr', 'en'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'fr';

export const LOCALE_LABELS: Record<Locale, string> = {
    fr: 'Francais',
    en: 'English',
};

export const SITE_NAME = 'ESCEMI';

export const RESUME_PDFS: Record<Locale, string> = {
    fr: '/resumes/resume.fr.pdf',
    en: '/resumes/resume.en.pdf',
};

export const SECTION_LINKS: Record<Locale, Array<{ href: string; label: string }>> = {
    fr: [
        { href: '#expertise', label: 'Expertise' },
        { href: '#projects', label: 'Projets' },
        { href: '#roles', label: 'Postes' },
    ],
    en: [
        { href: '#expertise', label: 'Expertise' },
        { href: '#projects', label: 'Projects' },
        { href: '#roles', label: 'Roles' },
    ],
};

export type MetaCopy = {
    title: string;
    description: string;
};

export type LocaleCopy = {
    meta: MetaCopy;
    hero: {
        greeting: string;
        name: string;
        title: string;
        baseline: string;
        cta: string;
        summary: string;
        signatureNumbers: string[];
        image?: string;
    };
    services: {
        title: string;
        items: Array<{
            title: string;
            description: string;
        }>;
    };
    impact: {
        title: string;
        metrics: Array<{
            label: string;
            value: string;
            description: string;
        }>;
    };
    experience: {
        title: string;
        description: string;
        flipHint: string;
        backLabel: string;
        openLabel: string;
        scopeLabel: string;
        highlightsLabel: string;
        cta: string;
    };
    contact: {
        title: string;
        description: string;
        positions: Array<{
            title: string;
            description: string;
        }>;
        cta: string;
        resumeLinks: Array<{
            locale: Locale;
            label: string;
            href: string;
        }>;
    };
    footer: {
        rights: string;
    };
};

type LocaleTranslations = {
    hero: { greeting: string; cta: string };
    services: { title: string };
    impact: { title: string };
    experience: {
        title: string;
        description: string;
        flipHint: string;
        backLabel: string;
        openLabel: string;
        scopeLabel: string;
        highlightsLabel: string;
        cta: string;
    };
    contact: {
        title: string;
        description: string;
        cta: string;
        resumeLinkLabels: Record<Locale, string>;
    };
    footer: {
        rights: string;
    };
};

const TRANSLATIONS: Record<Locale, LocaleTranslations> = {
    fr: {
        hero: { greeting: 'Bonjour, je suis', cta: 'Discutons de votre projet' },
        services: { title: 'Expertise & Services' },
        impact: { title: 'Impact Mesurable' },
        experience: {
            title: 'Projets & Réalisations',
            description:
                'Parcourez une sélection de cas clients. Retournez chaque projet pour révéler le playbook mission, les temps forts et un accès vers le récit complet.',
            flipHint: 'Retournez pour découvrir le playbook',
            backLabel: 'Retour',
            openLabel: 'Lire l’étude complète',
            scopeLabel: 'Périmètre & impact',
            highlightsLabel: 'Temps forts',
            cta: 'Voir mon profil complet',
        },
        contact: {
            title: 'Prêt à transformer vos projets ?',
            description:
                "Choisissez le format adapté à votre feuille de route : j'apporte des accélérateurs DevX, des blueprints CI/CD et du mentoring qui livrent systématiquement +35% de vélocité, -40% de dette et des déploiements <30 min en moins d'un trimestre.",
            cta: 'Contactez-moi',
            resumeLinkLabels: {
                fr: 'Télécharger le CV (FR)',
                en: 'Télécharger le CV (EN)',
            },
        },
        footer: {
            rights: 'Tous droits réservés.',
        },
    },
    en: {
        hero: { greeting: "Hi, I'm", cta: "Let's discuss your project" },
        services: { title: 'Expertise & Services' },
        impact: { title: 'Measurable Impact' },
        experience: {
            title: 'Projects & Achievements',
            description:
                'Dive into a curated set of case studies. Flip any project to reveal the mission playbook, highlight reel, and a jump to the full external write-up.',
            flipHint: 'Flip for the playbook',
            backLabel: 'Back',
            openLabel: 'Open full case study',
            scopeLabel: 'Scope & impact',
            highlightsLabel: 'Highlights',
            cta: 'View full profile',
        },
        contact: {
            title: 'Ready to transform your projects?',
            description:
                'Choose the posture that fits your roadmap: I plug in with DevX accelerators, CI/CD blueprints, and mentoring assets that consistently deliver +35% sprint velocity, -40% debt, and sub-30-minute deployments inside a quarter.',
            cta: 'Contact me',
            resumeLinkLabels: {
                fr: 'Download resume (FR)',
                en: 'Download resume (EN)',
            },
        },
        footer: {
            rights: 'All rights reserved.',
        },
    },
};

type ContactPosition = {
    title: string;
    description: string;
};

const CONTACT_POSITIONS: Record<Locale, ContactPosition[]> = {
    fr: [
        {
            title: 'CTO Fractional (opérationnel ou advisory)',
            description:
                "Je standardise les blueprints Terraform/Kubernetes, les templates CI/CD GitHub/GitLab et les rituels de leadership pour débloquer les squads multi-produits. Les missions Build & Run et ESCEMI ont livré +35% de vélocité, -40% de dette, des déploiements <30 min avec <5% de change failure et 80-150 kEUR d'économies annuelles.",
        },
        {
            title: 'Lead Dev Senior PHP & Node.js',
            description:
                "J'orchestre des plateformes NestJS, Symfony et Laravel avec CI/CD résilient, canary releases et observabilité intégrée. Air Corsica et la plateforme IoT critique ont réduit le time-to-deploy de 80%, multiplié les releases par 5, garanti 99,9%-99,99% d'uptime, accéléré l'onboarding de 70%, absorbé +10x de trafic et supprimé 85% des pertes de données.",
        },
        {
            title: 'Engineering Manager',
            description:
                "Je coach 15+ équipes distribuées via playbooks Clean Architecture, documentation vivante et pipelines de qualité. Tekkare, Tekoway/Eukles et TestUnMetier ont livré des features 40% plus vite, divisé l'onboarding (3 semaines -> 1,5 semaine et ~5 jours), réduit les bugs post-release de 30%, gagné +35% de satisfaction dev et coupé le time-to-market de 35%.",
        },
    ],
    en: [
        {
            title: 'Fractional CTO (hands-on or advisory)',
            description:
                'I standardize Terraform/Kubernetes blueprints, reusable GitHub/GitLab pipelines, and leadership rituals to unblock multi-squad delivery. Build & Run and ESCEMI missions delivered +35% sprint velocity, -40% technical debt, sub-30-minute deployments with <5% change failure, and EUR 80-150K/year savings.',
        },
        {
            title: 'Senior Lead Developer (PHP & Node.js)',
            description:
                'I architect NestJS, Symfony, and Laravel platforms with resilient CI/CD, canary releases, and observability baked in. Air Corsica and the critical IoT gateway cut deployment time by 80%, increased release cadence 5x, held 99.9%-99.99% uptime, reduced onboarding by 70%, handled 10x traffic, and shrank data-loss incidents by 85%.',
        },
        {
            title: 'Engineering Manager',
            description:
                'I coach 15+ distributed teams through Clean Architecture playbooks, living documentation, and quality pipelines. Tekkare, Tekoway/Eukles, and TestUnMetier engagements shipped features 40% faster, cut onboarding from 3 weeks to 1.5 weeks (and to ~5 days), reduced post-release bugs by 30%, lifted developer satisfaction by 35%, and trimmed time-to-market by 35%.',
        },
    ],
};

function createLocaleCopy(locale: Locale): LocaleCopy {
    const translations = TRANSLATIONS[locale];
    const resume = getResume(locale);
    const heroBaseline = resume.basics?.baseline ?? '';
    const signatureNumbers = (resume.basics?.signatureNumbers ?? []).filter((item) => Boolean(item?.trim?.()));
    const contactDescription = translations.contact.description;
    const serviceItems = getSkillSummaries(locale).map((skill) => ({
        title: skill.name,
        description: (skill.keywords ?? []).join(' · '),
    }));
    const impactMetrics = getImpactMetrics(locale).map((metric) => ({
        label: metric.label,
        value: metric.value,
        description: metric.description,
    }));
    const resumeLinks = (Object.keys(RESUME_PDFS) as Locale[]).map((resumeLocale) => ({
        locale: resumeLocale,
        label: translations.contact.resumeLinkLabels[resumeLocale],
        href: RESUME_PDFS[resumeLocale],
    }));
    return {
        meta: {
            title: `${resume.basics.name} - ${resume.basics.label}`,
            description: resume.basics.summary,
        },
        hero: {
            greeting: translations.hero.greeting,
            name: resume.basics.name,
            title: resume.basics.label,
            baseline: heroBaseline,
            cta: translations.hero.cta,
            summary: resume.basics.summary,
            signatureNumbers,
            image: resume.basics.image,
        },
        services: {
            title: translations.services.title,
            items: serviceItems,
        },
        impact: {
            title: translations.impact.title,
            metrics: impactMetrics,
        },
        experience: {
            title: translations.experience.title,
            description: translations.experience.description,
            flipHint: translations.experience.flipHint,
            backLabel: translations.experience.backLabel,
            openLabel: translations.experience.openLabel,
            scopeLabel: translations.experience.scopeLabel,
            highlightsLabel: translations.experience.highlightsLabel,
            cta: translations.experience.cta,
        },
        contact: {
            title: translations.contact.title,
            description: contactDescription,
            positions: CONTACT_POSITIONS[locale],
            cta: translations.contact.cta,
            resumeLinks,
        },
        footer: {
            rights: translations.footer.rights,
        },
    };
}

export const UI_COPY: Record<Locale, LocaleCopy> = {
    fr: createLocaleCopy('fr'),
    en: createLocaleCopy('en'),
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
