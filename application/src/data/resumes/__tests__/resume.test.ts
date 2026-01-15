import { describe, expect, it } from 'vitest';
import {
	getFeaturedProjects,
	getImpactMetrics,
	getProfileUrl,
	getResume,
	getServices,
	getSkillSummaries,
} from '../index';

describe('resume data helpers', () => {
	const resumeFr = getResume('fr');
	const resumeEn = getResume('en');

	it('returns the default (fr) resume when locale is missing or invalid', () => {
		expect(getResume()).toBe(resumeFr);
		expect(getResume('fr')).toBe(resumeFr);
		// Unknown locales should fall back to the default French resume
		// @ts-expect-error intentionally passing unsupported locale
		expect(getResume('es')).toBe(resumeFr);
	});

	it('returns the requested locale when available', () => {
		expect(getResume('en')).toBe(resumeEn);
	});

	it('resolves profile URLs case-insensitively per locale', () => {
		const expected = resumeEn.basics.profiles.find((profile) => profile.network === 'LinkedIn')?.url;
		expect(expected).toBeDefined();
		expect(getProfileUrl('linkedin', 'en')).toBe(expected);
		expect(getProfileUrl('LINKEDIN', 'en')).toBe(expected);
		expect(getProfileUrl('unknown', 'en')).toBeUndefined();
	});

	it('exposes featured projects only and respects the limit parameter', () => {
		const featured = getFeaturedProjects('fr');
		expect(featured.length).toBeGreaterThan(0);
		expect(featured.every((project) => project.featured)).toBe(true);

		const limited = getFeaturedProjects('fr', 2);
		expect(limited).toHaveLength(2);
		expect(limited).toEqual(featured.slice(0, 2));
	});

	it('returns impact metrics and skills from resume metadata', () => {
		expect(getImpactMetrics('en')).toEqual(resumeEn.meta?.impact ?? []);
		expect(getSkillSummaries('fr')).toEqual(resumeFr.skills ?? []);
	});

	it('returns services sourced from resume metadata', () => {
		expect(getServices('en')).toEqual(resumeEn.meta?.services ?? []);
		expect(getServices('fr')).toEqual(resumeFr.meta?.services ?? []);
	});
});
