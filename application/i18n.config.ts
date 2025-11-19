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
    hero: {
        greeting: string;
        name: string;
        title: string;
        baseline: string;
        cta: string;
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
        cta: string;
    };
    contact: {
        title: string;
        description: string;
        cta: string;
    };
};

export const UI_COPY: Record<Locale, LocaleCopy> = {
    fr: {
        meta: {
            title: 'ESCEMI - CTO Freelance | Architecture & Leadership Technique',
            description:
                'À votre service pour vous accompagner et relever les défis de vos projets digitaux. Expertise CTO, architecture logicielle, et leadership technique.',
        },
        hero: {
            greeting: 'Bonjour, je suis',
            name: 'Emilien Escalle',
            title: 'CTO Freelance & Architecte Logiciel',
            baseline: 'À votre service pour vous accompagner et relever les défis de vos projets digitaux.',
            cta: 'Discutons de votre projet',
        },
        services: {
            title: 'Expertise & Services',
            items: [
                {
                    title: 'Accompagnement CTO',
                    description: 'Leadership technique, gouvernance IT, et pilotage de roadmap pour accélérer votre croissance.',
                },
                {
                    title: 'Architecture Logicielle',
                    description: 'Conception d\'architectures scalables, modernes et performantes avec les meilleures pratiques.',
                },
                {
                    title: 'Mentorat & Formation',
                    description: 'Montée en compétences de vos équipes sur les technologies et méthodologies modernes.',
                },
                {
                    title: 'Audit Technique',
                    description: 'Évaluation approfondie de votre infrastructure et identification des axes d\'amélioration.',
                },
            ],
        },
        impact: {
            title: 'Impact Mesurable',
            metrics: [
                {
                    label: 'Gain de vélocité',
                    value: '+35%',
                    description: 'Accélération moyenne des sprints après optimisations',
                },
                {
                    label: 'Dette technique',
                    value: '-40%',
                    description: 'Réduction de la dette après refactoring et mentorat',
                },
                {
                    label: 'Temps de déploiement',
                    value: '-70%',
                    description: 'Réduction du lead time grâce aux pipelines CI/CD',
                },
                {
                    label: 'Économies cloud',
                    value: '120K€/an',
                    description: 'Économies annuelles moyennes via modernisation cloud',
                },
            ],
        },
        experience: {
            title: 'Projets & Réalisations',
            cta: 'Voir mon profil complet',
        },
        contact: {
            title: 'Prêt à transformer vos projets ?',
            description: 'Discutons de vos défis techniques et de comment je peux vous aider à les relever.',
            cta: 'Contactez-moi',
        },
    },
    en: {
        meta: {
            title: 'ESCEMI - Freelance CTO | Software Architecture & Technical Leadership',
            description:
                'At your service to support you and meet the challenges of your digital projects. CTO expertise, software architecture, and technical leadership.',
        },
        hero: {
            greeting: 'Hi, I\'m',
            name: 'Emilien Escalle',
            title: 'Freelance CTO & Software Architect',
            baseline: 'At your service to support you and meet the challenges of your digital projects.',
            cta: 'Let\'s discuss your project',
        },
        services: {
            title: 'Expertise & Services',
            items: [
                {
                    title: 'CTO Accompaniment',
                    description: 'Technical leadership, IT governance, and roadmap management to accelerate your growth.',
                },
                {
                    title: 'Software Architecture',
                    description: 'Design of scalable, modern, and performant architectures with best practices.',
                },
                {
                    title: 'Mentoring & Training',
                    description: 'Upskilling your teams on modern technologies and methodologies.',
                },
                {
                    title: 'Technical Audit',
                    description: 'In-depth evaluation of your infrastructure and identification of improvement opportunities.',
                },
            ],
        },
        impact: {
            title: 'Measurable Impact',
            metrics: [
                {
                    label: 'Velocity gain',
                    value: '+35%',
                    description: 'Average sprint acceleration after optimizations',
                },
                {
                    label: 'Technical debt',
                    value: '-40%',
                    description: 'Debt reduction after refactoring and mentoring',
                },
                {
                    label: 'Deployment time',
                    value: '-70%',
                    description: 'Lead time drop through CI/CD pipelines',
                },
                {
                    label: 'Cloud savings',
                    value: '€120K/year',
                    description: 'Average annual savings from cloud modernization',
                },
            ],
        },
        experience: {
            title: 'Projects & Achievements',
            cta: 'View full profile',
        },
        contact: {
            title: 'Ready to transform your projects?',
            description: 'Let\'s discuss your technical challenges and how I can help you overcome them.',
            cta: 'Contact me',
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
