import { getFeaturedProjects, getProfileUrl, getPrimaryWebsite, type ResumeLocale, type ResumeProject } from '../data/resumes';



// External URLs configuration
export const BOOKING_CALENDAR_URL = 'https://calendar.app.google/s2VSvyJ8FnEKCpTB7' as const;
export const EXTERNAL_URLS = {
	linkedin: getProfileUrl('linkedin'),
	malt: getProfileUrl('malt'),
	collective: getProfileUrl('collective'),
	github: getProfileUrl('github'),
	booking: BOOKING_CALENDAR_URL,
	website: getPrimaryWebsite(),
} as const;


const MONTH_LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] as const;

type FeaturedProjectCard = {
	name: string;
	role: string;
	description: string;
	tags: string[];
	highlights: string[];
	url?: string;
	entity?: string;
	timeframe?: string;
};

function formatMonthYear(value?: string | null): string | undefined {
	if (!value) {
		return undefined;
	}
	const [year, month] = value.split('-');
	if (!year) {
		return undefined;
	}
	if (!month) {
		return year;
	}
	const monthIndex = Number(month) - 1;
	const monthLabel = MONTH_LABELS[monthIndex];
	return monthLabel ? `${monthLabel} ${year}` : year;
}

function formatProjectTimeframe(project: ResumeProject): string | undefined {
	const start = formatMonthYear(project.startDate);
	const end = formatMonthYear(project.endDate) ?? (project.endDate ? undefined : 'Present');
	if (!start && !end) {
		return undefined;
	}
	if (!start) {
		return end;
	}
	if (!end) {
		return start;
	}
	return start === end ? start : `${start} — ${end}`;
}

export type ContactButtonIcon = 'linkedin' | 'collective' | 'malt' | 'github';

export type ContactButton = {
	text: string;
	url?: string;
	outlined: boolean;
	icon: ContactButtonIcon;
};

// Project data configuration
export function getFeaturedProjectCards(locale?: ResumeLocale, limit = 4): FeaturedProjectCard[] {
	return getFeaturedProjects(locale, limit).map((project) => ({
		name: project.name,
		role: project.roles?.[0] ?? project.entity ?? project.type ?? '',
		description: project.description,
		tags: project.keywords ?? [],
		highlights: project.highlights ?? [],
		url: project.url,
		entity: project.entity,
		timeframe: formatProjectTimeframe(project),
	}));
}

// Contact buttons configuration
export const CONTACT_BUTTONS: ContactButton[] = [
	{ text: 'LinkedIn', url: EXTERNAL_URLS.linkedin, outlined: false, icon: 'linkedin' },
	{ text: 'Collective', url: EXTERNAL_URLS.collective, outlined: false, icon: 'collective' },
	{ text: 'Malt', url: EXTERNAL_URLS.malt, outlined: true, icon: 'malt' },
	{ text: 'GitHub', url: EXTERNAL_URLS.github, outlined: true, icon: 'github' },
];
